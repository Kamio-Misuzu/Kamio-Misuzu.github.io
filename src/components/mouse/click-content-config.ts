// 点击内容配置文件
export interface ClickContent {
  type: 'emoji' | 'image' | 'random';
  content: string;
  size: number;
  description?: string;
}

export const clickContents: ClickContent[] = [

  
  { 
    type: 'random', 
    content: "", 
    size: 36, 
    description: "NachoNeko" 
  },

  { 
    type: 'random', 
    content: "", 
    size: 36, 
    description: "cat_girl" 
  },

  { 
    type: 'random', 
    content: "", 
    size: 36, 
    description: "hutao" 
  },
  
];
