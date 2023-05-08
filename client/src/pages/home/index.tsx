import React from "react";
import PassengerDetailSummary from "../../components/passenger-detail-summary";
import { Grid } from "@mui/material";
import PassengerDetails from "../../components/passenger-details-form";
import YourTransfer from "../../components/your-transfer";
import ExtrasComponent from "../../components/extras-component";
import ProgressStepper from "../../components/progress-stepper";
import { useState } from "react";

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

  return (
    <>
      <ProgressStepper activeStep={activeStep} />
      <Grid container spacing={3} style={{ padding: "8%" }}>
        <Grid item xs={9}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <PassengerDetailSummary />
            </Grid>
            <Grid item xs={12}>
              <RenderStepperComponents
                activeStep={activeStep}
                setActiveStep={setActiveStep}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <YourTransfer />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
