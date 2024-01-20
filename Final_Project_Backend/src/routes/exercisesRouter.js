const { Router } = require("express");
const {
  getExercises,
  getByName,
  postExercise,
} = require("../controllers/exercisesController");

const { exerciseExists } = require("../middlewares/exerciseMiddleware");

const exerciseRouter = Router();

exerciseRouter.get("/", getExercises);

exerciseRouter.get("/:name", exerciseExists, getByName);

exerciseRouter.post("/", async (req, res) => {
  const body = req.body;
  if (body.name) console.log(body.name);
  if (body.body_part) console.log(body.body_part);
  if (body.comment) console.log(body.comment);
  return res.status(201).json({ request_body: req.body });
});

module.exports = exerciseRouter;
