## 安装
- [mac]('https://docs.docker.com/docker-for-mac/install/')
- [window]('https://docs.docker.com/docker-for-windows/install/)

## 常见命令
```js
// 查看 docker 正在运行的镜像(container)
docker ps 

// 删除 container
docker rm

// 查看 docker 的 image 文件
docker images

// 获取 image 文件
docker image pull library/name

// 创建 image 文件
docker build

// 删除 image 文件
docker rmi imageID

// 运行 image 文件
docker run imageID
docker run -d -p  80:80 [tagname]

// 停止 image 文件运行
docker stop

// 保存改动为新的 image
docker commit
```

## Dockerfile

```js

FROM alpine:latest

// MAINTAINER: 维护者
MAINTAINER coolfe

// CMD: 执行命令
CMD echo "hello docker'

// FROM: base image

FROM ununtu
MAINTAINER coolfe
// RUN: 执行命令

RUN apt-get update
RUN apt-get install -y nginx
COPY index.html /var/www/html
ENTRYPOINT [“/usr/sbin/nginx”, "-g", "daemon off;"]
// EXPOSE 暴露端口

EXPOSE 80

```
保存后
```js
docker build [-t hello_docker] .
docker run hello_docker
```

## Volume 提供独立于容器之外的持久化存储

```
// nginx 访问地址的链接
docker run -d --name nginx -v/usr/share/nginx/html nginx
// 容器的所有信息
docker inspect nginx 
```

```
// 当前路径挂载容器里面 
docker run -v $PWD/code:/var/www/html nginx
```

```
// 另外容器挂载容器里面
docker run --volumes-from ...
```

## registry 镜像仓库
```
docker search whalesay
docker pull  whalesay
docker run docker/whalesay cowsay hello coolfe！
docker tag docker/whalesay coolfe/whalesay
[docker login]
docker push myname/shalesay
```

## docker-compose 多容器 app