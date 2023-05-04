import React, { useState } from "react";
import "./index.css";
import { Box, Grid, Modal, Typography } from "@mui/material";
import { ReactComponent as Cross } from "../../assets/icons/Union.svg";

interface ConfirmationModalType {
  isModalVisible: boolean;
  onClose: any;
}

const ConfirmationModal: React.FC<ConfirmationModalType> = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Modal
      open={props.isModalVisible}
      onClose={props.onClose}
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Box className="modal-styles">
        <div style={{ float: "right" }}>
          {" "}
          <Cross />
        </div>
        <Grid container spacing={2}>
          <Grid item xs={4}></Grid>
          <Grid item xs={8}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              className="modal-heading"
            >
              Success
            </Typography>
            <Typography
              id="modal-modal-description"
              sx={{ mt: 2 }}
              className="modal-content"
            >
              We'll contact you soon. Check your inbox and spam folder within 24
              hours.
            </Typography>
            <Typography
              id="modal-modal-description"
              sx={{ mt: 2 }}
              className="modal-content"
            >
              {" "}
              If no email received, please contact us directly.
            </Typography>
            <Typography
              id="modal-modal-description"
              sx={{ mt: 2 }}
              className="modal-content"
            >
              We appreciate your interest and look forward to connecting with
              you soon.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};
export default ConfirmationModal;
