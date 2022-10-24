import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch , useSelector } from 'react-redux';
import { DeleteSearch } from '../../../React-Redux/action/DeleteSearch/deleteSearch.action';

export default function AlertDialog(props) {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  const UserInfo = useSelector((state) => state.User)
  const {users} = UserInfo 

        // commeted Local Storage Use
// const userInfo = JSON.parse(localStorage.getItem('userId'))
// const {user } = userInfo;


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const deleteSearch = (Search) => {
    console.log(Search,'asd');
    dispatch(DeleteSearch(Search,users))
    setOpen(false);
 }

  return (
    <div>
      <DeleteIcon className="pointer" onClick={handleClickOpen} />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Delete
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete the map
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">Cancel</Button>
          <Button  onClick={() => deleteSearch(props.data)} color="warning" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
