import React, { useState, useEffect } from 'react';
import './UpdateClientForm.css'
import {useDispatch, useSelector} from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ImageDialog from '../ImagesDialog/ImagesDialog';
import TextField from '@mui/material/TextField';

function editClientForm (){
    const dispatch = useDispatch();
    const clients = useSelector((store) => store.client);
    const [clientName, setClientName] = useState("");
    const [clientGoal, setClientGoal] = useState("");
    const [clientUrl, setClientUrl] = useState(null);
    const [clientImage, setClientImage] = useState("");
    const [openDialog, setOpenDialog] = useState(false);
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
                client_image: clientUrl
            }
        })
        history.push('/ClientProfilePage') 
    }
    const handleClose = () => {
        setOpenDialog(false);
      };

      dispatch({
        type: 'FETCH_IMAGE',
      
    })
    const handleClientImage = (image) => {
        setClientUrl(image.client_image);
      };

    return (
        <div>
            
         <form className="formPanel" onSubmit={updateClient}>
                <h3>Update Client Form</h3>   
            <div>  
           
        <TextField id="outlined-basic" label="Client Name" variant="outlined"
            type="text"
            name="clientname"
            value={clients.clientName}
            required
            onChange={(event) => setClientName(event.target.value)}
          />
         </div> 
        
        <div>
     
            <TextField id="outlined-basic" label="Client Goal" variant="outlined"
            type="text"
            name="clientGoals"
            value={clients.clientGoal}
            required
            onChange={(event) => setClientGoal(event.target.value)}
          />
         </div>
         
         <div>
        
            {clientUrl && <img src={clientUrl} className="client-image" />}
          <Button
          onClick={()=> setOpenDialog(true)}
          >  Select Client Image:</Button> 
          <ImageDialog open={openDialog} onClose={handleClose}  onClientImage={handleClientImage}/>
          </div>

          <Stack direction="row" spacing={2} sx={{ marginBottom: '1rem' }}>
      <Button variant="contained" type="submit">Add Client</Button>
   </Stack>
         </form>

        </div>
    )

}

export default editClientForm;