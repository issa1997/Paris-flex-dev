import React from "react";
import PassengerDetailSummary from "../../components/passenger-detail-summary";
import { Grid } from "@mui/material";
import PassengerDetails from "../../components/passenger-details-form";
import YourTransfer from "../../components/your-transfer";
import ExtrasComponent from "../../components/extras-component";
import ProgressStepper from "../../components/progress-stepper";
import { useState } from "react";
import "./index.css";

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
      <div style={{background: '#F5F6FF'}}>
        <ProgressStepper activeStep={activeStep} />
      </div>

      <div style={{ width: "1000px", padding: "8% 15%" }}>
        <Grid container spacing={0}>
          <Grid item xs={12} md={8} sm={8}>
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
          <Grid item xs={12} md={4} sm={4}>
            <YourTransfer />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Home;
