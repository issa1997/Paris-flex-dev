import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

const ProgressStepper: React.FC<{ activeStep: number }> = (props) => {
  
  return (
    <>
      <Stepper activeStep={props.activeStep}>
        <Step>
          <StepLabel>Details</StepLabel>
        </Step>
        <Step>
          <StepLabel>Extras</StepLabel>
        </Step>
        <Step>
          <StepLabel>Confirm</StepLabel>
        </Step>
      </Stepper>
    </>
  );
};

export default ProgressStepper;
