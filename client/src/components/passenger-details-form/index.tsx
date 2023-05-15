import React from "react";
import { Box, Button, Card, Grid, InputLabel, Typography } from "@mui/material";
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
  setPassengerDetails: React.Dispatch<
    React.SetStateAction<
      Omit<PassengerDetailsType, "id" | "isDelete"> | undefined
    >
  >;
  pasengers: number;
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
      passengerCount: Number(props.pasengers),
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
          props.setPassengerDetails(restrcutredResponse.data);
          console.log(restrcutredResponse.data);
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
      <Card className="passenger-detail-card-style-form">
        <Typography gutterBottom variant="h5" className="heading-style">
          Passenger Details
          <span>
            <PassengersDetails className="icon-styles" />
          </span>
        </Typography>
        <Box component="form" autoComplete="off" onSubmit={handleAddPassenger}>
          <Grid container className="form-styles">
            <Grid item sm={6} xs={12}>
              <InputLabel>
                Name
                <span>
                  <RequiredSign />
                </span>
              </InputLabel>
              <input
                id="txtName"
                name="txtName"
                className="outlined-required"
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <InputLabel>
                Last Name{" "}
                <span>
                  <RequiredSign />
                </span>
              </InputLabel>
              <input
                className="outlined-required"
                id="txtLastName"
                name="txtLastName"
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <InputLabel>
                Email{" "}
                <span>
                  <RequiredSign />
                </span>
              </InputLabel>
              <input className="outlined-required" name="txtEmail" />
              <p className="warning-text" style={{ marginBottom: "6%" }}>
                <TriangleIcon /> We will send you booking details here
              </p>
            </Grid>

            <Grid item sm={6} xs={12}>
              <InputLabel>
                Contact Number{" "}
                <span>
                  <RequiredSign />
                </span>
              </InputLabel>
              <input
                className="outlined-required"
                name="txtContactNumber"
                id="outlined-required"
              />
              <div className="warning-text" style={{ marginBottom: "2%" }}>
                <TriangleIcon />
                Please provide us a working phone number in France. <br />
                We will contact you using WhatsApp
              </div>
            </Grid>
            <Grid item sm={6} xs={12}>
              <InputLabel>
                Flight/ train number{" "}
                <span>
                  <RequiredSign />
                </span>
              </InputLabel>
              <input
                className="outlined-required"
                id="txtFlightNumber"
                name="txtFlightNumber"
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <InputLabel>
                Flight/ train from{"  "}
                <span>
                  <RequiredSign />
                </span>
              </InputLabel>
              <input
                className="outlined-required"
                id="txtFlightFrom"
                name="txtFlightFrom"
              />
            </Grid>
            <Grid item sm={12} xs={12}>
              <Button className="submit-styles-button" type="submit">
                Continue booking {"  "}
                <ArrowIcon className="submit-icon-style" />
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Card>
    </>
  );
};
export default PassengerDetails;
