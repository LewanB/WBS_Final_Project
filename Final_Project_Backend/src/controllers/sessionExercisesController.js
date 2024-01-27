const client = require("../database/connect_db.js");

const getBySessionID = async (req, res) => {
  const { sessionID } = req.params;

  try {
    const sessionExercises = await client.query(
      `SELECT * FROM session_exercises WHERE sessionID=${sessionID}`
    );
    if (!sessionExercises.rows) {
      return res.status(400).json({
        cause: "getBySessionID -> then",
        id: id,
        error: "ERROR! This sessionID does not exist!",
      });
    }
    return res.status(200).send(sessionExercises.rows);
  } catch (error) {
    return res
      .status(500)
      .json({ cause: "getBySessionID -> catch", error: error.message });
  }
};

const putById = async (req, res) => {
  const body = req.body;
  try {
    const { id } = req.params;
    if (id) {
      const table = await client.query(
        `SELECT id FROM session_exercises WHERE id = '${id}';`
      );
      if (table.rowCount) {
        //Exercise already exists, UPDATE
        let result = await client.query(
          `UPDATE session_exercises
            SET exercise = '${body.exercise}'
            WHERE id = '${id}'`
        );
        return res.status(200).json(result.rowCount);
      }
      return res.status(400).json({ error: "Invalid ID!" });
    }

    //Exercise not found, create new one
    let result =
      await client.query(`INSERT INTO session_exercises(sessionID, exercise) 
        VALUES ('${body.sessionID}','${body.exercise}');`);
    //Kann ich die ID vom hinzugefügten Eintrag zurückbekommen?
    return res.status(201).json(result.rowCount);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deleteById = async (req, res) => {
  const { id } = req.params;
  try {
    if (id) {
      let result = await client.query(
        `DELETE FROM session_exercises
        WHERE id = '${id}';`
      );
      return res.status(200).json(result.rowCount);
    }
  } catch (error) {
    return res.status(500).json({ cause: "deleteById", error: error.message });
  }
};

module.exports = {
  getBySessionID,
  putById,
  deleteById,
};
