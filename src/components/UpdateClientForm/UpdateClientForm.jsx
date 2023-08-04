import React, { useState, useEffect } from 'react';
import './UpdateClientForm.css'
import {useDispatch, useSelector} from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

function editClientForm (){
    const dispatch = useDispatch();
    const clients = useSelector((store) => store.client);
    const [clientName, setClientName] = useState("");
    const [clientGoal, setClientGoal] = useState("");
    const [clientImage, setClientImage] = useState("");
    const history = useHistory();
    const {id} = useParams();

    const updateClient = (event) => {
        event.preventDefault();
    
        dispatch({
            type: 'UPDATE_CLIENT',
            payload: {
                id: id,
                client_name: clientName,
                client_goals: clientGoal,
                client_image: clientImage
            }
        })
        history.push('/ClientProfilePage') 
    }

    return (
        <div>
            
         <form className="formPanel" onSubmit={updateClient}>
                <h3>Update Client Form</h3>   
            <div>  
              Client Name 
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
            value={clients.clientImage}
            required
            onChange={(event) => setClientImage(event.target.value)}
          />
          </div>

      <button type="submit">Update Client</button>
   
         </form>

        </div>
    )

}

export default editClientForm;