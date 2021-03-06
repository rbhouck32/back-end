module.exports = (err, req, res, next) => {
  console.log("your_express_error: ", err);
  if (err.apiCode >= 400) {
    res.status(err.apiCode).json({
      apiCode: err.apiCode,
      apiMessage: err.apiMessage,
      ...err,
    });
  } else {
    next();
  }
};
