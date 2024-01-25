const { Router } = require("express");
const {
  getBySessionID,
  postSetdata,
  deleteById,
} = require("../controllers/setdataController.js");

//Important: Add middleware to remove any dangerous characters from user inputs

//DELETE when post functions are incorporated in controller (doesn't work yet for some reason)
const client = require("../database/connect_db.js");

const { setdataExists } = require("../middlewares/setdataMiddlewares.js");

const setdataRouter = Router();

setdataRouter.get("/:sessionid", setdataExists, getBySessionID);

setdataRouter.post("/", postSetdata);

setdataRouter.delete("/:id", setdataExists, deleteById);

module.exports = setdataRouter;
