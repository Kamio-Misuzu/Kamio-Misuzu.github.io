---
title: 3D不完备多模态医学图像分割模型
published: 2025-11-26
description: '3D多模态医学图像分割模型方法总结'
image: ''
tags: [医学图像]
category: '深度学习'
draft: false 
lang: 'zh_CN'
---

## 2022年







## 2023年

### Brain tumor segmentation based on the fusion of deep semantics and edge information in multimodal MRI

- github： [HXY-99/brats](https://github.com/HXY-99/brats)

这篇论文的方法用的都是2D的方法，以下这一段似乎将3D的BRATS数据变成了2D，但是pkload这个方法我没找到是怎么处理的（或者他们直接得到了2D的数据，应该是将3D切片成了一张一张的2D图像），从论文的描述来看代码缺少了数据预处理的部分

```python
img, mask = pkload(os.path.join(self.root, file))
```

#### 模型方法

![2Dseg2023](imgs\3DMedSeg_Methods\2Dseg2023.png)

1. 基于CNN的网络用在FLAIR和T1ce两个模态中用于提取边缘检测
   1. ESAB模块结构![2Dseg2023](imgs\3DMedSeg_Methods\ESAB.png)
2. 一个基于图卷积的多特征推理块（MFIB）用于融合提取语义特征和边缘特征信息
   1. MFIB结构![2Dseg2023](imgs\3DMedSeg_Methods\MFIB.png)
3. 基于Swin Transformer的语义分割模块来提取脑肿瘤语义特征

#### 创新点

1. to address the problem caused by the lack of locality inductive bias, we introduce a shifted patch tokenization strategy into the Swin Transformer, leading to easier training for small-size datasets. 局部归纳偏差引起的问题，引入移位patch标记化策略让小尺寸数据集更容易被训练



### MedSAM-仅支持2D图像

github：[bowang-lab/MedSAM: Segment Anything in Medical Images](https://github.com/bowang-lab/MedSAM)

- 数据集：
  - 大规模医学图像数据集1570263图像-掩码对
  - 10种模态，30种癌症类型
- 模型：
  - SAM架构
- 训练方式：
  - SAM预训练权重
  - 固定提示编码器，微调图像编码器和掩码解码器
  - Dice Loss + 交叉熵损失







## 2024年

### SAM2Point-基于SAM2的3D图像分割

github：[ZiyuGuo99/SAM2Point: The Most Faithful Implementation of Segment Anything (SAM) in 3D](https://github.com/ZiyuGuo99/SAM2Point)

arxiv:[arxiv.org/pdf/2408.16768](https://arxiv.org/pdf/2408.16768)





### SAM2-UNet

github:[WZH0120/SAM2-UNet: SAM2-UNet: Segment Anything 2 Makes Strong Encoder for Natural and Medical Image Segmentation](https://github.com/WZH0120/SAM2-UNet)













## 2025年



### MedSAM2-支持3D图像

arxiv：[[2504.03600\] MedSAM2: Segment Anything in 3D Medical Images and Videos](https://arxiv.org/abs/2504.03600)

github：[bowang-lab/MedSAM2: MedSAM2: Segment Anything in 3D Medical Images and Videos](https://github.com/bowang-lab/MedSAM2)

- 数据集：
  - 构建了45.5万对3D图像-掩码和7.6万帧视频
  - 标注了5000个CT病变、3984个MRI肝脏病变、25万帧超声视频
- 模型：
  - 基于SAM2



### Johnson-Lindenstrauss Lemma Guided Network for Efficient 3D Medical Segmentation









### VOILA: Complexity-Aware Universal Segmentation of CT images by Voxel Interacting with Language







### nnFilterMatch: A Unified Semi-Supervised Learning Framework with Uncertainty-Aware Pseudo-Label Filtering for Efficient Medical Segmentation
