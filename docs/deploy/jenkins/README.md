## 自动化部署运维
****
#### 下面以ubuntu 为例

[jenkins下载地址](https://jenkins.io/zh/)
[jenkins文档](https://jenkins.io/zh/doc/)

一、 docker 安装jenkins
docker run -d -u 0 --privileged --name test -p 49003:8080 -v /root/test:/var/jenkins_home jenkins:latest

docker run -d -u 0 --privileged --name test -p 49003:8080 -v /root/test:/var/jenkins_home jenkins/jenkins:lts

二、 普通安装

>用下面的命令构建安装环境
```
wget -q -O - https://pkg.jenkins.io/debian-stable/jenkins.io.key | sudo apt-key add -
在/etc/apt/sources.list末尾添加下面的代码
deb https://pkg.jenkins.io/debian-stable binary/
```

>执行下面的命令开始安装 
```
sudo apt-get update
sudo apt-get install jenkins
```

>jenkins启动命令
```
启动 service jenkins start
重启 service jenkins restart
停止 service jenkins stop
```

>卸载jenkins
```
sudo apt-get remove jenkins
sudo apt-get clean
sudo apt-get autoclean
```