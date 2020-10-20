const jwt = require("jsonwebtoken");
const secret =
  process.env.JWT_SECRET || "this is a secret, keep it secret, keep it safe";
module.exports = (req, res, next) => {
  //   Bearer stuff ....
  const token = req.headers.authorization
    ? req.headers.authorization.split(" ")[1]
    : "";
  console.log("token", token);

  //  add code here to verify users are logged in

  if (token) {
    jwt.verify(token, secret, (err, decodedToken) => {
      if (err) {
        res.status(401).json({ message: "invalid or missing credentials" });
      } else {
        req.decodedToken = decodedToken;
        next();
      }
    });
  } else {
    res.status(401).json({ message: "invalid or missing credentials" });
  }
};
