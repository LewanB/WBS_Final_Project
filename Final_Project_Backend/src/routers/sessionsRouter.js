const { Router } = require("express");
const {
  getByID,
  getAllSessions,
  putById,
  deleteById,
} = require("../controllers/sessionsController.js");

//Important: Add middleware to remove any dangerous characters from user inputs

//DELETE when post functions are incorporated in controller (doesn't work yet for some reason)
const client = require("../database/connect_db.js");

const { checkParam } = require("../middlewares/checkParamMiddleware.js");

const sessionsRouter = Router();

sessionsRouter.get("/", getAllSessions);

sessionsRouter.get("/:id", checkParam, getByID);

sessionsRouter.put("/", putById);

sessionsRouter.put("/:id", putById);

sessionsRouter.delete("/:id", checkParam, deleteById);

module.exports = sessionsRouter;
