const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const errorHandler = require("./errorHandler.js");
const server = express();

const authenticate = require("../api/auth/authenticate.js");
const authRouter = require("../api/auth/auth-router.js");
const usersRouter = require("../api/users/users-router.js");

server.use(helmet());
server.use(express.json());
server.unsubscribe(cors());

server.use("/api", authRouter);
server.use("/api/users", usersRouter);

module.exports = server;
