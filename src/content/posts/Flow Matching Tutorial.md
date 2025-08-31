---
title: Flow Matching Tutorial
published: 2025-08-29
description: '流匹配教程'
image: 'https://t.alcy.cc/ai'
tags: [流匹配]
category: '深度学习'
draft: false 
lang: 'zh_CN' 
---

# 链接



- [Flow Matching for Generative Modeling](https://neurips.cc/virtual/2024/tutorial/99531)

- [(3 封私信 / 22 条消息) 通俗易懂的Flow Matching原理解读（附核心公式推导和源代码） - 知乎](https://zhuanlan.zhihu.com/p/4116861550)

- **Diffusion** 就像教一个AI修复老照片。你不断给照片加污渍（前向过程），然后让它学习如何根据当前的破损程度来**预测最初的污渍**（训练），从而一步步地把污渍擦掉（生成）。
- **Flow Matching** 就像教一个AI全局的地形和水流方向。你给出无数个点的例子，告诉它“如果一个水滴在这里，它应该往哪个方向以多快的速度流”（训练）。要生成一个湖泊（数据），你只需要从高处（噪声）放一滴水，它就会沿着学习到的地形（向量场）自动流到湖中（生成）。

- [Flow Matching — Flow Matching documentation](https://facebookresearch.github.io/flow_matching/)



# 演变过程



## AIGC

**AIGC**（**A**rtificial **I**ntelligence **G**enerated **C**ontent，人工智能生成内容）

### GAN 2014

<a href="[[1406.2661\] Generative Adversarial Networks](https://arxiv.org/abs/1406.2661)">arxiv</a>			<a href="[goodfeli/adversarial：论文“Generative Adversarial Networks”的代码和超参数](https://github.com/goodfeli/adversarial)">github</a>		
$$
min_Gmax_DV(D,G)=\mathbb{E_{x\sim P_{data(x)}}}[log D(x)]+\mathbb{E_{z\sim P_{z}(z)}}[log(1-D(G(z)))]
$$

|  符号  |         含义         |
| :----: | :------------------: |
|   G    |    生成器, 印钞机    |
|   D    |    判别器, AI检测    |
|   z    |  噪声(随机高斯噪声)  |
|   x    |       真实数据       |
| p_data | 真实数据概率密度分布 |
| V(D,G) |       价值函数       |

对于AI检测这张是真假钞票, 当然识别到的真钞票(D(x))越大越好, 假钞票(D(G(x)))越小越好

而对于印钞机, 希望骗过检测, 那么肯定希望1-D(G(z))越接近0越好, 那么后面一项就越接近-∞



对于任何一个固定的G，这个最大化问题(最大化价值函数V)的最优解 $D^*_G(x)$ 是：
$$
D^*_G(x)=\frac{p_{data}(x)}{p_{data}(x)+p_g(x)}
$$

#### 训练算法

```pseudocode
对抗生成网络伪代码, k=1, p_g(z): 噪声分布 

for iterations do
	for k steps do
		- 从p_g(z)采样m个噪声样本
		- 从p_data(x)采样m个数据样本
		-  梯度下降算法更新D(下面第一个公式)
	end for
	- 从p_g(z)采样m个噪声样本
	- 更新G(下面第二个公式)
end for
```

$$
\bigtriangledown_{\theta_d}\frac{1}{m}\sum_{i=1}^m[logD(x^{(i)})+log(1-D(G(z^{(i)})))]
$$

$$
\bigtriangledown_{\theta_g}\frac{1}{m}\sum_{i=1}^mlog(1-D(G(z^{(i)})))
$$



### **VAE**

姑且就只说说代码吧, 毕竟VAE我本人从DM中就已经学的差不多了, 直接上手代码了

#### 代码解析

<a href="[learn_vae/VAE/main.ipynb at master · OxOOo/learn_vae](https://github.com/OxOOo/learn_vae/blob/master/VAE/main.ipynb)">code</a>

代码中的步骤为:

1. 图片x映射到隐变量 mu(均值), logvar(方差)

2. 从z = μ (mu)+ ε ⊙ σ(logvar)可知, 

   ```python
   std = torch.exp(0.5 * logvar) # 计算标准差, std = sqrt(var) = sqrt(exp(logvar)) = exp(logvar/2)
   epsilon = torch.randn_like(std, requires_grad=False)
   z=mu + epsilon * std
   ```

   

   1. μ 是编码器输出的均值向量
   2. σ 是编码器输出的标准差向量（通过对数方差logvar计算得到：σ = exp(0.5 * logvar)）
   3. ε 是从标准正态分布 N(0,1) 中采样的随机噪声
   4. ⊙ 表示逐元素相乘（Hadamard积）

3. 将z进行解码得到重构的原图x(recon_x)

4. 计算损失

   1. KL散度: KL(q(z|x) || p(z)) = -0.5 * Σ(1 + log(σ²) - μ² - σ²)

      ```python
      KLD = -0.5 * torch.sum(1 + logvar - mu.pow(2) - logvar.exp())
      ```

      

   2. BCE(重构误差): 计算recon_x和x之间的误差

      ```python
      BCE = binary_cross_entropy(recon_x, x, reduction='sum')
      ```

5. 生成部分: 随机生成一张高斯噪声图, 模型解码之后review

   ```python
   z = torch.randn(6, model.latent_dim).to(device)
   recon_batch = model.decode(z)
   recon_batch = recon_batch.view(-1, 28, 28).cpu().numpy()
   ```

   

### **Diffusion Models**

图片+噪声->纯噪

用训练好的模型一步步去噪->图片

感觉就是多步VAE, 由上一步生成的图片作为下一步输入的图片



<span style="font-size:12px; color:red;font-style:italic;font-weight:bold">扩散模型可以看作是VAE概念的自然延伸和特化，它将VAE的单步潜变量映射扩展为多步的马尔可夫链，通过固定的前向过程(加噪)和可学习的反向过程(去噪)实现高质量生成。</span>



### **Normalizing Flows** | 标准化流







### Continuous Normalizing Flows, CNF | 连续归一化流









# 数学知识



## 常微分方程（ODE）

若未知函数是一元函数的微分方程称为常微分方程(未知函数是**一元函数**（只有一个独立变量）)

### n 阶常微分方程

$$
F(x,y,y',...,y^{(n)})=0
$$



### 偏微分方程(PDE)

未知函数是**多元函数**（有多个独立变量）
$$
\frac{\partial^2 O}{\partial x^2}+\frac{\partial^2 O}{\partial y^2}+\frac{\partial^2 O}{\partial z^2}=0
$$






## 变量变换定理（Change of Variables Formula）

变量变换定理提供了一个公式，用于计算当我们在一个积分中做变量替换时，如何相应地改变被积函数和积分区域。它的核心在于引入了雅可比行列式，用来衡量变换过程中体积的局部伸缩比例。

其实就是改变变量公式其他也要随之改变而已(变量的范围等等), 比如

1. **极坐标** (2D)： `dx dy = r dr dθ`
2. **柱坐标** (3D)： `dx dy dz = r dr dθ dz`
3. **球坐标** (3D)： `dx dy dz = ρ² sinφ dρ dφ dθ`





# Flow Matching













