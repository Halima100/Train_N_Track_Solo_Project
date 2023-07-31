const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
  } = require('../modules/authentication-middleware');

 //rejectUnauthenticated reques the user to be logged in to access this route
router.get('/', rejectUnauthenticated, (req, res) => {
    // Checks to see if the user is logged in
    console.log(req.isAuthenticated());
    //req.user is the logged in user
    console.log(req.user);
    const queryText = `SELECT * FROM "client_accounts" WHERE user_id = $1;`;
    pool.query(queryText, [req.user.id]).then((result)=> {
        res.send(result.rows);
    }).catch((error) => {
        console.log(error)
   res.sendStatus(500); 
})
});

router.post('/', rejectUnauthenticated, (req, res) => {
    const { client_name, client_goals, client_image } = req.body;
    const queryText = `INSERT INTO "client_accounts" ("client_name", "client_goals", "client_image", "user_id") VALUES ($1, $2, $3, $4);`
    pool.query(queryText, [client_name, client_goals, client_image, req.user.id]).then((result) =>{
        res.sendStatus(201);
    }).catch((error)=> {
        console.log(error);
        res.sendStatus(500);
    })
});

router.delete('/:id', rejectUnauthenticated, (req, res) => {
    const queryText = `DELETE FROM "client_accounts" WHERE "id" = $1 AND "user_id" = $2;`;
    pool.query(queryText, [req.params.id, req.user.id])
    .then(() => {
    res.sendStatus(204);
    })
    .catch((error)=> {
      console.error(error);
      res.sendStatus(500);
    });
    // endpoint functionality
  });
 
 
  module.exports = router;