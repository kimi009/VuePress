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


> jenkins配置shell
``` 
==>执行node

echo $PATH
node -v 
npm -v
npm install 
npm run build

exit
```
```
//执行docker部署 vue
docker stop vuenginxapp || true \
&& docker rm vuenginxapp || true \
&& cd /root/test/workspace/vue-dp-test \
&& docker build -t vuenginxapp .  \
&& docker run -d -p 8083:80 --name vuenginxapp -v /root/test/workspace/vue-dp-test/dist:/usr/share/nginx/html/  -v /root/test/workspace/vue-dp-test/nginx.conf:/etc/nginx/nginx.conf vuenginxapp 

```

```
//执行docker部署 vue
docker stop vuemergefirst
docker rm vuemergefirst
cd /root/test/workspace/vuemerge/first
docker build -t vuemergefirst .  
docker run -d -p 8085:80 --name vuemergefirst -v /root/test/workspace/vuemerge/first/first:/usr/share/nginx/html/  -v /root/test/workspace/vuemerge/first/nginx.conf:/etc/nginx/nginx.conf vuemergefirst 
```