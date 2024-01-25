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

const { sessionExists } = require("../middlewares/sessionMiddleware.js");

const sessionsRouter = Router();

sessionsRouter.get("/", getAllSessions);

sessionsRouter.get("/:id", sessionExists, getByID);

sessionsRouter.put("/", putById);

sessionsRouter.put("/:id", putById);

sessionsRouter.delete("/:id", sessionExists, deleteById);

module.exports = sessionsRouter;
