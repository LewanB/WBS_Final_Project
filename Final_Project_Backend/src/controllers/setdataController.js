const client = require("../database/connect_db.js");

const getBySessionExerciseID = async (req, res) => {
  const { session_exercise_id } = req.params;
  console.log(session_exercise_id);

  try {
    const setdata = await client.query(
      `SELECT * FROM setdata WHERE session_exercise_id=${session_exercise_id}`
    );
    if (!setdata.rows) {
      return res.status(400).json({
        cause: "getBysession_exercise_id -> then",
        session_exercise_id: session_exercise_id,
        error: "ERROR! This setdata id does not exist!",
      });
    }
    return res.status(200).send(setdata.rows);
  } catch (error) {
    return res
      .status(500)
      .json({ cause: "getBySessionExerciseID -> catch", error: error.message });
  }
};

const isValidData = (body) => {
  if (!parseInt(body.setcounter)) return false;
  if (!parseFloat(body.weight)) return false;
  if (!parseInt(body.reps)) return false;
  if (!parseInt(body.session_exercise_id)) return false;
  return true;
};

const postSetdata = async (req, res) => {
  const body = req.body;
  try {
    if (isValidData(body)) {
      let result = await client.query(
        `INSERT into setdata (setcounter, weight, reps, session_exercise_id)
        VALUES (${body.setcounter}, ${body.weight}, ${body.reps}, ${body.session_exercise_id});`
      );
      return res.status(201).json(result.rowCount);
    } else {
      return res.status(400).json({ error: "Invalid data in request!" });
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
        `DELETE FROM setdata
        WHERE id = '${id}';`
      );
      return res.status(200).json(result.rowCount);
    }
  } catch (error) {
    return res.status(500).json({ cause: "deleteById", error: error.message });
  }
};

module.exports = { getBySessionExerciseID, postSetdata, deleteById };
