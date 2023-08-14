import React, { useState, useEffect } from 'react';
import './ClientProfilePage.css'
import {useDispatch, useSelector} from 'react-redux';
import selectedClient from '../../redux/reducers/selectClient.reducer';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

//home page
function ClientProfilePage() {
    const dispatch = useDispatch();
    const client = useSelector((store) => store.client);
    const history = useHistory();
    const [clientList, setClientList] = useState([]);
  
    useEffect(() => {
      fetchClients();
    }, []);
  
    const fetchClients = () => {
      fetch('/api/client_account')
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Network response was not OK");
          }
        })
        .then(clientList => {
          setClientList(clientList);
        })
        .catch((error) => {
          console.log(error);
          alert('Something went wrong.');
        });
    }

    const clickClient = (client) => {
        dispatch({type:"SET_SELECTED_CLIENT", payload: client});
        history.push(`/ClientAccount/${client.id}`)
    };
    
    const addNewClient = () => {
        history.push('/AddNewClient')
    };
 

    return (
        <div className="container">
       <h2>Client List</h2>
      <Stack direction="row" spacing={2} sx={{ marginBottom: '1rem' }}>
    <Button onClick={addNewClient}>Add New Client</Button></Stack>
    <div className="client-list">
      {
        clientList.length === 0 && (
          <div>No clients on the my list</div>
        )
      }
         {
        clientList.map(client => {
          return <div className="responsive" key={client.id}>
                    <div className="gallery">
                        <img src={client.client_image  }
                        onClick={() => clickClient(client)} className="client-image"
                        />
                        <br  />
                         <div className="desc">{client.client_name}</div>
                        <div style={{textAlign: 'center', padding: '5px'}}>
                        </div>
                    </div>
                 </div>
        })
      }
      <div className="clearfix"></div>
      </div>
        </div>
    );
  }
  
  export default ClientProfilePage;