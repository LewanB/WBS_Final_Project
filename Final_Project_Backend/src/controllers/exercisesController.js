const client = require("../database/connect_db.js");

const getExercises = async (req, res) => {
  client
    .query("SELECT * FROM exercises;")
    .then((data) => {
      if (!data.rows.length) {
        return res.status(404).json({
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

const getExercisesFiltered = async (req, res) => {
  const { name } = req.params;

  client
    .query(`SELECT * FROM exercises WHERE name ILIKE ${name};`)
    .then((data) => {
      if (!data.rows.length) {
        return res.status(404).json({
          cause: "getExercisesFiltered -> then",
          error: "No matching exercise names in database",
        });
      }
      return res.status(200).json(data.rows);
    })
    .catch((err) =>
      res
        .status(500)
        .json({ cause: "getExercisesFiltered -> catch", error: err.message })
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

const putByName = async (req, res) => {
  const { name } = req.params;
  name.replace("%20", " "); //TEST: mit oder ohne Unterschied?

  const body = req.body;
  try {
    if (body.name && body.body_part && name) {
      const table = await client.query(
        `SELECT name FROM exercises WHERE name = '${name}';`
      );
      if (table.rowCount) {
        //Exercise already exists, UPDATE
        let result = await client.query(
          `UPDATE exercises
          SET name = '${body.name}', body_part = '${body.body_part}', comment = '${body.comment}'
          WHERE name = '${name}'`
        );
        return res.status(200).json(result.rowCount);
      } else {
        //Exercise not found, create new one
        let result =
          await client.query(`INSERT INTO exercises(name, body_part, comment)
        VALUES ('${body.name}','${body.body_part}','${body.comment}');`);
        return res.status(201).json(result.rows);
      }
    } else {
      return res.status(400).json({ error: "Missing valid data in request!" });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deleteByName = async (req, res) => {
  const { name } = req.params;
  name.replace("%20", " ");
  try {
    if (name) {
      let result = await client.query(
        `DELETE FROM exercises
        WHERE name = '${name}';`
      );
      return res.status(200).json(result.rowCount);
    }
  } catch (error) {
    return res
      .status(500)
      .json({ cause: "deleteByName", error: error.message });
  }
};

module.exports = {
  getExercises,
  getExercisesFiltered,
  getByName,
  putByName,
  deleteByName,
};

////Hier nicht benötigt, Beispiel für FrontEnd
//let exercise = new Exercise(body.name, body.body_part, body.comment);
// class Exercise {
//   constructor(name, body_part, comment = "") {
//     this.name = name;
//     this.body_part = body_part;
//     this.comment = comment;
//   }
// }
