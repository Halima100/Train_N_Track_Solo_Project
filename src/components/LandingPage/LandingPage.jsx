import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
function LandingPage() {
  const [heading, setHeading] = useState('Welcome');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  return (
    <div className="container">
      <h2>{heading}</h2>

      <div className="grid">
        <div className="grid-col grid-col_8">
        
        </div>
        <div className="grid-col grid-col_4">
      
          <RegisterForm />

          <center>  
            <Stack direction="row" spacing={2} sx={{ marginBottom: '1rem' }}>
            <h4>Already a Member?</h4>
            <Button className="btn btn_sizeSm" variant="contained"  onClick={onLogin}>
              Login
            </Button> 
            </Stack>
          </center>
         
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
