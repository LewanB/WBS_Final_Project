const secureParam = (param) => {
  let secureParam = param;
  secureParam.replace(";", "");
  secureParam.replace("'", "");
  return secureParam;
};

module.exports = { secureParam };
