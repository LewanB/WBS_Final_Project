const { Router } = require("express");
const {
  getBySessionID,
  putById,
  deleteById,
} = require("../controllers/sessionExercisesController.js");

const { checkParam } = require("../middlewares/checkParamMiddleware.js");

const sessionsRouter = Router();

sessionsRouter.get("/:sessionID", checkParam, getBySessionID);

sessionsRouter.put("/", putById);

sessionsRouter.put("/:id", putById);

sessionsRouter.delete("/:id", checkParam, deleteById);

module.exports = sessionsRouter;
