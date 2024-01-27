const { Router } = require("express");
const {
  getBySessionExerciseID,
  postSetdata,
  deleteById,
} = require("../controllers/setdataController.js");

//Important: Add middleware to remove any dangerous characters from user inputs

//DELETE when post functions are incorporated in controller (doesn't work yet for some reason)
const client = require("../database/connect_db.js");

const { checkParam } = require("../middlewares/checkParamMiddleware.js");

const setdataRouter = Router();

setdataRouter.get("/:session_exercise_id", checkParam, getBySessionExerciseID);

setdataRouter.post("/", postSetdata);

setdataRouter.delete("/:id", checkParam, deleteById);

module.exports = setdataRouter;
