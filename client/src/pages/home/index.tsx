import React from "react";
import PassengerDetailSummary from "../../components/passenger-detail-summary";
import { Grid } from "@mui/material";
import PassengerDetails from "../../components/passenger-details-form";
import YourTransfer from "../../components/your-transfer";
import ExtrasComponent from "../../components/extras-component";
import ProgressStepper from "../../components/progress-stepper";
import { useState } from "react";
import "./index.css";
import { getRateFromLocation } from "../../services/rates";
import { AxiosResponse } from "axios";
import "react-toastify/dist/ReactToastify.min.css";
import { toast, ToastContainer } from "react-toastify";
import { ResponseType } from "../../utls/api-adapter";

const RenderStepperComponents: React.FC<{
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
  activeStep: number;
}> = (props) => {
  const [passengerId, setPassengerId] = useState<number>(0);
  switch (props.activeStep) {
    case 0:
      return (
        <PassengerDetails
          setActiveStep={props.setActiveStep}
          activeStep={props.activeStep}
          setPassengerId={setPassengerId}
        />
      );
    case 1:
      return (
        <ExtrasComponent
          setActiveStep={props.setActiveStep}
          activeStep={props.activeStep}
          passengerId={passengerId}
        />
      );
  }
  return <></>;
};

const Home: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const getRatesForLocation = async () => {
    getRateFromLocation()
      .then((response: AxiosResponse) => {
        const restrcutredResponse: ResponseType = response.data;
        if (!_.isEmpty(restrcutredResponse.data)) {
        }
      })
      .catch((error: any) => {
        const response: ResponseType = error.response.data;
        toast.error(response.message, { position: "bottom-right" });
      });
  };
  return (
    <>
      <ToastContainer />
      <div className="home-container">
        <ProgressStepper activeStep={activeStep} />

        <Grid container spacing={2}>
          <Grid item md={8}>
            <PassengerDetailSummary />
            <RenderStepperComponents
              activeStep={activeStep}
              setActiveStep={setActiveStep}
            />
          </Grid>
          <Grid item md={4} order={0}>
            <YourTransfer />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Home;
