import { Button, Grid, Modal, TextField } from "@mui/material";
import React from "react";
interface AddBookingModalType {
  isModalVisible: boolean;
  onClose: any;
}
const AddBookingModal: React.FC<AddBookingModalType> = (props) => {
  return (
    <Modal
      open={props.isModalVisible}
      onClose={props.onClose}
      sx={{ display: "flex", alignItems: "center", justifyContent: "center", width: "600px" }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          padding: "1rem",
          borderRadius: "4px",
          outline: "none", display: "flex", alignItems: "center", justifyContent: "center"
        }}
      >
        <Grid>
        <h2>Add Booking</h2>
        <Grid container spacing={2} alignItems="center" xs={12} sm={8}>
        
          <Grid item xs={6}>
            <TextField label="Pickup Location" fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField label="DropOff Location" fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Passenger ID" fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Pickup Date" fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Pickup Time" fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Rate ID" fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Trip Type" fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Luggage Pieces" fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Booking Ref ID" fullWidth />
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              style={{ marginRight: "0.5rem" }}
            >
              Add
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained">Cancel</Button>
          </Grid>
          </Grid>
          </Grid>
      </div>
    </Modal>
  );
};
export default AddBookingModal;
