## 进制转换
  ```js
  console.log(parseInt('111',2))    
  ```
  - base64优点：减少请求，size小  
    - ASCII 127个字母
    - gb18030 gbk 两个字节表示一个中文
    - unicode=>utf8 整合所有的编码  emoj是四个字节  中文是3个字节
    - node默认只支持utf8
    - 为什么叫base64  是因为一个字节不超过64 最大64
 ```js
  let buffer = Buffer.from('诸')
  console.log(buffer) 发现是三个字节
 ```

 ###  buffer的用法
  - 把内容存入到内存中，用来表示内存的
  - 声明内容
      - 通过长度声明
        ```js
          let buf = Buffer.alloc(10,1)
          //第二个参会写就是1 不写就是0
          //内存申请后不能随意更改长度
        ```
      - 把字符串存储到内存中
        ```js
        let buf = Buffer.from('发顺丰')
        ```
      - 手动写内存里面放什么
        ```js
        let buf = Buffer.from([1,2])
        ```
  - buffer常见的方法
    - 循环 forEach
    - 截取  slice
    - 有索引 [index]
    - 重写的方法 write...
    - 拷贝的方法 copy
    - 拼接的方法 concat
    - toString(可以将buffer转成指定的编码 base64 ...)
  
