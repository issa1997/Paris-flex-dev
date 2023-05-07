import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { ReactComponent as Details } from "../../assets/icons/details.svg";
import { ReactComponent as Extras } from "../../assets/icons/extras-step.svg";
import { ReactComponent as Confirm } from "../../assets/icons/confirm.svg";

const ProgressStepper: React.FC<{ activeStep: number }> = (props) => {
  
  return (
    <>
      <Stepper activeStep={props.activeStep}>
        <Step>
          <StepLabel StepIconComponent={Details}>Details</StepLabel>
        </Step>
        <Step>
          <StepLabel StepIconComponent={Extras}>Extras</StepLabel>
        </Step>
        <Step>
          <StepLabel StepIconComponent={Confirm}>Confirm</StepLabel>
        </Step>
      </Stepper>
    </>
  );
};

export default ProgressStepper;
