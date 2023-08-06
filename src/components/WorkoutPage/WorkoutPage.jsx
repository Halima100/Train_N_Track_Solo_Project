import React, { useState, useEffect } from "react";
import './WorkoutPage.css'
import {useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';

function WorkoutPage() {
    const workout = useSelector((store) => store.workout);
    const history = useHistory();
    const [workoutList, setWorkoutList] = useState([]);
    

    useEffect(() => {
    fetchWorkouts();
}, []);

      const fetchWorkouts = () => {
        fetch("/api/workouts")
          .then((response) => {
            if (response.ok) {
              return response.json();
            } else {
              throw new Error("Network response was not OK");
            }
          })
          .then((workoutList) => {
            setWorkoutList(workoutList);
          })
          .catch((error) => {
            console.log(error);
            alert("Something went wrong.");
          });
      };
    const deleteWorkout = (id) => {
        fetch(`/api/workouts/${id}`, { method: "DELETE" })
          .then((response) => {
            if (response.ok) {
              fetchWorkouts();
            } else {
              throw new Error("Network response was not OK");
            }
          })
          .catch((error) => {
            console.log(error);
            alert("Something went wrong.");
          });
      };
      const updateWorkoutForm = (id) => {
        history.push(`/UpdateWorkoutForm/${id}`);
      };

return (
    <div className="container">
      <h2>Clients Workout</h2>

      {workoutList.length === 0 && <div>No Workout</div>}
      {workoutList.map((workout) => {
        return (
            <div className="responsive" key={workout.id}>
            <div className="gallery"></div>
            <div className="desc" >
            <span className="label">Date: </span>{workout.date}</div>
            <div className="desc"> 
            <span className="label">Workout: </span> {workout.workout}</div>
            <div className="desc"> 
            <span className="label">Sets: </span>{workout.sets}</div>
            <div className="desc">
            <span className="label">Reps: </span>{workout.repetition}</div>
            <div className="desc">
            <span className="label">Weight: </span>{workout.weight}</div>
            <div className="desc">
            <span className="label">Comment: </span>{workout.comment}</div>
            <div style={{ textAlign: "center", padding: "5px" }}>
            <button
                  style={{ cursor: "pointer" }}
                  onClick={() => updateWorkoutForm(workout.id)}
                >
                  Edit
                </button>
            <button
                  style={{ cursor: "pointer" }}
                  onClick={() => deleteWorkout(workout.id)}
                >
                  Delete
                </button>
                </div>
            </div>
            
        );
      })}
          <div className="clearfix"></div>
    </div>
          
  
);
}

export default WorkoutPage;