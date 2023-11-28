const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");
const mongoose = require("mongoose");
const { schema, resolver } = require("./schema");

mongoose
  .connect(
    "mongodb+srv://heypangho:blefDJnler7xFAN0@cluster0.iuhpkf0.mongodb.net/",
    {
      connectTimeoutMS: 30000,
    }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Failed to connect to MongoDB", error));

const app = express();

// GraphQL 미들웨어 추가
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: resolver,
    graphiql: true,
  })
);

// "/" 경로에 대한 기본 라우트 추가
app.get("/", (req, res) => {
  console.log("Received a request at /");
  res.send("Hello, welcome to the GraphQL server!");
});

// 서버 시작
app.listen(5110, () => {
  console.log("Listening on 5110");
});
