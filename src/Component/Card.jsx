// import * as React from 'react';
// import { useState } from 'react';
// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
// import Slide from '@mui/material/Slide';
// import TextField from '@mui/material/TextField';

// const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });

// export default function AlertDialogSlide() {
//   const [open, setOpen] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

  
//   const [ inp , setInp ] = useState ("")

//   return (
//     <React.Fragment>
//       <Button size='medium' variant="outlined" onClick={handleClickOpen}>
//        + New 
//       </Button>
//       <Dialog
//         open={open}
//         TransitionComponent={Transition}
//         keepMounted
//         onClose={handleClose}
//         aria-describedby="alert-dialog-slide-description"
//       >
//         <DialogTitle>{"Use Google's location service?"}</DialogTitle>
//         <DialogContent>
//           <DialogContentText id="alert-dialog-slide-description">
//           <TextField id="standard-basic" label="Standard" variant="standard" value={inp} onChange={ (event) => setInp ( event . target . value ) } />
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>Cancel</Button>
//           <Button onClick={addUser}>Add</Button>
//         </DialogActions>
//       </Dialog>
//     </React.Fragment>
//   );

