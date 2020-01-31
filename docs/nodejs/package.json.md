## nrm npm nvm
  - nrm 切换源  npm install nrm -g
  - npm 包安装
  - nvm 管理node版本 

## 创建全局包
  - npm init
  - npm link 链接，在全局的npm包下做一个快捷键，方便测试
  - npm unlink 删除链接
    - package.jso 里面加 
    ```json
      "bin":{
        "包名":"入口文件"
      }
    ```
  - 在入口文件顶部写 #! /usr/bin/env node 表示用node执行这个文件

## 本地包
  - 在代码中使用的 只在开发中使用 --save-dev
    ```bash
      npm install jquery
    ```
  - npm install --production 安装线上环境需要的包
  - npm audit fix 解决问题，最好不要手动改，可以通过npm install jquery@3.4.1  通过 @符号指定版本号
  - peerDependencies 同等依赖
  - bundledDependencies  运行npm pack会把里面的内容打包进去
    ```json
      "bundledDependencies":["jquery"] //会把jquery打包进去
    ```
## 版本问题
  - 2.0.0 大版本.新功能增加.bug修改
  - npm version 可以看到当前项目里面依赖包的版本号
  - 修改版本号,不要手动改版本， npm version  major // npm version minor
  - alpha(预览版)  beta(测试版)  rc(公测版)

## scripts脚本
  - npm run  的功能是将当前文件下的node_modules的bin目录放到path环境
    中 如果运行run后面的命令会执行对应的命令，这个执行的命令在node_modules下面的
    .bin中可以找到

## 发包
  - 先进入发包的文件夹中
  - 建立.npmignore 配置 忽略文件
  - 查看对应版本和名字
  - 切换到官方中发布 nrm use npm 
  - npm login/ npm addUser  有注册就是登陆否则就是注册
  - npm publish