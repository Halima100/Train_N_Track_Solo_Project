import React from 'react';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

function LogOutButton(props) {
  const dispatch = useDispatch();
  return (
    <Stack direction="row" spacing={2} sx={{ marginBottom: '1rem' }}>
    <Button
     variant="contained"
      // This button shows up in multiple locations and is styled differently
      // because it's styled differently depending on where it is used, the className
      // is passed to it from it's parents through React props
      className={props.className}
      onClick={() => dispatch({ type: 'LOGOUT' })}
    >
      Log Out
    </Button>
    </Stack>
  );
}

export default LogOutButton;
