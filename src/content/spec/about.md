# Zhizun Zeng <span class="resume-name-en">曾智尊</span>

M.S. student in Computer Science and Technology at Shenzhen University, with a B.S. in Artificial Intelligence from Guilin University of Electronic Technology. My interests include generative models, multimodal learning, and medical image analysis, with experience in model evaluation, inference optimization, and on-device deployment.

[Email](mailto:1176017541@qq.com) · [GitHub](https://github.com/Kamio-Misuzu) · [Research code](https://github.com/ZengZ-233)

## Education

<div class="edu-list">

<article class="edu-card">
<div class="edu-marker" aria-hidden="true"></div>
<div class="edu-body">
<h3 class="edu-school">Shenzhen University</h3>
<p class="edu-degree">M.S. · Computer Science &amp; Technology · College of Computer Science and Software Engineering</p>
<div class="edu-meta">
<span class="edu-pill edu-pill-date">2026.09 – 2029.06</span>
<span class="edu-pill edu-pill-loc">Shenzhen, Guangdong</span>
</div>
</div>
</article>

<article class="edu-card">
<div class="edu-marker" aria-hidden="true"></div>
<div class="edu-body">
<h3 class="edu-school">Guilin University of Electronic Technology</h3>
<p class="edu-degree">B.S. · Artificial Intelligence · School of Artificial Intelligence</p>
<div class="edu-meta">
<span class="edu-pill edu-pill-date">2022.09 – 2026.06</span>
<span class="edu-pill edu-pill-loc">Guilin, Guangxi</span>
</div>
<p class="edu-degree">GPA 4.45 / 5 · Top 2% of major · Recommended for postgraduate admission</p>
</div>
</article>

</div>

## Research Interests

<div class="interest-tags">
<span class="interest-tag">Reward Model</span>
<span class="interest-tag">Reinforcement Learning</span>
<span class="interest-tag">VLM</span>
<span class="interest-tag">MLLM</span>
<span class="interest-tag">Diffusion Models</span>
<span class="interest-tag">Flow Matching</span>
<span class="interest-tag">Medical Image Segmentation</span>
<span class="interest-tag">Multimodal Learning</span>
</div>

## Internship Experience

<div class="news-list">
<article class="news-card"><h3 class="news-title">Nanjing Kaiwei Network Technology Co., Ltd.</h3><p class="news-meta">Jun - Aug 2026 · Nanjing · Research Intern · Image Generation / Model Evaluation</p><div class="news-description"><ul>
<li><strong>Text-to-image evaluation:</strong> Built an end-to-end benchmark on Qwen-Image-Bench spanning 5 primary dimensions and 56 fine-grained metrics. Standardized prompts, IDs, random seeds, and judging parameters across GPT Image 2, Nano Banana Pro, Nano Banana, and ERNIE-Image; completed 20,000 automated judging inferences on 1,000 Image Arena prompts for cross-model comparison.</li>
<li><strong>Multi-model pipeline:</strong> Implemented a JSONL-driven framework for local GPU inference and remote APIs, with isolated model outputs, checkpoint resumption, response parsing, and image integrity checks.</li>
<li><strong>Deployment and inference:</strong> Deployed the approximately 30GB ERNIE-Image model and multiple DiT checkpoints using diffusers and transformers. Used multi-GPU data parallelism to generate 1,000 reproducible, intact 1024 × 1024 images per checkpoint group.</li>
<li><strong>Judge optimization:</strong> Addressed CUDA OOM and full reruns in the original single-GPU judging script through sharded multi-GPU scheduling, automatic resumption, and completeness checks. Reduced peak GPU memory usage to approximately 78GB and judging time from about 9 hours on one GPU to 2.3 hours on six GPUs.</li>
</ul></div></article>
</div>

## Publications & Submissions

### First & Student First Author

<div class="publication-list">
<details class="publication-card">
<summary class="publication-summary"><span><h3 class="publication-title">More Should Be Better: Incremental Self-Distillation Multimodal Brain Tumor Segmentation with Missing Modalities</h3><p class="publication-venue">ICLR 2027 · CCF-A · Student first author · Submitted</p></span><span class="publication-cue">+</span></summary>
<div class="publication-body"><p>Research on multimodal brain tumor segmentation with missing modalities using incremental self-distillation.</p></div>
</details>

<details class="publication-card">
<summary class="publication-summary"><span><h3 class="publication-title">MSConvFormer: A Multi-Scale Depthwise Convolution Transformer for Medical Time Series Classification</h3><p class="publication-venue">Digital Signal Processing 2026 · JCR-Q2 · First author · Submitted</p></span><span class="publication-cue">+</span></summary>
<div class="publication-body"><p>A multi-scale depthwise convolution Transformer for medical time series classification.</p></div>
</details>

<details class="publication-card">
<summary class="publication-summary">
<span>
<h3 class="publication-title">DMKformer: A Dual-Path Routing Transformer with Hybrid Mamba and KAN for Medical Time Series</h3>
<p class="publication-authors">Zhizun Zeng, Qiuyuan Gan, Wei Zhang, Yujie Li</p>
<p class="publication-venue">Signal, Image and Video Processing, 2026. (JCR-Q3) · First author · Accepted</p>
</span>
<span class="publication-cue">Details</span>
</summary>
<div class="publication-body">
<h4>Abstract</h4>
<p>Transformer has shown great potential in modeling global dependencies in sequential data, research on Transformer-based variant architectures for medical time series analysis has attracted growing attention. However, challenges remain in capturing complex local patterns and long-term dependencies in medical time series due to their high-dimensional nonlinearities and temporal correlations. To address this, we propose a Transformer model DMKformer which incorporates a new feature fusion strategy named 2R-Attention. Specifically, on the basis of the original Transformer, we adopt the STAR and the self-attention structure to enhance the ability of the attention module to capture and utilize the information of long-term dependencies in the global signal. Meanwhile, a one-dimensional DWC module is introduced to improve local information capture and reduce overfitting. Additionally, we employ Mamba to optimize FFN for long sequences and utilize a KAN network to strengthen classification capabilities. We conduct extensive experiments on three publicly available datasets under both subject-independent and subject-dependent settings. The experimental results demonstrate that our method outperforms 11 benchmark models, achieving an average F1 score improvement of 2%, validating its effectiveness.</p>
<div class="publication-links">
<a class="publication-link-disabled" href="https://link.springer.com/article/10.1007/s11760-026-05188-7">
  Paper
</a>

<details class="publication-bibtex-details">
<summary class="publication-resource">BibTeX</summary>
<pre class="publication-bibtex"><code>@article{Zeng2026DmkformerAD,
  title={Dmkformer: a dual-path routing Transformer with hybrid Mamba and KAN for medical time series},
  author={Zhizun Zeng and Qiuyuan Gan and Wei Zhang and Yujie Li},
  journal={Signal, Image and Video Processing},
  year={2026},
  url={https://api.semanticscholar.org/CorpusID:286478032}
}</code></pre>
</details>
</div>
</div>
</details>

<details class="publication-card">
<summary class="publication-summary">
<span>
<h3 class="publication-title">GA-YOLOv8: A Road Defect Detection Model Based on Improved YOLOv8</h3>
<p class="publication-authors">ZhiZun Zeng, RongJie Liu, YongHang Huang, YuJie Li, BenYing Tan</p>
<p class="publication-venue">VSIP 2025. (EI-Core/ACM) · First author · Accepted</p>
</span>
<span class="publication-cue">Details</span>
</summary>
<div class="publication-body">
<h4>Abstract</h4>
<p>Timely and accurate detection of pavement defects is essential for maintaining road safety. Traditional manual detection methods are labor-intensive, costly, and inefficient. To address the challenges posed by various defect scales, complex backgrounds, and subtle visibility of defects, this paper proposes an enhanced pavement defect detection model, GA-YOLOv8s, based on YOLOv8s. Our approach contains several key improvements. First, we add an additional P6 layer to YOLOv8s, thus introducing a multi-scale detection strategy that enables the model to capture deeper semantic features and improve the detection of small targets such as cracks. Second, we propose the C2f-GDC module, which maintains the model’s ability to extract fine-grained features, especially for small defects such as cracks, while reducing GFLOPs. Finally, we integrate the Adaptive Graphic Channel Attention (AGCA) mechanism to improve cross-layer feature fusion to effectively balance deep semantic information and shallow geometric details. Experimental results show that the mAP value is improved by 3.5% compared to the YOLOv8s model. Compared with other algorithms, the method proposed in this paper performs better in small and mild damage detection.</p>
<div class="publication-links">
<a class="publication-link-disabled" href="https://dl.acm.org/doi/10.1145/3708568.3708574">
  Paper
</a>

<details class="publication-bibtex-details">
<summary class="publication-resource">BibTeX</summary>
<pre class="publication-bibtex"><code>@inproceedings{10.1145/3708568.3708574,
author = {Zeng, ZhiZun and Liu, RongJie and Huang, YongHang and Li, YuJie and Tan, BenYing},
title = {GA-YOLOv8: A Road Defect Detection Model Based on Improved YOLOv8},
year = {2025},
isbn = {9798400709647},
publisher = {Association for Computing Machinery},
address = {New York, NY, USA},
url = {https://doi.org/10.1145/3708568.3708574},
doi = {10.1145/3708568.3708574},
booktitle = {Proceedings of the 2024 6th International Conference on Video, Signal and Image Processing},
pages = {36–41},
numpages = {6},
keywords = {Object Detection, Cross-Layer Feature Fusion, C2f-GDC Module, Adaptive Graphic Channel Attention (AGCA)},
series = {VSIP '24}
}</code></pre>
</details>
</div>
</div>
</details>

<details class="publication-card">
<summary class="publication-summary">
<span>
<h3 class="publication-title">MamKanformer: A hybrid Mamba and KAN model based on Medformer for Medical Time-Series Classification</h3>
<p class="publication-authors">Zhizun Zeng, Qiuyuan Gan, Zhoukun Yan, Wei Zhang</p>
<p class="publication-venue">CAIT 2024. (EI-Core/IEEE) · First author · Accepted</p>
</span>
<span class="publication-cue">Details</span>
</summary>
<div class="publication-body">
<h4>Abstract</h4>
<p>The rapid advancements in sensing technology and artificial intelligence have spurred a substantial number of novel demands and challenges within the realm of medical time series analysis. Notably, the effective extraction and utilization of the long-term and short-term dependency relationships, along with the features at various granularities encapsulated within high-dimensional and multivariate time series, have emerged as one of the pressing issues that demand immediate resolution. To address these, we propose a deep learning model MamKanformer for multichannel EEG signal processing. The model firstly solves the problem of long-short term dependencies which are difficult to be modeled effectively by Feed Forward in Transformer by using Mamba architecture. Subsequently, Kan is utilized to capture the critical feature information of different granularities contained in the time series data to assist in enhancing the output of the model. Finally, extensive experiments conducted on three public datasets have effectively verified the efficacy of the method proposed in this paper. Specifically, the MamKanformer model has demonstrated a superior performance over the other 11 baselines. It has achieved an average top ranking across all six metrics within the three datasets, which unequivocally attests to the outstanding capabilities of our proposed method.</p>
<div class="publication-links">
<a class="publication-link-disabled" href="https://ieeexplore.ieee.org/document/10962940">
  Paper
</a>

<details class="publication-bibtex-details">
<summary class="publication-resource">BibTeX</summary>
<pre class="publication-bibtex"><code>@INPROCEEDINGS{10962940,
  author={Zeng, Zhizun and Gan, Qiuyuan and Yan, Zhoukun and Zhang, Wei},
  booktitle={2024 5th International Conference on Computers and Artificial Intelligence Technology (CAIT)}, 
  title={MamKanformer: A hybrid Mamba and KAN model based on Medformer for Medical Time-Series Classification}, 
  year={2024},
  volume={},
  number={},
  pages={212-217},
  keywords={Deep learning;Time series analysis;Brain modeling;Transformers;Feature extraction;Electroencephalography;Stability analysis;Feeds;Artificial intelligence;Signal resolution;EEG;multivariate time series;Transformer;Mamba;Kan},
  doi={10.1109/CAIT64506.2024.10962940}}</code></pre>
</details>
</div>
</div>
</details>
</div>

### Co-author

<div class="publication-list">
<details class="publication-card">
<summary class="publication-summary"><span><h3 class="publication-title">AdaCARLA: Adaptive Optimization for Self-supervised Contrastive Learning for Time Series Anomaly Detection</h3><p class="publication-venue">ICONIP Abstract 2026 · CCF-C · Second author · Accepted</p></span><span class="publication-cue">+</span></summary>
<div class="publication-body"><p>Adaptive optimization of self-supervised contrastive learning for time series anomaly detection.</p></div>
</details>

<details class="publication-card">
<summary class="publication-summary">
<span>
<h3 class="publication-title">Gaze Estimation based on Visual State Space Model with Hybrid Features</h3>
<p class="publication-authors">Yujie Li, Rongjie Liu, Zhizun Zeng, Ziwen Wang, Yuhang Hong, Benying Tan</p>
<p class="publication-venue">ACM Transactions on Sensor Networks, 2025. (JCR-Q1/CCF-B) · Student second author · Accepted</p>
</span>
<span class="publication-cue">Details</span>
</summary>
<div class="publication-body">
<h4>Abstract</h4>
<p>Visual State Space Model (denoted as VMamba), a vision-based model proposed to introduce Mamba into computer vision, has shown strong performance in recent work on computer vision tasks. However, the performance of VMamba in gaze estimation is still to be explored. In this paper, we propose two VMamba-based gaze estimation approaches: GazeVM-Pure based on pure VMamba and GazeVM-Hybrid based on hybrid VMamba. GazeVM-Pure is used to estimate gaze direction according to the original VMamba structure. GazeVM-Hybrid combines Convolutional Neural Network (CNN) and VMamba, where the Visual State Space (VSS) Block (the core module of VMamba) is used as a complementary component of the CNN. In GazeVM-Hybrid, the convolutional layers of ResNet-34 are used to learn local feature maps from face images, and VSS Block is used to capture global relations from feature maps. The experimental results show that GazeVM-Hybrid exhibits superior performance compared with existing state-of-the-art techniques with a nearly 0.11 decrease in angle error compared with Static Transformer Temporal Differential Network (STTDN) on the EyeDiap dataset.</p>
<div class="publication-links">
<a class="publication-link-disabled" href="https://dl.acm.org/doi/10.1145/3765746">
  Paper
</a>

<details class="publication-bibtex-details">
<summary class="publication-resource">BibTeX</summary>
<pre class="publication-bibtex"><code>@article{10.1145/3765746,
author = {Li, Yujie and Liu, Rongjie and Zeng, Zhizun and Wang, Ziwen and Hong, Yuhang and Tan, Benying},
title = {Gaze Estimation Based on Visual State Space Model with Hybrid Features},
year = {2025},
publisher = {Association for Computing Machinery},
address = {New York, NY, USA},
issn = {1550-4859},
url = {https://doi.org/10.1145/3765746},
doi = {10.1145/3765746},
note = {Just Accepted},
journal = {ACM Trans. Sen. Netw.},
month = sep,
keywords = {Gaze Estimation, State Space Model, VMamba, Hybrid Model}
}</code></pre>
</details>
</div>
</div>
</details>
</div>

## Research Projects

<div class="publication-list">
<details class="publication-card">
<summary class="publication-summary"><span><h3 class="publication-title">Real-time Road Safety Detection with Lightweight Neural Networks</h3><p class="publication-venue">Provincial undergraduate research project · Project Lead · May 2024 - May 2025</p></span><span class="publication-cue">+</span></summary>
<div class="publication-body"><ul>
<li><strong>Model:</strong> Designed C2f-GDC (DynamicConv) on YOLOv8s and selected AGCA after comparing seven attention mechanisms. Improved mAP@0.5 from 87.4% to 90.9% while reducing GFLOPs by approximately 8%.</li>
<li><strong>Deployment:</strong> Converted PyTorch weights through ONNX to NCNN, addressing operator compatibility and quantization accuracy loss. Integrated C++ inference through JNI for 30+ FPS on vivo S15e, with real-time, image, and video detection and visualization.</li>
<li><strong>Outputs:</strong> First-author GA-YOLOv8 paper and software copyright for the Road Safety Detection System.</li>
</ul></div>
</details>

<details class="publication-card">
<summary class="publication-summary"><span><h3 class="publication-title">GazeScreen: Webcam-based 2D Screen Gaze Tracking</h3><p class="publication-venue">National undergraduate research project · Second Lead · May 2024 - May 2026</p></span><span class="publication-cue">+</span></summary>
<div class="publication-body"><ul>
<li><strong>Model:</strong> Contributed to a hybrid CNN-VMamba architecture combining ResNet-34 and VSS Blocks. Achieved a mean angular error of 4.91° on EyeDiap with approximately 0.25 additional GFLOPs.</li>
<li><strong>System:</strong> Built an OpenCV / PyTorch capture and inference pipeline with gaze-to-screen coordinate mapping and smoothing for real-time fixation visualization.</li>
<li><strong>Output:</strong> Student second-author paper accepted by ACM TOSN 2025 (JCR-Q1 / CCF-B).</li>
</ul></div>
</details>

<details class="publication-card">
<summary class="publication-summary"><span><h3 class="publication-title">Guijie Yimeng: A Digital-IP-driven Immersive Heritage Metaverse</h3><p class="publication-venue">Provincial undergraduate research project · Second Lead · May 2025 - May 2026</p></span><span class="publication-cue">+</span></summary>
<div class="publication-body"><ul>
<li><strong>AIGC:</strong> Led character generation using LoRA fine-tuning for controllable heritage-themed IP characters, and integrated an LLM for multilingual dialogue.</li>
<li><strong>Integration:</strong> Connected AIGC content to XR environments and blockchain digital collectibles for a no-code creation space. Filed an invention patent application for AR smart glasses for cultural heritage guidance.</li>
</ul></div>
</details>

<details class="publication-card">
<summary class="publication-summary"><span><h3 class="publication-title">Campus Q&amp;A App: A LoRA-tuned Assistant for New Students</h3><p class="publication-venue">Core Member</p></span><span class="publication-cue">+</span></summary>
<div class="publication-body"><ul>
<li><strong>Data and fine-tuning:</strong> Independently curated 1,000+ instruction pairs covering campus navigation, dining, information queries, and activity management. Cleaned, formatted, and filtered the dataset for LoRA fine-tuning of an open-source language model.</li>
<li><strong>Service:</strong> Exposed inference through Flask for an Android conversational app. Obtained the software copyright for the Campus Q&amp;A App.</li>
</ul></div>
</details>
</div>

## Competition Awards

<ul class="award-list">
<li class="award-item award-silver"><span class="award-medal" aria-hidden="true">2nd</span><div class="award-text"><p class="award-name">Huawei Cup Graduate Mathematical Modeling Competition</p><p class="award-detail">2026 · National Second Prize · Top 2.5%</p></div></li>
<li class="award-item award-gold has-cert" data-cert="/awards/huawei-ict.png" data-cert-title="Huawei ICT Competition · Ascend AI Track · 2025 · Global First Prize"><span class="award-medal" aria-hidden="true">1st</span><div class="award-text"><p class="award-name">Huawei ICT Competition · Ascend AI Track</p><p class="award-detail">2025 · Global First Prize</p></div></li>
<li class="award-item has-cert" data-cert="/awards/icm-mcm.png" data-cert-title="Mathematical Contest in Modeling (MCM) · 2025 · Honorable Mention"><span class="award-medal" aria-hidden="true">HM</span><div class="award-text"><p class="award-name">Mathematical Contest in Modeling (MCM)</p><p class="award-detail">2025 · Honorable Mention</p></div></li>
<li class="award-item award-silver has-cert" data-cert="/awards/cumcm.jpg" data-cert-title="China Undergraduate Mathematical Contest in Modeling · 2024 · National Second Prize"><span class="award-medal" aria-hidden="true">2nd</span><div class="award-text"><p class="award-name">China Undergraduate Mathematical Contest in Modeling</p><p class="award-detail">2024 · National Second Prize</p></div></li>
<li class="award-item award-silver has-cert" data-cert="/awards/challenge-cup.png" data-cert-title="Challenge Cup · Swarm Intelligence Virtual-Real Competition · 2024 · National Second Prize"><span class="award-medal" aria-hidden="true">2nd</span><div class="award-text"><p class="award-name">Challenge Cup · Swarm Intelligence Virtual-Real Competition</p><p class="award-detail">2024 · National Second Prize</p></div></li>
<li class="award-item award-bronze has-cert" data-cert="/awards/blue-bridge.png" data-cert-title="Lanqiao Cup National Software Competition · Group B · 2025 · National Third Prize"><span class="award-medal" aria-hidden="true">3rd</span><div class="award-text"><p class="award-name">Lanqiao Cup National Software Competition · Group B</p><p class="award-detail">2025 · National Third Prize</p></div></li>
<li class="award-item award-gold has-cert" data-cert="/awards/math-competition.jpg" data-cert-title="National Undergraduate Mathematics Competition · 2023 · Provincial First Prize"><span class="award-medal" aria-hidden="true">1st</span><div class="award-text"><p class="award-name">National Undergraduate Mathematics Competition</p><p class="award-detail">2023 · Provincial First Prize</p></div></li>
</ul>

## Honors & Scholarships

<ul class="award-list">
<li class="award-item"><span class="award-medal" aria-hidden="true">★</span><div class="award-text"><p class="award-name">Graduate Entrance Scholarship</p><p class="award-detail">2026 - 2027 · CNY 15,000</p></div></li>
<li class="award-item"><span class="award-medal" aria-hidden="true">★</span><div class="award-text"><p class="award-name">Second-Class University Scholarship</p><p class="award-detail">2023 - 2024 · CNY 800</p></div></li>
<li class="award-item"><span class="award-medal" aria-hidden="true">★</span><div class="award-text"><p class="award-name">First-Class University Scholarship</p><p class="award-detail">2022 - 2023 · CNY 1,600</p></div></li>
</ul>

## Patents & Software Copyrights

<div class="news-list">
<article class="news-card"><h3 class="news-title">AR Smart Glasses for Cultural Heritage Guidance</h3><p class="news-meta">Invention patent application · Jul 2025</p><div class="news-description"></div></article>
<article class="news-card"><h3 class="news-title">Campus Q&amp;A App</h3><p class="news-meta">Software copyright · 2026</p><div class="news-description"></div></article>
<article class="news-card"><h3 class="news-title">Road Safety Detection System</h3><p class="news-meta">Software copyright · Oct 2024</p><div class="news-description"></div></article>
</div>

## Skills

<ul>
<li><strong>Languages:</strong> Python, C++, LaTeX.</li>
<li><strong>Frameworks:</strong> PyTorch, Lightning, Ultralytics, diffusers, transformers, OpenCV, LangChain.</li>
<li><strong>Engineering:</strong> Multi-GPU parallel inference, ONNX / NCNN deployment, LoRA fine-tuning, Flask services, Linux / Git.</li>
<li><strong>English:</strong> CET-4.</li>
</ul>
