# nestjs-grpc-cqrs-graphql-sample
使用Nestjs框架，采用TypeScript编码，把gRPC、CQRS、Rest、GraphQL都融合在一起的一个样例。

[Nestjs](https://nestjs.com/) 是nodejs下的一套开发后端的框架，整合了很多工具，使用TypeScript语言，适合企业级开发。依赖注入等很有Spring boot的味道。

[gRPC](https://grpc.io/) 是一个高性能、开源和通用的 RPC 框架，面向移动和 HTTP/2 设计，可以做后端微服务之间的服务调用。

[CQRS](https://docs.microsoft.com/en-us/azure/architecture/patterns/cqrs) 是除了CRUD之外的一种读写指责分离的结构

[GraphQL](https://graphql.org/) 除了Rest Api方式之外的一种后端接口调用方式，前端可以自由组织返回的数据。

[TypeScript](https://www.typescriptlang.org/) 把js变成强类型

本例包含一个服务端和一个客户端微服务，客户端通过grpc访问服务端的服务。服务端接收请求后，使用cqrs查询和更新数据。客户端微服务可以通过Rest接口或者GraphQL方式调用。

## 安装
You'll need to have [Node.js](https://nodejs.org) (>= 10.13.0) to get started.
````
$ git clone https://github.com/ihahoo/nestjs-grpc-cqrs-graphql-sample.git
$ npm install
````

## 启动服务端微服务
````
$ npm run start:server
````

## 启动客户端微服务
````
$ npm run start:client
````

## REST方式
查询学校：GET http://localhost:3000/schools/1

<img src="https://raw.githubusercontent.com/ihahoo/doc/master/nestjs-grpc-cqrs-graphql-sample/1611862612628.jpg" width="50%">

更新学校名称：PUT http://localhost:3000/schools/1
````
{
    "name": "New name"
}
````

<img src="https://raw.githubusercontent.com/ihahoo/doc/master/nestjs-grpc-cqrs-graphql-sample/1611862677864.jpg" width="50%">


## GraphQL方式
查询学校：
<img src="https://raw.githubusercontent.com/ihahoo/doc/master/nestjs-grpc-cqrs-graphql-sample/1611860817787.jpg" width="50%">

更新学校名称：
<img src="https://raw.githubusercontent.com/ihahoo/doc/master/nestjs-grpc-cqrs-graphql-sample/1611862506195.jpg" width="50%">
