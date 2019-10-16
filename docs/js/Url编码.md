### 浏览器编码的函数简介escape(),encodeURI(),encodeURIComponent()
---

1、escape实际上，escape()不能直接用于URL编码，它的真正作用是返回一个字符的Unicode编码值

>>无论网页的原始编码是什么，一旦被Javascript编码，就都变为unicode字符。也就是说，Javascipt函数的输入和输出，默认都是Unicode字符

>>对应的解码是unescape

>>escape()不对“+”编码。但是我们知道，网页在提交表单的时候，如果有空格，则会被转化为+字符。服务器处理数据的时候，会把+号处理成空格。所以，使用的时候要小心。
---
2、encodeURI它着眼于对整个URL进行编码，因此除了常见的符号以外，对其他一些在网址中有特殊含义的符号“; / ? : @ & = + $ , #”，也不进行编码。编码后，它输出符号的utf-8形式，并且在每个字节前加上%
>>encodeURI不编码字符有82个：!，#，$，&，'，(，)，*，+，,，-，.，/，:，;，=，?，@，_，~，0-9，a-z，A-Z

>>对应的解码是decodeURI()。
---

3、encodeURIComponent与encodeURI()的区别是，它用于对URL的组成部分进行个别编码，而不用于对整个URL进行编码
>> “; / ? : @ & = + $ , #”，这些在encodeURI()中不被编码的符号，在encodeURIComponent()中统统会被编码

>>对应的解码是decodeURIComponent

>>在页面重定向的时候可以用encodeURIComponet编码，否则参数丢失，尤其是在Vue项目中，url里面会有#号，不编码的话#后的参数会丢失