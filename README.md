# BE개발자 구현과제#02 - GraphQL + MongoDB CRUD

## 프로젝트 소개

이 프로젝트는 GraphQL과 MongoDB를 사용하여 환율 정보를 CRUD(Create, Read, Update, Delete)할 수 있는 API 서버를 구현한 프로젝트입니다.

## 사용된 라이브러리

- **express**: Node.js 기반의 웹 프레임워크로, HTTP 서버를 생성합니다. (설치방법: `npm i express`)

- **express-graphql**: Express와 함께 사용되는 GraphQL 미들웨어로, GraphQL 지원을 제공합니다. (설치방법: `npm i graphql express express-graphql`)

- **mongoose**: MongoDB와 상호 작용하기 위한 ODM(Object Data Modeling) 라이브러리입니다. (설치방법: `npm i mongoose`)

## 구현과제 목표

프로젝트의 주요 목표는 다음과 같습니다:

- **환율 정보 CRUD API 서버 구현**: 원화(KRW)와 미화(USD) 간의 환율 정보를 생성, 조회, 업데이트, 삭제할 수 있는 GraphQL API 서버를 개발합니다.

- **데이터 저장**: 환율 정보는 MongoDB 데이터베이스에 저장되며, mongoose를 통해 데이터 모델링과 상호 작용을 수행합니다.

## 사용 기술 스택

- **백엔드 API 서버**: Node.js, GraphQL
- **데이터베이스 서버**: MongoDB

## 설치 방법

프로젝트를 실행하려면 다음과 같이 필요한 라이브러리를 설치합니다:

```bash
npm i express graphql express-graphql mongoose
```

## 실행 방법

```bash
node server.js
```



## MongoDB Collections
<img width="644" alt="image" src="https://github.com/pang-pangho/starbucks/assets/128563719/2d27ac20-314c-40f6-b209-25e39ae01eaf">

## 실행결과
<img width="613" alt="image" src="https://github.com/pang-pangho/starbucks/assets/128563719/9da4d0d4-59c8-47a7-ba4b-40aee8e06b5d">
<img width="613" alt="image" src="https://github.com/pang-pangho/starbucks/assets/128563719/84658f75-54e8-4922-9a7e-6fd8451f922a">
<img width="613" alt="image" src="https://github.com/pang-pangho/starbucks/assets/128563719/b49f6dd7-1f6b-4951-a92a-cb3723142e28">


## 참고영상

[![Video Label](http://img.youtube.com/vi/EkWI6Ru8lFQ/0.jpg)](https://youtu.be/EkWI6Ru8lFQ)
[![Video Label](http://img.youtube.com/vi/pTm5E3jcOeY/0.jpg)](https://youtu.be/pTm5E3jcOeY)

## 참고 블로그
[몽고DB와 연결하기](https://jin-co.tistory.com/130) <br>
[graphql 개념 및 사용법](https://velog.io/@party3205/GraphQL-%EA%B0%9C%EB%85%90-%EC%82%AC%EC%9A%A9%EB%B2%95-%EC%A0%95%EB%A6%AC)

