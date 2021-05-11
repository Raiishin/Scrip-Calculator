import React from "react";
const { Button, Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText } = require("@material-ui/core");

export function ErrorDialog(props) {
  return (
    <Dialog
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"Missing Input"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">{props.errorMessage}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose} color="primary" autoFocus>
          Okay
        </Button>
      </DialogActions>
    </Dialog>
  );
}
