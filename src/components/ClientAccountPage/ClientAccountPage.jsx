import React, { useState, useEffect } from "react";
import "./ClientAccountPage.css";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

function ClientAccountPage() {
  // Client details
  const client = useSelector((store) => store.selectedClient);
  const history = useHistory();
  const [workoutList, setWorkoutList] = useState([]);
const {id} = useParams();
  
useEffect(() => {
    fetchWorkoutList();
  }, []);

  const fetchWorkoutList = () => {
    fetch(`/api/workouts/${id}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Network response was not OK");
        }
      })
      .then((results) => {
        setWorkoutList(results);
      })
      .catch((error) => {
        console.log(error);
        alert("Something went wrong.");
      });
  };
  const deleteClient = (id) => {
    fetch(`/api/client_account/${id}`, { method: "DELETE" })
      .then((response) => {
        if (response.ok) {
          // fetchClients();
          // navigate away from page  
           history.push(`/ClientProfilePage`);
        } else {
          throw new Error("Network response was not OK");
        }
      })
      .catch((error) => {
        console.log(error);
        alert("Something went wrong.");
      });
  
  };

  const updateClientForm = (id) => {
    history.push(`/UpdateClientForm/${id}`);
  };

  const deleteWorkout = (id, client_id) => {
        fetch(`/api/workouts/${id}/${client_id}`, { method: "DELETE" })
          .then((response) => {
            if (response.ok) {
                fetchWorkoutList();
            } else {
              throw new Error("Network response was not OK");
            }
          })
          .catch((error) => {
            console.log(error);
            alert("Something went wrong.");
          });
      };
      const updateWorkoutForm = (id, client_id) => {
        history.push(`/UpdateWorkoutForm/${id}/${client_id}`);
      };

      const addNewWorkout = ( client_id) => {
        history.push(`/addNewWorkout/${client_id}`)
    };

  return (
    <div className="container">
      <h2>Client Details</h2>
      <div className="clientInfo">
      <div>{client.client_name}</div>
      <img src ={client.client_image} className="client-image"/>
      <div>{client.client_goals}</div>
    </div>
      {/* {JSON.stringify(client)} */}
<div style={{ textAlign: "center", padding: "5px" }}>
                <button
                  style={{ cursor: "pointer" }}
                  onClick={() => updateClientForm(id)}
                >
                  Edit
                </button>

                <button
                  style={{ cursor: "pointer" }}
                  onClick={() => deleteClient(id)}
                >
                  Delete
                </button>
              </div>  
              
                  <button
                  style={{ cursor: "pointer" }}
                  onClick={() => addNewWorkout(id)}
                >
                Add Workout
                </button>  
      <h2>Workout List</h2>
      
   
      {/* {JSON.stringify(workoutList)} */}
      <div className="workoutInfo">
       {workoutList.map((workout) => (
            
            <div className="responsive" key={workout.id}>
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
                  onClick={() => updateWorkoutForm(workout.id, workout.client_id)}
                >
                  Edit
                </button>
                <button
                  style={{ cursor: "pointer" }}
                  onClick={() => deleteWorkout(workout.id, workout.client_id)}
                >
                  Delete
                </button>
                </div>
          </div>
       ))}
          
        </div>
       
      {/* {clientList.length === 0 && <div>No clients</div>}
      {clientList.map((client) => {
        return (
          <div className="responsive" key={client.id}>
            <div className="gallery">
              <img src={client.client_image} />
              <br />
              <div className="desc">{client.client_name}</div>
              <div className="desc">{client.client_goals}</div>
              <div style={{ textAlign: "center", padding: "5px" }}>
                <button
                  style={{ cursor: "pointer" }}
                  onClick={() => updateClientForm(client.id)}
                >
                  Edit
                </button>

                <button
                  style={{ cursor: "pointer" }}
                  onClick={() => deleteClient(client.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        );
      })} */}
      {/* <div className="clearfix"></div> */}
    </div>
  );
}

export default ClientAccountPage;
