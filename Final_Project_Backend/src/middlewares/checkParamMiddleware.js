const { isParamSecure } = require("../database/isParamSecure.js");

const checkParam = (req, res, next) => {
  if (isParamSecure(req.params)) {
    return next();
  }
  return res.status(400).json({
    message: "Param not secure!",
    param: req.params,
  });
};

module.exports = {
  checkParam,
};
