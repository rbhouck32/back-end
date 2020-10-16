const router = require("express").Router();
const bcryptjs = require("bcryptjs");
const express = require("express");
const jwt = require("jsonwebtoken");
const Users = require("../users/users-model.js");

const { isValid } = require("../users/users-service.js");

router.post("/register", (req, res, next) => {
  const credentials = req.body;
  const hash = bcrypt.hashSync(credentials.password, 8);
  credentials.password = hash;

  if (isValid(credentials)) {
    //   Users.add(credentials)
  }
});

module.exports = router;
