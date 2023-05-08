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
      <div className="step-back">
        <ProgressStepper activeStep={activeStep} />
      </div>
      <div className="grid-container">
        <div className="column1">
          <div className="row1">
            <PassengerDetailSummary />
          </div>
          <div className="row2">
            <RenderStepperComponents
              activeStep={activeStep}
              setActiveStep={setActiveStep}
            />
          </div>
        </div>
        <div className="column2">
          <YourTransfer />
        </div>
      </div>
    </>
  );
};

export default Home;
