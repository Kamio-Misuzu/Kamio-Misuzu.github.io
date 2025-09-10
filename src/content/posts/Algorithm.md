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

# 算法链接

- Python版本: [itcharge/AlgoNote: ⛽️「算法通关手册」：超详细的「算法与数据结构」基础讲解教程，从零基础开始学习算法知识，850+ 道「LeetCode 题目」详细解析，200 道「大厂面试热门题目」。](https://github.com/itcharge/AlgoNote)







# 模板(灵神)

<a href="[分享｜如何科学刷题？ - 讨论 - 力扣（LeetCode）](https://leetcode.cn/discuss/post/3141566/ru-he-ke-xue-shua-ti-by-endlesscheng-q3yd/)">灵茶山艾府-如何科学刷题？</a>

## 滑动窗口

规则: 入-更新-出

### 确认左端点范围

在[L,R]的范围内, 窗口大小k

那么, R-L+1=k	=>	L=R-k+1



### 代码

假定题目是找s中在长度k个字串中最多有多少元音字母

Q: [1456. 定长子串中元音的最大数目 - 力扣（LeetCode）](https://leetcode.cn/problems/maximum-number-of-vowels-in-a-substring-of-given-length/solutions/2809359/tao-lu-jiao-ni-jie-jue-ding-chang-hua-ch-fzfo/)



```python
# Python
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
// Java
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
// JavaScript
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

```c++
// C++
class Solution{
    public:
    	int maxVowels:(string s, int k){
            int ans=0, vowel=0;
            for (int i=0; i<s.size();i++){
                // in
                if (s[i]=='a'||...||s[i]=='u'){
                    vowel++;
                }
                int left=i-k+1;
                if (left<0){
                    continue;
                }
                
                // update
                
                ans=max(ans,voewl);
                
                // out
                
                char out=s[left];
                if (out[i]=='a'||...||out[i]=='u'){
                    vowel--;
                }
            }
            return ans;
        }
};
```





## 二分算法

### 怎么判断我写的是哪一种二分？

答：看 while 循环的条件，如果是 left <= right，就是闭区间；如果是 left < right，就是半闭半开区间；如果是 left + 1 < right，就是开区间。



### Q1: [34. 在排序数组中查找元素的第一个和最后一个位置 - 力扣（LeetCode）](https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/description/)



写法: 开区间, 只要left+1<right就可以

```python
# python
class Solution:
    def searchRange(self, nums,target):
        # 查找当前位置的下标值
        start=self.lower_bound(nums,target)
        # nums中不存在target值
        if start ==len(nums) or nums[start]!=target:
            return [-1,-1]
        # 查找比当前值大一点的下标值
       	end=self.lower_bound(nums,target+1)-1
        return [start,end]
    
    def lower_bound(self,nums,target):
        # 二分查找当前值在数组中的下标是哪
        l,r=0,len(nums)
        while l+1<r:
            mid=(l+r)//2
            if nums[mid]>=target:
                r=mid
            else:
                l=mid
        return l

```

```javascript
//javascript
var searchRange=function(nums,target){
    const start=lowerBound(nums,target);
    // no exist
    if (start===nums.length||nums[start]!==target){
        return [-1,-1];
    }
    const end=lowerBound(nums,target+1)-1;
    return [start,end]
    
}

var lowerBound=function(nums,target){
    let l=0,r=nums.length;
    while (l+1<r){
        const mid=Math.floor((l+r)/2)
        if (nums[mid]>=target){
            r=mid;
        }
        else{
            l=mid;
        }
    }
    return l;
}


```

```c++
class Solution{
public:
    vector<int> searchRange(vector<int>& nums,int target){
        int start=lower_bound(nums,target);
        if (start==nums.size()||nums[start]!=target){
			return {-1,-1}
        }
        int end=lower_bound(nums,target+1)-1;
        return {start,end};
    }
    
    int lower_bound(vector<int>nums,int target){
        int l,r=0,nums.size();
        while (l+1<r){
            int mid=l+(r-l)/2;
            if (nums[mid]>=target){
                r=mid;
            }
            else{
                l=mid;
            }
        }
        return l;
    }
    
};
```



### 二分答案

主要是check难写

求最小数值的答案, 开区间

```Python
# Python
class Solution:
    def binarySearchMin(self,nums):
        def check(mid):
            continue
        l,r=..,..
        while l+1<r:
          	mid=(l+r)//2
            if check(mid):
                r=mid
            else:
                l=mid
        return r

# 求最大值不过是把left和right替换一下
# 因为值比较大的贴近于right, 让left趋近right以获取最大值

```

```javascript
// JavaScript
var Solution=function(nums){
	let l,r=..,..
    while (l+1<r){
        let mid=Math.floor((l+r)/2);
        if check(mid){
            r=mid;
        }
        else{
            l=mid;
        }
    }
    return r
};
var check=function(nums){
    // TODO
}
```

```c++
//c++
class Solution{
    public:
    int binarySearchMax(vector<int>& nums){
        auto check=[&](int mid){
            
        };
        int l,r=..,.;
        while (l+1<r){
            int mid=l+((r-l)/2);
            if (check(mid)){
                r=mid;
            }
            else{
                l=mid;
            }
        }
        return l;
    }
};
```



## 单调栈









