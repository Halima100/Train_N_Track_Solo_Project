import React, { useState, useEffect } from "react";
import "./ClientAccountPage.css";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function ClientAccountPage() {
  // Client details
  const client = useSelector((store) => store.selectedClient);
  const history = useHistory();
  const [workoutList, setWorkoutList] = useState([]);

  useEffect(() => {
    fetchWorkoutList();
  }, []);

  const fetchWorkoutList = () => {
    fetch(`/api/workouts/${client.id}`)
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
          // navigate away from page?
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

  return (
    <div className="container">
      <h2>Client Details</h2>
      <h3>{client.client_name}</h3>
      {JSON.stringify(client)}

      <h2>Workout List</h2>
      {JSON.stringify(workoutList)}
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
      <div className="clearfix"></div>
    </div>
  );
}

export default ClientAccountPage;
