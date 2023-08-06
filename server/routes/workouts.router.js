const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");

router.get("/", rejectUnauthenticated, (req, res) => {
 
    console.log(req.isAuthenticated());
    console.log(req.user.id);
    const queryText = `SELECT * FROM "workouts" WHERE client_id = $1;`;
    pool
      .query(queryText, [req.user.id])
      .then((result) => {
        res.send(result.rows);
      })
      .catch((error) => {
        console.log(error);
        res.sendStatus(500);
      });
  });

  router.post("/", rejectUnauthenticated, (req, res) => {
    const { date, workout, sets ,repetition , weight , comment} = req.body;
    const queryText = `INSERT INTO "workouts" ("client_id", "date", "workout", "sets", "repetition", "weight", "comment") VALUES ($1, $2, $3, $4, $5, $6);`;
    pool
      .query(queryText, [ date, workout, sets ,repetition , weight , comment, req.user.id])
      .then((result) => {
        res.sendStatus(201);
      })
      .catch((error) => {
        console.log(error);
        res.sendStatus(500);
      });
  });
  

router.delete("/:id", rejectUnauthenticated, (req, res) => {
    const queryText = `DELETE FROM "workouts" WHERE "id" = $1 AND "client_id" = $2;`;
    pool
      .query(queryText, [req.params.id, req.user.id])
      .then(() => {
        res.sendStatus(204);
      })
      .catch((error) => {
        console.error(error);
        res.sendStatus(500);
      });
    // endpoint functionality
  });

module.exports = router;