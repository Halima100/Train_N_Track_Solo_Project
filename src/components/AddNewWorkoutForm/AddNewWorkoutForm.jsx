import React, { useState, useEffect } from 'react';
import './AddNewWorkoutForm.css'
import {useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';


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

  

   const addNewWorkout = (event) => {
    event.preventDefault();

    dispatch({
        type: 'ADD_WORKOUT',
        payload: {
          date: workoutDate,
workout: workouts,
sets: workoutSets,
repetition: workoutRepetition,
weight: workoutWeight,
comment: workoutComment,
        }
    })
        // Clear the form 
       
setWorkouts('');
setWorkoutSets('');
setWorkoutRepetition('');
setWorkoutWeight('');
setWorkoutComment('');

        history.push('/ClientAccount')
      };  
    
    return(
        <div>
            
         <form className="formPanel" onSubmit={addNewWorkout}>
                <h3>Add Workout</h3>   
                <div>  
             Date:
          <input
            type="text"
            name="Date"
            value={workout.workoutDate}
            required
            onChange={(event) => setWorkoutDate(event.target.value)}
          />
         </div> 
        
         <div>  
             Workout:
          <input
            type="text"
            name="workout"
            value={workout.workouts}
            required
            onChange={(event) => setWorkouts(event.target.value)}
          />
         </div> 
         
         <div>  
             Sets:
          <input
            type="text"
            name="sets"
            value={workout.workoutSets}
            required
            onChange={(event) => setWorkoutSets(event.target.value)}
          />
         </div> 
         <div>  
             Repetition:
          <input
            type="text"
            name="Repetition"
            value={workout.workoutRepetition}
            required
            onChange={(event) => setWorkoutRepetition(event.target.value)}
          />
         </div> 
         <div>  
             Weight:
          <input
            type="text"
            name="Weight"
            value={workout.workoutWeight}
            required
            onChange={(event) => setWorkoutWeight(event.target.value)}
          />
         </div> 
         <div>  
             Comment:
          <input
            type="text"
            name="Comment"
            value={workout.workoutComment}
            required
            onChange={(event) => setWorkoutComment(event.target.value)}
          />
         </div>   

      <button type="submit">Add Workout</button>
   
         </form>

        </div>
    )

}

export default AddNewWorkoutForm;