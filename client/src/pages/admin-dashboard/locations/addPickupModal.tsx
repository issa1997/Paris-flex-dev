import React from "react";
import { Box, Button, Modal, Grid, InputLabel, TextField } from "@mui/material";

interface PickupLocationsType {
  isModalVisible: boolean;
  onClose: any;
}
const PickupLocationsModal: React.FC<PickupLocationsType> = (props) => {
  return (
    <>
      <Modal
        open={props.isModalVisible}
        onClose={props.onClose}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "5%",
          margiRadius: "10px",
          padding: "10%",
        }}
      >
        <div
          style={{
            backgroundColor: "#fff",
            padding: "1% 4% ",
            borderRadius: "4px",
            outline: "none",
          }}
        >
          <h2>Add Locations</h2>

          <Box component="form" autoComplete="off" style={{ margin: "8%" }}>
            <InputLabel className="label-name" id="select-label">
              Location
            </InputLabel>
            <TextField name="fromLocation" sx={{ width: "100%" }} />

            <div style={{ float: "right", margin: "0 4%", marginBottom:"5%" }}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                style={{ marginRight: "0.5rem" }}
              >
                Add
              </Button>
              <Button variant="contained" onClick={props.onClose}>
                Cancel
              </Button>
            </div>
          </Box>
        </div>
      </Modal>
    </>
  );
};
export default PickupLocationsModal;
