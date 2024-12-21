require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const userRouter = require("./routers/users.router");
// const transactionRouter = require("./routers/transactions.router");
const globalErrorHandler = require("./middlewares/error.middleware");

const app = express();
const port = process.env.APP_PORT;
app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(userRouter);
// app.use(transactionRouter);

app.use(globalErrorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
