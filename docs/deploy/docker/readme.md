### docker 部署 iptables issue

1、错误列表

```
Error response from daemon: driver failed programming external connectivity on endpoint vue-server-container
(09b0dad277631e9c81e1fda24d1082bafe4acbaf81c49b971d98c0140438fdb5):
 (iptables failed: iptables --wait -t filter -A DOCKER ! -i docker0 -o docker0 -p tcp -d 172.17.0.2 --dport 3009 -j
  ACCEPT: iptables: No chain/target/match by that name.
 (exit status 1)).
```

> 遇到上面的错误解决方案如下

1、Docker 会在 iptables 中创建一些策略，不过貌似 filter 表中的 DOCKER chain 消失了，创建即可。

> > iptables -t filter -N DOCKER # 如果不行那就
> > iptables -t nat -N DOCKER # 根据报错响应新建

2、另外开启 firewalld 之后，容器之间的通讯，如果通过映射到宿主机的端口通讯，
那么需要把 docker0 网段（下面以默认的 172.17/16 为例）增加到 firewalld 的白名单中：

> > firewall-cmd --permanet --zone=trusted --add-source=172.17.0.0/16
> > firewall-cmd --reload
