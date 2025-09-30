---
title: 几篇关于医学分割的论文解读
published: 2025-09-30
description: '论文解读'
image: ''
tags: [医学图像分割]
category: '深度学习'
draft: false 
lang: 'zh_CN'
---

## ShaSpec- the first missing modality multi-modal approach 

### 一些要知道的内容

什么是模态？

信息表达的形式，比如用文本或者视频图片之类的表达某个信息



什么是多模态？

多模态指的是数据或者信息的**多种**表现形式





### Abstract

1. 当前的方法在evaluation或者train separate model去处理特定的模态缺失
2. these models（指的是哪些？）致力于处理某个特定的任务(从下文可以看到这个方法在分割/ 分类上面处理的都挺不错的)

***Sha***red-***Spec***ific Feature Modelling 共享特定特征建模

#### 如何做到？

1. ShaSpec is designed to take advantage of all available input modalities during training and evaluation by learning shared and specific features to better represent the input data.  ShaSpec旨在通过***共享学习***（共享参数,共享同一个模型）和***学习特定特征***来更好地表示输入数据，从而在训练和评估期间利用所有可用的输入模态。
2. This is achieved from a strategy that relies on auxiliary tasks based on distribution alignment and domain classification, in addition to a residual feature fusion procedure. 通过依赖于基于分布对齐和域分类的辅助任务以及剩余特征融合过程的策略来实现的。（这里后面可以看到是通过添加了两种新的损失策略来达成的）
3. The design simplicity of ShaSpec enables its easy adaptation to multiple tasks, such as classification and segmentation. ShaSpec的设计简单性（大道至简）使其易于适应多个任务，例如分类和分段





![image-20250928233719430](imgs/med_seg/1-1.png)



![image-20250928231339150](imgs/med_seg/1-2.png)

#### note

这两张图的Decoder仅仅用于segmentation

如果要用于classification，融合的特征将被喂给FC层，



#### 作者对这些模块作用的说明

$$
s^{\{i\}}表示的是模态间的异构性，r^{\{i\}}捕捉特征间的一致性
$$

#### 缺失模态的说明

其他地方是一样的，只有对确实模态中的f是直接生成的


$$
假定n是缺失的模态，f^{(n)}=\frac{1}{N-1}\sum_{i=1,i≠n}^Nr^{\{i\}}
$$
![image-20250929001546869](imgs/med_seg/1-3.png)





这段话我没搞懂，如果有≥2的模态缺失的话，那应该如何生成，公式4不应该只给出了只缺少其中一种模态的情况吗？

推广到多个模态缺失的公式为：
$$
f^{(n)}=\frac{1}{可用模态数量}\sum_{i=1,i≠n}^Nr^{\{i\}}
$$
就是说其他的缺失模态都会变成相同的值，比如缺失T1和T2,用FL和T1c的平均值来获取，最终T1和T2的值会是相同的











### 训练过程

besides optimising for the main task (segmentation or classification), we introduce two auxiliary tasks, domain classification and distribution alignment, for the learning of the specific and shared feature representations, respectively. 除了对主要任务（分割或分类）进行优化之外，我们还引入了两个辅助任务，域分类和分布对齐，分别用于学习特定和共享特征表示。



文中并没有介绍分割和分类的训练，而是介绍了“Domain Classification Objective”和“ Distribution Alignment Objective”以及“Overall Objective”



#### Domain Classification Objective

we propose to adopt the domain classification objective (DCO) for the specific feature learning. 提出这个阈分类目标用于特定特征学习


$$
L_{dco}(\mathcal{D},\theta^{spec},\theta^{dco})=-\sum_{j=1}^{|\mathcal{D}|}\sum_{i=1}^N(t^{(i)})^{\top}log(f_{\theta^{dco}}(s_j^{(i)}))\\
t^{(i)}\in\{0,1\}^N,其中1是第i个位置，其他都是0，比如说对于Flair模态，它的标签是 [1, 0, 0, 0]；对于T1模态，是 [0, 1, 0, 0]，以此类推。\\
s^{(i)}=f_{\theta^{spec}}^{(i)}(x^{(i)})\\
$$


用于计算特定编码器的损失值，其实感觉就是用于优化Specific Encoder

N：模态总数（4种MRI模态：Flair, T1, T1c, T2）

D：训练数据集
$$
\mathcal{D}=\{(\mathcal{M}_j,y_j)\}_{j=1}^{|\mathcal{D}|}\\
\mathcal{M}_j:第j个训练样本的多模态数据集合，其实就类似于你现有的数据是多少，换个说法就是x
$$






#### Distribution Alignment Objective

$$
L_{dao}(\mathcal{D},\theta^{sha},\theta^{dco})=-\sum_{j=1}^{|\mathcal{D}|}\sum_{i=1}^N(u^{(i)})^{\top}log(f_{\theta^{dao}}(r_j^{(i)}))\\
r^{(i)}=f_{\theta^{sha}}(x^{(i)})
$$



这部分就是用于优化Shared Encoder， 可以从公式7和8看到，这部分其实就是计算

![image-20250929225446870](imgs/med_seg/1-10.png)

![image-20250929225455708](imgs/med_seg/1-11.png)





#### Overall Objective*主要


$$
L_{total}(\mathcal{D},\theta^{sha},\theta^{spec},\theta^{proj},\theta^{dao},\theta^{dco},\theta^{dec})=L_{task}(\mathcal{D},\theta^{sha},\theta^{spec},\theta^{proj},\theta^{dec})+\alpha L_{dao}(\mathcal{D},\theta^{sha},\theta^{dao})+\beta L_{dco}(\mathcal{D},\theta^{spec},\theta^{dco})
$$






