---
title: AI 提示词库
published: 2025-09-15
description: '优质AI提示词集合'
image: 'assets/images/demo-avatar.jpg'
tags: [AI, 提示词, 工作流]
category: 'AI工具'
draft: false
lang: 'zh_CN'
---

<style>
.qa-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 2rem 0;
}

.qa-item {
  border: 2px solid var(--theme-color, #8b5cf6);
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.qa-item:hover {
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
  transform: translateY(-2px);
}

.qa-question {
  padding: 1.25rem;
  background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
  color: white;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
  user-select: none;
  transition: background 0.3s ease;
}

.qa-question:hover {
  background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%);
}

.qa-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  transition: transform 0.3s ease;
  font-size: 1.5rem;
}

.qa-item.expanded .qa-icon {
  transform: rotate(180deg);
}

.qa-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease, padding 0.3s ease;
  padding: 0 1.25rem;
  background: var(--bg-secondary, #f8f9fa);
}

.qa-item.expanded .qa-answer {
  max-height: 800px;
  padding: 1.25rem;
}

.qa-answer-content {
  color: var(--text-primary, #1f2937);
  line-height: 1.6;
}

.qa-answer-content h4 {
  margin: 1rem 0 0.75rem 0;
  font-size: 1rem;
  font-weight: 600;
  color: #8b5cf6;
}

.qa-answer-content ul {
  margin: 0.75rem 0;
  padding-left: 1.5rem;
}

.qa-answer-content li {
  margin: 0.5rem 0;
  color: var(--text-secondary, #4b5563);
}

.qa-answer-content ol {
  margin: 0.75rem 0;
  padding-left: 1.5rem;
}

.qa-answer-content ol li {
  margin: 0.5rem 0;
  color: var(--text-secondary, #4b5563);
}
</style>

<div class="qa-container">
  <div class="qa-item">
    <div class="qa-question" onclick="this.parentElement.classList.toggle('expanded')">
      <span>Q：我想按照star法则重构我的简历，你可以给我workflow用于AI修改我的简历吗</span>
      <span class="qa-icon">▼</span>
    </div>
    <div class="qa-answer">
      <div class="qa-answer-content">
        <p><strong>A：你是一位资深简历顾问。请帮我用 STAR 法则重构简历中的经历描述。</strong></p>
        
        <h4>【STAR 在简历中的应用规则】</h4>
        <ul>
          <li>每条 bullet 聚焦一件事,结构为:动作动词开头 → 具体做法 → 可量化的结果</li>
          <li>情境(S)和任务(T)压缩进一句话,不要单独成段,避免冗长</li>
          <li>行动(A)用强动词,体现你的主导性(主导/搭建/优化/推动,而非"参与""负责")</li>
          <li>结果(R)必须可量化或可感知;如果我没给数字,请用括号标注【此处建议补充数据】提醒我,不要编造</li>
          <li>每条控制在 1-2 行,1 句话讲完</li>
          <li>保持事实,绝不夸大或虚构我没提供的信息</li>
        </ul>

        <h4>【输出要求】</h4>
        <ol>
          <li>先按上述规则重写每一条</li>
          <li>对缺少量化结果的条目,单独列出并向我提问需要补充什么数据</li>
          <li>指出哪些经历价值不高、可以删除或合并</li>
        </ol>
      </div>
    </div>
  </div>
</div>

