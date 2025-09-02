---
title: Algorithm
published: 2025-09-01
description: '算法心得'
image: 'https://t.alcy.cc/moemp'
tags: [算法]
category: '算法'
draft: false 
lang: 'zh_CN'
---

<a href="[分享｜如何科学刷题？ - 讨论 - 力扣（LeetCode）](https://leetcode.cn/discuss/post/3141566/ru-he-ke-xue-shua-ti-by-endlesscheng-q3yd/)">灵茶山艾府-如何科学刷题？</a>



# 模板

## 滑动窗口

规则: 入-更新-出

### 确认左端点范围

在[L,R]的范围内, 窗口大小k

那么, R-L+1=k	=>	L=R-k+1



### 代码

假定题目是找s中在长度k个字串中最多有多少元音字母

```python
class Solution:
    def maxVowels(self,s,k):
        ans=vowel=0
        for i,c in enumerate(s):
            # 入
            if c in "aeiou":
                vowel+=1
            if i < k-1:
                continue
            # 更新
            ans=max(ans,vowel)
            
            # 出
            if s[i-k+1] in "aeiou":
                voewl-=1
        return ans
```

```java
class Solution:{
    public int maxVowels(String S, int k){
        // toCharArray(): 将一个字符串（String）转换成一个新的字符数组（char[]）
        char[] s=S.toCharArray();
        int ans =0;
        int vowel=0;
        for (int i =0;i<s.length;i++){
            // 入
            if (s[i]=='a'|| ... || s[i]=='u'){
                vowel++;
            }
            if (i<k-1){
                continue;
            }
            //   update
            ans=Math.max(ans,vowel);
            // 出
            char out=s[i-k+1];
            if (out=='a'||...||out=='u'){
                vowel--;
            }
        }
        return ans;
    }
}
```

```javascript
var maxVowels=function(s,k){
    let ans=0, vowel=0;
    for (let i=0;i<s.length;i++){
        // in
        if (s[i]==='a'||...||s[i]==='u'){
            vowel++;
        }
        if (i<k-1){
            continue;
        }
        // update
        ans=Math.max(ans,vowel);
    	
        // out
        let out=s[i-k+1];
        if (out[i]==='a'||...||out[i]==='u'){
            vowel--;
        }
    }
    return ans;
};
```