#### 数据集：

a. **BraTS2018 for medical image segmentation** 

1.  The BraTS2018 Segmentation Challenge dataset [1,21] is used as a multi-modal learning with missing modality brain tumour sub-region segmentation benchmark,  以下三个分割子区域
    1.  where the sub-regions are **enhancing tumour (ET)**
    2.  **tumour core (TC)**
    3.  **whole tumour (WT)**
2.  BraTS2018 contains 3D multi-modal brain MRIs, 数据集包含以下四种模态
    1.  including **Flair,** 
    2.  **T1,** 
    3.  **T1 contrast-enhanced (T1c)** 
    4.  **T2** with experienced imaging experts annotated ground-truth. 



| 参数                                                         | 具体内容                                                     |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| stochastic gradient descent optimizer                        | Nesterov momentum of 0.99                                    |
| backbone network                                             | **3D UNet**(where the<br/>fusion of shared and specific features happens at the bottom<br/>of the UNet structure.) |
| learning rate                                                | 0.01 at the beginning and decreased with cosine annealing strategy  余弦退火策略 |
| During the non-dedicated training of models, modalities are<br/>randomly dropped to simulate the modality-missing situations. | 在模型的非专用训练期间，模态被随机丢弃以模拟模态缺失的情况。 |
| For dedicated training of models, the missing modalities used for training are the same missing modalities in<br/>the evaluation. | 对于模型的专用训练，用于训练的缺失模态与eval中的缺失模态相同。 |
| iterations                                                   | 180,000                                                      |
| distribution alignment objective loss function               | L1 loss                                                      |
| α = 0.1, β = 0.02                                            |                                                              |
| ShaSpec*                                                     | prediction smoothness enhancement 预测平滑增强               |

![image-20250929142014396](imgs/med_seg/1-4.png)





表一是非专用训练的模型（一个模型应对所有的情况），表2是专用训练的模型（多个模型，每个模型应对一种情况）

**这两个模型之间的区别是什么？**模型是一样的，但是**训练策略**不同，

**但是这样子为什么表一和表二在模态相同的情况下，对某个区域进行分割最终输出的结果不同？**解释是说二者所提供的数据其实是不同的（论文是这样子说明的：During the non-dedicated training of models, modalities are randomly dropped to simulate the modality-missing situations. For dedicated training of models, the missing modalities used for training are the same missing modalities in the evaluation.在模型的非专用训练过程中，模态被随机丢弃以模拟模态缺失的情况。对于模型的专用训练，用于训练的缺失模态与评估中的缺失模态相同。）<span style="color: red; font-weight: bold;">就是说非专用模型用某个模态训练，最终测试的时候可以用任意种模态作为数据输入，而专用训练就是训练和测试的时候数据都是相同的</span>







b. **Audiovision-MNIST for computer vision classification**

1. 音频手写数字集
2. a multi-modal dataset consisting of 1500 samples of audio and image files.
3. 采用和SMIL模型一致的参数
4. 不同的是最后的Decoder是由FC-dropout-FC组成
5. 模型训练使用Adam优化器，权重衰减为10−2，初始学习率设置为10−3（每20个epoch减少10%）



![image-20250929145301715](imgs/med_seg/1-5.png)

![image-20250929145701180](imgs/med_seg/1-6.png)



#### 做了一些其他的实验

##### **The selection of DAO loss function**

L1＞KL＞MSE＞CE

![image-20250929145848163](imgs/med_seg/1-7.png)

##### **Sensitivity of Eq. (9) to α and β:** 

测试α 时候， β=0.02

测试 β时候，α =0.1

α 和 β都为1的时候，曲线下降的很快，表明辅助损失给太高权重会导致main task梯度流受到干扰

![image-20250929145939768](imgs/med_seg/1-8.png)

α =0.1，β=0.02是最优解



**Small values for the weights of the auxiliary tasks contribute to the whole process, but do not interfere with the main task optimisation.** Interestingly, when α = 0 (only specific features are learned), the model can still segment the tumours to some extent by simple concatenation of specific features, which means that the specific features contain rich information. A similar conclusion can be reached when β = 0 (only shared features are learned). 这边说辅助分支的权值给的小对整个训练有提升，但并不会影响主任务的优化，当α or β=0时候，模型仍然可以分割目标的特定特征（其实我感觉要是辅助分支对整体的分割都有大的影响，那可能都不是辅助了而是另一个和主模型同等的模型了😂，这段话多少是有点凑字数的感觉了）



##### Computational comparison

we estimate the average time consumption of **30 iterations on one 3090 GPU** for a fair comparison.

|                                   | ShaSpec                                                      | SMIL                                                         |
| --------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| training/inference iteration time | takes **0.0257s** for model training iteration and **0.0016s** for model testing | training iterations and testing taking 0.1309s and 0.0019s   |
| GPU memory usage                  | constantly consumes **1421MiB** of GPU memory                | the GPU memory usage started<br/>from 1430MiB, climbed to 24268MiB, and then casted an<br/>“out of memory” error in the end. |
| batch-size                        | 4                                                            | 4                                                            |
| model parameters                  | **0.22M parameters**                                         | 0.33M parameters                                             |



##### An additional classification experiment on X-ray + clinical texts

（个人觉得可以pass这部分）其实就是在一个临床数据集分类（视觉-文本数据集）上面又做了一次实验



##### Shared and Specific Feature Visualisation

![image-20250929151534467](imgs/med_seg/1-9.png)

共享特征被聚类在一起，而特定特征被很好地分离

其实我比较好奇这部分作图代码是什么样子的（显然看了代码这部分似乎并没有在内）





























