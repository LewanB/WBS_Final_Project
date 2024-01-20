const cli = require("npm/lib/cli.js");
const client = require("../database/connect_db.js");

const getExercises = async (req, res) => {
  await client
    .query("SELECT * FROM exercises;")
    .then((data) => {
      if (!data.rows.length) {
        return res.status(201).json({
          cause: "getExercises -> then",
          error: "No Exercises in database",
        });
      }
      return res.status(200).json(data.rows);
    })
    .catch((err) =>
      res
        .status(500)
        .json({ cause: "getExercises -> catch", error: err.message })
    );
};

const getByName = async (req, res) => {
  const { name } = req.params;
  console.log(name);

  try {
    const exercise = await client.query(
      `SELECT * FROM exercises WHERE name=${name}`
    );
    if (!exercise.rows.exists) {
      return res.status(400).json({
        cause: "getByName -> then",
        name: name,
        error: "ERROR! This Exercise Name does not exist!",
      });
    }
    return res.status(200).send(exercise.rows);
  } catch (error) {
    return res
      .status(500)
      .json({ cause: "getByName -> catch", error: error.message });
  }
};

const postExercise = async (req, res) => {
  const body = req.body;
  return res.status(201).json({ body: req.body });
  // try {
  //   if (body.name && body.body_part) {
  //     client.query(
  //       `INSERT INTO exercises(name, body_part, comment)
  //       VALUES ("${body.name}","${body.body_part}","${body.comment}");`
  //     );
  //     let result = client.query(
  //       `SELECT * FROM exercises
  //       WHERE name = ${body.name};`
  //     );
  //     return res.status(201).json(result);
  //   }
  // } catch (error) {
  //   return res.status(400).json({ eror: error.message });
  // }
};

module.exports = {
  getExercises,
  getByName,
  postExercise,
};

//let exercise = new Exercise(body.name, body.body_part, body.comment); //Hier nicht benötigt, Beispiel für FrontEnd
// class Exercise {
//   constructor(name, body_part, comment = "") {
//     this.name = name;
//     this.body_part = body_part;
//     this.comment = comment;
//   }
// }
