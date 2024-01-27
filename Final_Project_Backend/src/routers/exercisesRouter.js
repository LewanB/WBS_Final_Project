const { Router } = require("express");
const {
  getExercises,
  getExercisesFiltered,
  getByName,
  putByName,
  deleteByName,
} = require("../controllers/exercisesController.js");

//Important: Add middleware to remove any dangerous characters from user inputs

const { checkParam } = require("../middlewares/checkParamMiddleware.js");

const exerciseRouter = Router();

exerciseRouter.get("/", getExercises);

exerciseRouter.get("/:name", checkParam, getByName);

exerciseRouter.put("/:name", putByName);

exerciseRouter.delete("/:name", checkParam, deleteByName);

exerciseRouter.get("/filter/:name", getExercisesFiltered);

module.exports = exerciseRouter;
