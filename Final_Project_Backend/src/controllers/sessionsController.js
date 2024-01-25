const client = require("../database/connect_db.js");

const getByID = async (req, res) => {
  const { id } = req.params;

  try {
    const session = await client.query(
      `SELECT * FROM training_sessions WHERE id=${id}`
    );
    if (!session.rows) {
      return res.status(400).json({
        cause: "getByID -> then",
        id: id,
        error: "ERROR! This setdata Name does not exist!",
      });
    }
    return res.status(200).send(session.rows);
  } catch (error) {
    return res
      .status(500)
      .json({ cause: "getByID -> catch", error: error.message });
  }
};

const getAllSessions = async (req, res) => {
  client
    .query("SELECT * FROM training_sessions;")
    .then((data) => {
      if (!data.rows.length) {
        return res.status(404).json({
          cause: "getAllSessions -> then",
          error: "No sessions in database",
        });
      }
      return res.status(200).json(data.rows);
    })
    .catch((err) =>
      res
        .status(500)
        .json({ cause: "getAllSessions -> catch", error: err.message })
    );
};

const isValidData = (body) => {
  if (!/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/.test(body.date))
    return false;
  return true;
};

const putById = async (req, res) => {
  const body = req.body;
  try {
    const id = req.params.id;
    if (isValidData(body)) {
      if (id) {
        const table = await client.query(
          `SELECT id FROM training_sessions WHERE id = '${id}';`
        );
        if (table.rowCount) {
          //Exercise already exists, UPDATE
          let result = await client.query(
            `UPDATE training_sessions
              SET date = '${body.date}', exercise = '${body.exercise}', comment = '${body.comment}'
              WHERE id = '${id}'`
          );
          return res.status(200).json(result.rows);
        }
        return res.status(400).json({ error: "Invalid ID!" });
      }

      //Exercise not found, create new one
      let result =
        await client.query(`INSERT INTO training_sessions(date, exercise, comment)
          VALUES ('${body.date}','${body.exercise}','${body.comment}');`);
      return res.status(201).json(result.rows);
    } else {
      return res.status(400).json({ error: "Missing valid data in request!" });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deleteById = async (req, res) => {
  const id = req.params.id;
  try {
    if (id) {
      let result = await client.query(
        `DELETE FROM training_sessions
        WHERE id = '${id}';`
      );
      return res.status(200).json(result.rowCount);
    }
  } catch (error) {
    return res.status(500).json({ cause: "deleteById", error: error.message });
  }
};

module.exports = {
  getAllSessions,
  getByID,
  putById,
  deleteById,
};
