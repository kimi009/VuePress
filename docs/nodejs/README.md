## node中的模块
- 模块的分类 ES6module commonjs规范 amd cmd umd
- commonjs规范
  - 模块分类：自定义模块，内置模块，第三方模块
    - 自定义模块开头有路径，相对或是绝对的，默认会自动添加.js后缀

- 模块化的作用
  - 解决了命名冲突的问题， 一个文件就是一个模块，独立的相互之间不影响
  - 方便维护

- require发生了什么？ let s = require('./a')
  - 先将./a的文件转化为绝对路径
  - 读取文件内容，增加一个函数，函数内容内部需要返回module.exports
  - 让函数执行
  

## 模块加载的顺序
  - 不写后缀默认会尝试查找文件，如果找不到就继续查找文件夹下的index.js,否则就要把文件夹变成一个包，需要创建一个json,来描述入口文件  就像package.json里面的main字段
  - 如果没有路径，可能是核心模块，会认为是第三方模块，会找node_modules
  - console.log(module.paths) 可以打印出第三方模块查找的顺序

## exports module.exports区别
  - exports就是module.exports的别名
  - 导出方式二：exports.a = {}
  - 只有改变了exports对象上的值才能影响到module.exports
  ```js
    var a=b={}
    a=5
    b是不会改变的
    只有a.m = 5
    b才会改变

  ```

## Node中的模板引擎实现
  - 核心就是replace 正则

## Node中的常用模块
  - __dirname 当前文件所在的文件夹路径
  - path.resolve()会解析路径，遇到/会到根路径
  - path.join()不会解析路径
  - path.dirname(__dirname) 取父路径
  - path.basename('1.js','.js')  返回1 第二个参数是除去后缀
  - path.extname('1.min.js')取后缀名  

  - fs.readFile异步读取文件
  - fs.readFileSync同步读取  所以说require是个同步操作，否则就会有回调函数
  - 读取文件一般采用绝对路径

  - 读取出来的文件是字符串格式，怎么让字符串执行
    - eval(str) 所以eval是不干净的执行，会找上级作用域，
    - new Function 变成一个函数执行
        ```js
          let a = 9
          let str = 'console.log(a)'
          let fn = new Function(str)
          console.log(fn())
        ```
    - vm 在node中
        ```js
          let vm = require('vm')
          vm.runInThisContext(code)
        ```
