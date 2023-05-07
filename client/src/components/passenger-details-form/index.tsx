import React from "react";
import {
  Box,
  Button,
  Card,
  Grid,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import { ReactComponent as PassengersDetails } from "../../assets/icons/carbon_passenger-plus.svg";
import { ReactComponent as RequiredSign } from "../../assets/icons/coolicon.svg";
import { ReactComponent as TriangleIcon } from "../../assets/icons/triangle-icon.svg";
import { ReactComponent as ArrowIcon } from "../../assets/icons/arrow.svg";

import "./index.css";

const PassengerDetails: React.FC<{
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}> = (props) => {
  return (
    <>
      <Card className="passenger-detail-card-style">
        <Typography gutterBottom variant="h5" className="heading-style">
          Passenger Details
          <span>
            <PassengersDetails className="icon-styles" />
          </span>
        </Typography>
        <Box component="form" autoComplete="off">
          <Grid container className="form-styles">
            <Grid xs={12} md={6} sm={6} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <div>
                <InputLabel>
                  Name{" "}
                  <span>
                    <RequiredSign />
                  </span>
                </InputLabel>
                <TextField id="outlined-required" className="input-box" />
              </div>
              <div>
                <InputLabel>
                  Email{" "}
                  <span>
                    <RequiredSign />
                  </span>
                </InputLabel>
                <TextField id="outlined-required" />
                <p className="warning-text" style={{marginBottom: '6%'}}>
                  <TriangleIcon /> We will send you booking details here
                </p>
              </div>
              <div>
                <InputLabel>
                  Flight/ train number{" "}
                  <span>
                    <RequiredSign />
                  </span>
                </InputLabel>
                <TextField id="outlined-required" />
              </div>
            </Grid>
            <Grid xs={6}>
              <div>
                <InputLabel>
                  Last Name{" "}
                  <span>
                    <RequiredSign />
                  </span>
                </InputLabel>
                <TextField id="outlined-required" />
              </div>
              <div>
                <InputLabel>
                  Contact Number{" "}
                  <span>
                    <RequiredSign />
                  </span>
                </InputLabel>
                <TextField id="outlined-required" />
                <p className="warning-text" style={{marginBottom: '2%'}}>
                  <TriangleIcon /> Please provide us a working phone number in
                  France. We will contact you using WhatsApp
                </p>
              </div>
              <div >
                <InputLabel>
                  Flight/ train from{"  "}
                  <span>
                    <RequiredSign />
                  </span>
                </InputLabel>
                <TextField id="outlined-required" />
              </div>
            </Grid>
          </Grid>
          <Button className="submit-styles" onClick={props.onClick}>
            Continue booking {"  "}
            <ArrowIcon className="submit-icon-style"/>
          </Button>
        </Box>
      </Card>
    </>
  );
};
export default PassengerDetails;
