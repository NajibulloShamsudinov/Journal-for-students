import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

function Modal(props) {
  const { open, handleClose, title, send, user, handleChange, addNewUser } =
    props;
  const { name, age, course, phone } = user;

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          name="name"
          value={name}
          onChange={handleChange}
          label="Name"
          fullWidth
          variant="standard"
        />
        <TextField
          name="age"
          value={age}
          onChange={handleChange}
          label="Age"
          fullWidth
          variant="standard"
        />
        <TextField
          name="course"
          value={course}
          onChange={handleChange}
          label="Course"
          fullWidth
          variant="standard"
        />
        <TextField
          name="phone"
          value={phone}
          onChange={handleChange}
          label="Phone"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={addNewUser}>{send}</Button>
      </DialogActions>
    </Dialog>
  );
}

export default Modal;
