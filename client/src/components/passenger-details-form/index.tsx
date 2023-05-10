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
import { toast, ToastContainer } from "react-toastify";
import "./index.css";
import {
  PassengerDetailsType,
  createPassenger,
} from "../../services/passengers-details";
import "react-toastify/dist/ReactToastify.min.css";
import _ from "lodash";
import { AxiosResponse } from "axios";

const PassengerDetails: React.FC<{
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
  activeStep: number;
  setPassengerId: React.Dispatch<React.SetStateAction<number>>;
  }> = (props) => {
  const handleAddPassenger = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const passenger: Omit<PassengerDetailsType, "id" | "isDelete"> = {
      name: String(formData.get("txtName")),
      lastName: String(formData.get("txtLastName")),
      email: String(formData.get("txtEmail")),
      passengerCount: 0,
      phone: String(formData.get("txtContactNumber")),
      travelFrom: String(formData.get("txtFlightNumber")),
      travelNumber: String(formData.get("txtFlightFrom")),
    };
    if (!_.isEmpty(passenger) || !_.isUndefined(passenger)) {
      createPassenger(passenger)
        .then((response: AxiosResponse) => {
          const restrcutredResponse: any = response.data;
          toast.success(restrcutredResponse.message, {
            position: "bottom-right",
          });
          props.setActiveStep(props.activeStep + 1);
          props.setPassengerId(restrcutredResponse.data.id);
        })
        .catch((error: any) => {
          const response: any = error.response.data;
          toast.error(response.message, { position: "bottom-right" });
        });
    }
  };

  return (
    <>
      <ToastContainer />
      <Card className="passenger-detail-card-style">
        <Typography gutterBottom variant="h5" className="heading-style">
          Passenger Details
          <span>
            <PassengersDetails className="icon-styles" />
          </span>
        </Typography>
        <Box component="form" autoComplete="off" onSubmit={handleAddPassenger}>
          <Grid container className="form-styles">
            <Grid xs={12} md={6} sm={6} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <div>
                <InputLabel>
                  Name{" "}
                  <span>
                    <RequiredSign />
                  </span>
                </InputLabel>
                <TextField id="txtName" name="txtName" className="input-box" />
              </div>
              <div>
                <InputLabel>
                  Email{" "}
                  <span>
                    <RequiredSign />
                  </span>
                </InputLabel>
                <TextField id="outlined-required" />
                <p className="warning-text" style={{ marginBottom: "6%" }}>
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
                <TextField id="txtFlightNumber" name="txtFlightNumber" />
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
                <TextField id="txtLastName" name="txtLastName" />
              </div>
              <div>
                <InputLabel>
                  Contact Number{" "}
                  <span>
                    <RequiredSign />
                  </span>
                </InputLabel>
                <TextField id="outlined-required" />
                <p className="warning-text" style={{ marginBottom: "2%" }}>
                  <TriangleIcon /> Please provide us a working phone number in
                  France. We will contact you using WhatsApp
                </p>
              </div>
              <div>
                <InputLabel>
                  Flight/ train from{"  "}
                  <span>
                    <RequiredSign />
                  </span>
                </InputLabel>
                <TextField id="txtFlightFrom" name="txtFlightFrom" />
              </div>
            </Grid>
            <Button className="submit-styles" type="submit">
              Continue booking {"  "}
              <ArrowIcon className="submit-icon-style" />
            </Button>
          </Grid>
        </Box>
      </Card>
    </>
  );
};
export default PassengerDetails;
