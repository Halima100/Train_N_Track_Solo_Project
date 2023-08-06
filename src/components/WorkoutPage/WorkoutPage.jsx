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

return (
    <div className="container">
      <h2>Clients Workout</h2>

      {workoutList.length === 0 && <div>No Workout</div>}
      {workoutList.map((workout) => {
        return (
            <div className="responsive" key={workout.id}>
            <div className="gallery"></div>
            <div className="desc">{workout.date}</div>
            <div className="desc">{workout.workout}</div>
            <div className="desc">{workout.sets}</div>
            <div className="desc">{workout.repetition}</div>
            <div className="desc">{workout.weight}</div>
            <div className="desc">{workout.comment}</div>
            <button
                  style={{ cursor: "pointer" }}
                  onClick={() => deleteWorkout(workout.id)}
                >
                  Delete
                </button>
            </div>
            
        );
      })}
    </div>
          
  
);
}

export default WorkoutPage;