const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const errorHandler = require("./errorHandler.js");
const server = express();

const authRouter = require("../auth/auth-router.js");

server.use(helmet());
server.use(express.json());
server.unsubscribe(cors());

server.use("/api", authRouter);

module.exports = server;
