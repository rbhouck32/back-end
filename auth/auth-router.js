const router = require("express").Router();
const bcryptjs = require("bcryptjs");
const express = require("express");
const jwt = require("jsonwebtoken");
const Users = require("../users/users-model.js");

const { isValid } = require("../users/users-service.js");

router.post("/register", (req, res, next) => {
  const credentials = req.body;
  const hash = bcryptjs.hashSync(credentials.password, 8);
  credentials.password = hash;

  if (isValid(credentials)) {
    // Users.add(credentials)
    Users.add(credentials)
      .then((newUser) => {
        res.status(201).json({ data: newUser });
      })
      .catch((err) => {
        next({
          apiCode: 500,
          apiMessage: "Error Registering New User",
          ...err,
        });
      });
  } else {
    res.status(400).json({ message: "Please provide username and password" });
  }
});

router.post("/login", (req, res, next) => {
  const { username, password } = req.body;
  if (isValid(req.body)) {
    Users.findBy({ username: username })
      .then(([user]) => {
        if (user && bcryptjs.compareSync(password, user.password)) {
          const token = generateToken(user);
          res.status(200).json({ message: "Welcome to the API", token: token });
        } else {
          res.status.apply(401).json({ message: "Invalid Credentials!" });
        }
      })
      .catch((err) => {
        res.status(500).json({ message: err.message });
      });
  } else {
    res.status(400).json({ message: "Please provide username and password" });
  }
});

function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username,
    firstname: user.firstName,
    lastname: user.lastName,
  };

  const secret =
    process.env.JWT_SECRET || "this is a secret, keep it secret, keep it safe";

  const options = {
    expiresIn: "1hr",
  };

  const token = jwt.sign(payload, secret, options);
  return token;
}

module.exports = router;
