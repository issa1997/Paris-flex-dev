import { Button, Modal, TextField } from "@mui/material";
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
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          padding: "1rem",
          borderRadius: "4px",
          outline: "none",
        }}
      >
        <h2>Add Booking</h2>
        <TextField label="Pickup Location" />
        <TextField label="DropOff Location" />
        <TextField label="Passenger ID" />
        <TextField label="Pickup Date" />
        <TextField label="Pickup Time" />
        <TextField label="Rate ID" />
        <TextField label="Trip Type" />
        <TextField label="Luggage Pieces" />
        <TextField label="Booking Ref ID" />
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
export default AddBookingModal;
