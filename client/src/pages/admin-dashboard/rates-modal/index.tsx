import { Button, Grid, Modal, TextField } from "@mui/material";
import React from "react";
interface AddBookingModalType {
  isModalVisible: boolean;
  onClose: any;
}
const AddRatesModal: React.FC<AddBookingModalType> = (props) => {
  return (
    <Modal
      open={props.isModalVisible}
      onClose={props.onClose}
      sx={{
        display: "flex",
        width: "auto",
        alignItems: "center",
        justifyContent: "center",
        margin: "8%",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          padding: "1rem",
          borderRadius: "4px",
          outline: "none",
        }}
      >
        <h2>Add Rates</h2>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6}>
            <TextField label="From Location" sx={{ width: "64%" }} />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <TextField label="To Location" sx={{ width: "64%" }} />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <TextField label="Passenger Count" sx={{ width: "64%" }} />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <TextField label="Package Name" sx={{ width: "64%" }} />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <TextField label="Rate" sx={{ width: "64%" }} />
          </Grid>
        </Grid>
        <Button
          variant="contained"
          color="primary"
          style={{ marginRight: "0.5rem" }}
        >
          Add
        </Button>
        <Button variant="contained">Cancel</Button>
      </div>
    </Modal>
  );
};
export default AddRatesModal;
