import React, { useState, useEffect } from 'react';
import './AddNewClient.css'
import {useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';


function AddNewClientForm () {
    
    const dispatch = useDispatch();
    const clients = useSelector((store) => store.addClientReducer);
    const [clientName, setClientName] = useState("");
    const [clientGoal, setClientGoal] = useState("");
    const [clientImage, setClientImage] = useState("");

  

   const addNewClient = (event) => {
    event.preventDefault();

    dispatch({
        type: 'ADD_CLIENT',
        payload: {
            client_name: clientName,
            client_goals: clientGoal,
            client_image: clientImage
        }
    })
        // Clear the form 
        setClientName('');
        setClientGoal('');
        setClientImage('');
      };
   

      const deleteClient = (id) => {
        fetch(`/api/client_account/${id}`, { method: 'DELETE'})
          .then((response) => {
            if (response.ok) {
        addNewClient();
            } else {
              throw new Error("Network response was not OK");
            }
          }).catch((error) => {
            console.log(error);
            alert('Something went wrong.');
          });
      }
      
    
    return(
        <div>
            
         <form className="formPanel" onSubmit={addNewClient}>
                <h3>Add New Client</h3>   
            <div>  
               Client Name:
          <input
            type="text"
            name="clientname"
            value={clients.clientName}
            required
            onChange={(event) => setClientName(event.target.value)}
          />
         </div> 
        
        <div>
            Client Goals:
          <input
            type="text"
            name="clientGoals"
            value={clients.clientGoal}
            required
            onChange={(event) => setClientGoal(event.target.value)}
          />
         </div>
         
         <div>
            Client Image:
          <input
            type="file"
            name="clientImage"
            src={clients.clientImage}
            required
            onChange={(event) => setClientImage(event.target.src)}
          />
          </div>

      <button type="submit">Add Client</button>
   
         </form>

         <h3>New Client:</h3>
         <ul>
         {clients.map((client) => (
          <li key={client.id}>
            <p>Name: {client.client_name}</p>
            <p>Goals: {client.client_goals}</p>
            <button onClick={() => deleteClient(client.id)}>Delete</button>
          </li>
        ))}
      </ul>

        </div>
    )

}

export default AddNewClientForm;