import React, { useState, useEffect } from "react";
import "./UpdateWorkoutForm.css";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ImageDialog from "../ImagesDialog/ImagesDialog";
import TextField from "@mui/material/TextField";

function editWorkoutForm() {
  const dispatch = useDispatch();
  const workout = useSelector((store) => store.workoutReducer);
  const [workoutDate, setWorkoutDate] = useState(workout.date);
  const [workouts, setWorkouts] = useState(workout.workout);
  const [workoutSets, setWorkoutSets] = useState(workout.sets);
  const [workoutRepetition, setWorkoutRepetition] = useState(
    workout.repetition
  );
  const [workoutWeight, setWorkoutWeight] = useState(workout.weight);
  const [workoutComment, setWorkoutComment] = useState(workout.comment);
  const history = useHistory();
  const { id, client_id } = useParams();
  console.log(workout, "workout");

  const updateWorkout = (event) => {
    event.preventDefault();

    dispatch({
      type: "UPDATE_WORKOUT",
      payload: {
        id,
        client_id,
        date: workoutDate,
        workout: workouts,
        sets: workoutSets,
        repetition: workoutRepetition,
        weight: workoutWeight,
        comment: workoutComment,
        history,
      },
    });
    // history.push('/WorkoutPage')
  };

  return (
    <div>
      <form className="formPanel" onSubmit={updateWorkout}>
        <h3>Update Workout Form</h3>
        <div>
          <TextField
            id="outlined-basic"
            label="Date"
            variant="outlined"
            type="text"
            name="Date"
            value={workoutDate}
            required
            onChange={(event) => setWorkoutDate(event.target.value)}
          />
        </div>

        <div>
          <TextField
            id="outlined-basic"
            label="Workout"
            variant="outlined"
            type="text"
            name="workout"
            value={workouts}
            required
            onChange={(event) => setWorkouts(event.target.value)}
          />
        </div>

        <div>
          <TextField
            id="outlined-basic"
            label="Sets"
            variant="outlined"
            type="text"
            name="sets"
            value={workoutSets}
            required
            onChange={(event) => setWorkoutSets(event.target.value)}
          />
        </div>
        <div>
          <TextField
            id="outlined-basic"
            label="Repetition"
            variant="outlined"
            type="text"
            name="Repetition"
            value={workoutRepetition}
            required
            onChange={(event) => setWorkoutRepetition(event.target.value)}
          />
        </div>
        <div>
          <TextField
            id="outlined-basic"
            label="Weight"
            variant="outlined"
            type="text"
            name="Weight"
            value={workoutWeight}
            required
            onChange={(event) => setWorkoutWeight(event.target.value)}
          />
        </div>
        <div>
          <TextField
            id="outlined-basic"
            label="Comment"
            variant="outlined"
            type="text"
            name="Comment"
            value={workoutComment}
            required
            onChange={(event) => setWorkoutComment(event.target.value)}
          />
        </div>
        <Stack direction="row" spacing={2} sx={{ marginBottom: "1rem" }}>
          <Button variant="contained" type="submit">
            Update Workout
          </Button>
        </Stack>
      </form>
    </div>
  );
}

export default editWorkoutForm;
