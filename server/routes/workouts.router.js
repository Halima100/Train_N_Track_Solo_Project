const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");

// Return all workouts for a client
router.get("/:id", rejectUnauthenticated, (req, res) => {
    console.log(req.isAuthenticated());
    const queryText = `SELECT * FROM "workouts" WHERE client_id = $1;`;
    pool
      .query(queryText, [req.params.id])
      .then((result) => {
        res.send(result.rows);
      })
      .catch((error) => {
        console.log(error);
        res.sendStatus(500);
      });
  });

  router.post("/:client_id", rejectUnauthenticated, (req, res) => {
    const { date, workout, sets, repetition, weight, comment} = req.body;
    console.log(req.body)
   
    const queryText = `INSERT INTO "workouts" ("client_id", "date", "workout", "sets", "repetition", "weight", "comment") VALUES ($1, $2, $3, $4, $5, $6, $7);`;
    pool
      .query(queryText, [req.params.client_id, date, workout, sets, repetition, weight, comment ] )
      .then((result) => {
        res.sendStatus(201);
      })
      .catch((error) => {
        console.log(error);
        res.sendStatus(500);
      });
  });

  router.put("/:id/:client_id", rejectUnauthenticated, (req, res) => {
    // const clientId = req.params.id;
    const { date, workout, sets ,repetition , weight , comment } = req.body;
    const queryText = `UPDATE "workouts"
     SET "date" = $1, "workout" = $2, "sets" = $3, "repetition" = $4, "weight" = $5, "comment" = $6
      WHERE "id" = $7 AND "client_id" = $8`;
      console.log(queryText, "query")
    pool
      .query(queryText, [date, workout, sets ,repetition , weight , comment, req.params.id, req.params.client_id])
      .then(() => {
        res.sendStatus(200);
      })
      .catch((error) => {
        console.error(error);
        res.sendStatus(500);
      });
  });
  
  

router.delete("/:id/:client_id", rejectUnauthenticated, (req, res) => {
    const queryText = `DELETE FROM "workouts" WHERE "id" = $1 AND "client_id" = $2;`;
    console.log(req.params.id, req.params.client_id, "workoutID")
    

    pool
      .query(queryText, [req.params.id,req.params.client_id])
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