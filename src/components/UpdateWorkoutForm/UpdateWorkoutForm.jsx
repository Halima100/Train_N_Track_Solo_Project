import React, { useState, useEffect } from 'react';
import './UpdateWorkoutForm.css'
import {useDispatch, useSelector} from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

function editWorkoutForm() {
    const dispatch = useDispatch();
    const workout = useSelector((store) => store.workout);
    const [workoutDate, setWorkoutDate] = useState("");
    const [workouts, setWorkouts] = useState("");
    const [workoutSets, setWorkoutSets] = useState("");
    const [workoutRepetition, setWorkoutRepetition] = useState("");
    const [workoutWeight, setWorkoutWeight] = useState("");
    const [workoutComment, setWorkoutComment] = useState("");
    const history = useHistory();
    const {id} = useParams();  
   
   
    const updateWorkout = (event) => {
        event.preventDefault();
    
        dispatch({
            type: 'UPDATE_WORKOUT',
            payload: {
                id,
                 workoutDate,
          workouts,
                 workoutSets,
                 workoutRepetition,
                workoutWeight,
                workoutComment
            }
        })
        history.push('/WorkoutPage') 
    }
    return (
        <div>
            
         <form className="formPanel" onSubmit={updateWorkout}>
                <h3>Update Workout Form</h3>   
            <div>  
             Date:
          <input
            type="text"
            name="Date"
            value={workoutDate}
            required
            onChange={(event) => setWorkoutDate(event.target.value)}
          />
         </div> 
        
         <div>  
             Workout:
          <input
            type="text"
            name="workout"
            value={workouts}
            required
            onChange={(event) => setWorkouts(event.target.value)}
          />
         </div> 
         
         <div>  
             Sets
          <input
            type="text"
            name="sets"
            value={workoutSets}
            required
            onChange={(event) => setWorkoutSets(event.target.value)}
          />
         </div> 
         <div>  
             Repetition
          <input
            type="text"
            name="Repetition"
            value={workoutRepetition}
            required
            onChange={(event) => setWorkoutRepetition(event.target.value)}
          />
         </div> 
         <div>  
             Weight:
          <input
            type="text"
            name="Weight"
            value={workoutWeight}
            required
            onChange={(event) => setWorkoutWeight(event.target.value)}
          />
         </div> 
         <div>  
             Comment:
          <input
            type="text"
            name="Comment"
            value={workoutComment}
            required
            onChange={(event) => setWorkoutComment(event.target.value)}
          />
         </div>   

      <button type="submit">Update Workout</button>
   
         </form>

        </div>
    )
}

export default editWorkoutForm;