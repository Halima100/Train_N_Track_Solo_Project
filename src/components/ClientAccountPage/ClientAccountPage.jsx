import React, { useState, useEffect } from 'react';
import './ClientAccountPage.css'
import {useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';

function ClientAccountPage() {
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
    const deleteClient = (id) => {
        fetch(`/api/client_account/${id}`, { method: 'DELETE'})
          .then((response) => {
            if (response.ok) {
              fetchClients(); 
            } else {
              throw new Error("Network response was not OK");
            }
          }).catch((error) => {
            console.log(error);
            alert('Something went wrong.');
          });
      }

   const updateClientForm =() => {
    history.push('/UpdateClientForm/')
   }

    return (
        <div className="container">
       <h2>Current Clients</h2>

      {
        clientList.length === 0 && (
          <div>No clients</div>
        )
      }
         {
        clientList.map(client => {
          return <div className="responsive" key={client.id}>
                    <div className="gallery">
                        <img src={client.client_image } />
                        <br />
                         <div className="desc">{client.client_name}</div>
                         <div className="desc">{client.client_goals}</div>
                        <div style={{textAlign: 'center', padding: '5px'}}>
                        <button style={{cursor: 'pointer'}} onClick={() => deleteClient(client.id)}>Delete</button>
                        <button style={{cursor: 'pointer'}} onClick={() => updateClientForm(client.id)}>Update</button>
                        </div>
                    </div>
                 </div>
        })
      }
      <div className="clearfix"></div>
        </div>
    );
  }
  
  export default ClientAccountPage;