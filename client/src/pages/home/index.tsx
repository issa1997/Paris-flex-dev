import React from "react";
import PassengerDetailSummary from "../../components/passenger-detail-summary";
import { Grid } from "@mui/material";
import PassengerDetails from "../../components/passenger-details-form";
import YourTransfer from "../../components/your-transfer";
import ExtrasComponent from "../../components/extras-component";
import ProgressStepper from "../../components/progress-stepper";
import { useState } from "react";
import "./index.css";
import { Container } from "@mui/system";

const RenderStepperComponents: React.FC<{
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
  activeStep: number;
}> = (props) => {
  switch (props.activeStep) {
    case 0:
      return (
        <PassengerDetails
          onClick={() => props.setActiveStep(props.activeStep + 1)}
        />
      );
    case 1:
      return <ExtrasComponent />;
  }
  return <></>;
};

const Home: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <>
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
