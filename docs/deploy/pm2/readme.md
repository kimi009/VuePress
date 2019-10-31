### pm2 使用细则

> 启动nodejs进程
pm2 start  npm --name '自定义一个服务名字' run start --watch

>设置开机启动
首先pm2 save 其次pm2 startup