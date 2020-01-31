## fs用法
  - readFile readFileSync
    - 读文件，文件必须存在，否则报错，需要增加编码来表示读取出来的结果
  - writeFile writeFileSync
    - 写入时如果文件不存在会创建，如果有会先清空再次写入，写入的数据默认是utf-8编码的类型

  - node自己封装了文件流
    - 