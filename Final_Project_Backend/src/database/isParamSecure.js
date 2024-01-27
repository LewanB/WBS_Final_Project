const isParamSecure = (params) => {
  for (const param in params) {
    if (Object.hasOwnProperty.call(params, param)) {
      const element = params[param];

      if (element.includes(";")) {
        return false;
      }
      if (element.includes("'")) {
        return false;
      }
      return true;
    }
  }
  return false;
};

module.exports = { isParamSecure };
