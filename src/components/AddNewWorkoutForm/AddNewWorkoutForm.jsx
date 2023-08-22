import React, { useState, useEffect } from 'react';
import './AddNewWorkoutForm.css'
import {useDispatch, useSelector} from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function AddNewWorkoutForm () {
    
    const dispatch = useDispatch();
    const workout = useSelector((store) => store.workoutReducer);
    const [workoutDate, setWorkoutDate] = useState("");
    const [workouts, setWorkouts] = useState("");
    const [workoutSets, setWorkoutSets] = useState("");
    const [workoutRepetition, setWorkoutRepetition] = useState("");
    const [workoutWeight, setWorkoutWeight] = useState("");
    const [workoutComment, setWorkoutComment] = useState("");
    const history = useHistory();
    const { client_id} = useParams();  
  

   const addNewWorkout = (event) => {
    event.preventDefault();

    dispatch({
        type: 'ADD_WORKOUT',
        payload: {
          client_id,
          date: workoutDate,
workout: workouts,
sets: workoutSets,
repetition: workoutRepetition,
weight: workoutWeight,
comment: workoutComment,
history,
        }
    })
        // Clear the form 
       
setWorkouts('');
setWorkoutSets('');
setWorkoutRepetition('');
setWorkoutWeight('');
setWorkoutComment('');

        // history.push('/ClientAccount')
      };  
    
    return(
        <div>
            
         <form className="formPanel" onSubmit={addNewWorkout}>
                <h3>Add Exercise</h3>   
                <div>  
            
            <TextField id="outlined-basic" label="Date" variant="outlined"
            type="text"
            name="Date"
            value={workout.workoutDate}
            required
            onChange={(event) => setWorkoutDate(event.target.value)}
          />
         </div> 
        
         <div>  
          
            <TextField id="outlined-basic" label="Workout" variant="outlined"
            type="text"
            name="workout"
            value={workout.workouts}
            required
            onChange={(event) => setWorkouts(event.target.value)}
          />
         </div> 
         
         <div>  
          
            <TextField id="outlined-basic" label="Sets" variant="outlined"
            type="text"
            name="sets"
            value={workout.workoutSets}
            required
            onChange={(event) => setWorkoutSets(event.target.value)}
          />
         </div> 
         <div>  
            
            <TextField id="outlined-basic" label="Repetition" variant="outlined"
            type="text"
            name="Repetition"
            value={workout.workoutRepetition}
            required
            onChange={(event) => setWorkoutRepetition(event.target.value)}
          />
         </div> 
         <div>  
           
            <TextField id="outlined-basic" label="Weight" variant="outlined"
            type="text"
            name="Weight"
            value={workout.workoutWeight}
            required
            onChange={(event) => setWorkoutWeight(event.target.value)}
          />
         </div> 
         <div>  
          
            <TextField id="outlined-basic" label="Comment" variant="outlined"
            type="text"
            name="Comment"
            value={workout.workoutComment}
            required
            onChange={(event) => setWorkoutComment(event.target.value)}
          />
         </div>   
         <Stack direction="row" spacing={2} sx={{ marginBottom: '1rem' }}>
      <Button variant="contained" type="submit">Add Exercise</Button>
      </Stack>
         </form>

        </div>
    )

}

export default AddNewWorkoutForm;