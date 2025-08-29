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

- [Flow Matching for Generative Modeling](https://neurips.cc/virtual/2024/tutorial/99531)

- [(3 封私信 / 22 条消息) 通俗易懂的Flow Matching原理解读（附核心公式推导和源代码） - 知乎](https://zhuanlan.zhihu.com/p/4116861550)

- **Diffusion** 就像教一个AI修复老照片。你不断给照片加污渍（前向过程），然后让它学习如何根据当前的破损程度来**预测最初的污渍**（训练），从而一步步地把污渍擦掉（生成）。
- **Flow Matching** 就像教一个AI全局的地形和水流方向。你给出无数个点的例子，告诉它“如果一个水滴在这里，它应该往哪个方向以多快的速度流”（训练）。要生成一个湖泊（数据），你只需要从高处（噪声）放一滴水，它就会沿着学习到的地形（向量场）自动流到湖中（生成）。



