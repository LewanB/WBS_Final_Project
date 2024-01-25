const { Router } = require("express");
const {
  getExercises,
  getExercisesFiltered,
  getByName,
  putByName,
  deleteByName,
} = require("../controllers/exercisesController.js");

//Important: Add middleware to remove any dangerous characters from user inputs

const { exerciseExists } = require("../middlewares/exerciseMiddleware.js");

const exerciseRouter = Router();

exerciseRouter.get("/", getExercises);

exerciseRouter.get("/:name", exerciseExists, getByName);

exerciseRouter.put("/:name", putByName);

exerciseRouter.delete("/:name", exerciseExists, deleteByName);

exerciseRouter.get("/filter/:name", getExercisesFiltered);

module.exports = exerciseRouter;
