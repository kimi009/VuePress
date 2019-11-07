## docker安装jenkins
---
一、 安装docker 

二、镜像安装jenkins
> docker run -d -u 0 --privileged --name psb_jenkins -p 49003:8080 -v /root/jenkins_home:/var/jenkins_home jenkins/jenkins:lts
```
上面的命令的意思：运行一个镜像为jenkins/jenkins:lst的容器 命名为psb_jenkins  使用root账号覆盖容器中的账号，赋予最高权限 将容器的/var/jenkins_home
                映射到宿主主机的/root/jenkins_home目录下，映射容器中的8080端口到主机的49003端口
-u 0 指的是传入root账号ID，覆盖容器中内置的账号
-v /root/jenkins_home:/var/jenkins_home  指的是将docker容器内的目录/var/jenkins_home映射到主机 /root/jenkins_home目录上
--name jenkins 将容器的名字命名为psb_jenkins
-p 49003:8080  端口映射 将容器的8080端口映射到主机的49003端口
--privileged  赋予最高权限
```