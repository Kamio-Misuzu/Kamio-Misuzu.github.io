---
title: Mean_Flow
published: 2025-09-07
description: '均值流匹配'
image: 'https://t.alcy.cc/aimp'
tags: [流匹配]
category: '深度学习'
draft: false 
lang: 'zh_CN'
---

# 符号定义

| 符号 | 定义                                    |
| ---- | --------------------------------------- |
| u    | 平均速度                                |
| v    | 瞬时速度                                |
| r    | 初始时间, 自定义值                      |
| t    | 当前时间                                |
| z_t  | 时间t时刻的状态, 从噪声到数据的中间过程 |
| 范围 | 0<=r<t<=1                               |





# 原有的 问题/挑战 是什么?

1. 传统的基于扩散模型或流匹配的生成模型虽然效果好，但在采样（生成图片）时通常需要执行数百甚至上千步迭代，速度较慢。
2. 







# 做了什么?

提出将瞬时速度场改为平均速度场(对路径进行平均)
$$
u(z_t,r,t)\triangleq \frac{1}{t-r}\int_r^t v(z_t,\tau)d\tau
$$

## 对该式子进行处理

$$
{(t-r)}u(z_t,r,t)\triangleq \int_r^t v(z_t,\tau)d\tau \\
等式左边对u(z_t,r,t)求导:\\
\frac{d}{dt}u(z_t,r,t)=\frac{\partial u}{\partial z}\frac{d z_t}{dt}+\frac{\partial u}{\partial r}\frac{dr}{dt}+\frac{\partial u}{\partial t}\frac{dt}{dt}\\
=\frac{\partial u}{\partial z}\cdot v(z_t,t)+\frac{\partial u}{\partial t}\\
对等式左边求导:\\
是不是忘记怎么求导了?答:对左边求导+对右边求导\\
\frac{d}{dt}((t-r)u(z_t,r,t))=u+(t-r)\frac{du}{dt}
\\
对等式右边求导:
\\
\frac{d}{dt}\int_r^t v(z_\tau,\tau)d\tau=v(z_t,t)\\
最终等式变成了:\\
u+(t-r)\frac{du}{dt}=v(z_t,t)\to u=v(z_t,t)-(t-r)\frac{du}{dt}\\
最终式子:\\
u(z_t,r,t)=v(z_t,t)-(t-r)\frac{d}{dt}u(z_t,r,t) \leftarrow(MeanFlow 恒等式)s
$$



该恒等式描述了平均速度u与瞬时速度v以及时间t之间的关系

