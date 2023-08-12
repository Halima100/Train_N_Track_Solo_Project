import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import { useSelector} from 'react-redux';


function ImageDialog(props) {
  const { onClose, selectedValue, open, onClientImage } = props;
  const setImage = useSelector((store) => store.imageReducer);

  const handleClose = () => {
    onClose(selectedValue);
    
  };

  const handleListItemClick = (item) => {
    onClose(item);
    onClientImage(item);
    console.log(item)
  };
  console.log("image", setImage)

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Set Client Image</DialogTitle>
      <List sx={{ pt: 0 }}>
        {setImage.map((item) => (
          <ListItem disableGutters key={item.client}>
            <ListItemButton onClick={() => handleListItemClick(item)} key={item}>
             <ListItemAvatar>
                <Avatar sx={{ width: 70, height: 70, bgcolor: blue[100], color: blue[600] }}>
                  <img src ={item.client_image} />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={item.text} sx={{ ml: 2 }}  />
              <ListItemText primary="Choose Image" />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disableGutters>
        </ListItem>
      </List>
    </Dialog>
  );
}

ImageDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  onClientImage: PropTypes.func.isRequired,
//   selectedValue: PropTypes.string.isRequired,
};

export default ImageDialog;