import React, { useState, useEffect } from 'react';
import './AddNewClient.css'
import {useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ImageDialog from '../ImagesDialog/ImagesDialog';
import { useParams } from "react-router-dom";


function AddNewClientForm () {
    
    const dispatch = useDispatch();
    const clients = useSelector((store) => store.client);
    const [clientName, setClientName] = useState("");
    const [clientGoal, setClientGoal] = useState("");
    const [clientImage, setClientImage] = useState("");
    const [clientUrl, setClientUrl] = useState(null);
    const [openDialog, setOpenDialog] = useState(false);
    const history = useHistory();

  

   const addNewClient = (event) => {
    event.preventDefault();

    dispatch({
        type: 'ADD_CLIENT',
        payload: {
            client_name: clientName,
            client_goals: clientGoal,
            client_image: clientUrl
        }
    })
        // Clear the form 
        setClientName('');
        setClientGoal('');
        setClientImage('');

        history.push('/ClientProfilePage')
      };  
      const handleClose = () => {
        setOpenDialog(false);
      };

      dispatch({
        type: 'FETCH_IMAGE',
        payload:{
        client_image: clientImage
        } 
    })
    const handleClientImage = (image) => {
        setClientUrl(image);
      };
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
           
          <Button
          onClick={()=> setOpenDialog(true)}
          >  Client Image:</Button> 
          <ImageDialog open={openDialog} onClose={handleClose}  onClientImage={handleClientImage}/>
        
          </div>

      <button type="submit">Add Client</button>
   
         </form>

        </div>
    )

}

export default AddNewClientForm;