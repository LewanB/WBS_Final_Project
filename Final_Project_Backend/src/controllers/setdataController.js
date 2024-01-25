const client = require("../database/connect_db.js");

const getBySessionID = async (req, res) => {
  const sessionID = req.params.sessionid;
  console.log(sessionID);

  try {
    const setdata = await client.query(
      `SELECT * FROM setdata WHERE sessionid=${sessionID}`
    );
    if (!setdata.rows) {
      return res.status(400).json({
        cause: "getBySessionID -> then",
        sessionID: sessionID,
        error: "ERROR! This setdata Name does not exist!",
      });
    }
    return res.status(200).send(setdata.rows);
  } catch (error) {
    return res
      .status(500)
      .json({ cause: "getBySessionID -> catch", error: error.message });
  }
};

const isValidData = (body) => {
  if (!parseInt(body.setcounter)) return false;
  if (!parseFloat(body.weight)) return false;
  if (!parseInt(body.reps)) return false;
  if (!parseInt(body.sessionid)) return false;
  return true;
};

const postSetdata = async (req, res) => {
  const body = req.body;
  try {
    if (isValidData(body)) {
      let result = await client.query(
        `INSERT into setdata (setcounter, weight, reps, sessionid)
        VALUES (${body.setcounter}, ${body.weight}, ${body.reps}, ${body.sessionid});`
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

module.exports = {
  getBySessionID,
  postSetdata,
  deleteById,
};
