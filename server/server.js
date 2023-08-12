const express = require('express');
require('dotenv').config();
process.env.SERVER_SESSION_SECRET

const app = express();

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const clientAccountRouter = require('./routes/client_account.router');
const clientWorkoutRouter = require('./routes/workouts.router');
const clientImageRouter = require('./routes/client_images.router');

// Express middleware
app.use(express.json());

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/client_account', clientAccountRouter);
app.use('/api/workouts', clientWorkoutRouter);
app.use('/api/client_images',clientImageRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 8002;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
