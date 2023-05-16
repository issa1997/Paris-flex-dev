import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { ReactComponent as Details } from "../../assets/icons/details.svg";
import { ReactComponent as Extras } from "../../assets/icons/extras-step.svg";
import { ReactComponent as ExtrasWhite } from "../../assets/icons/extra-white.svg";
import { ReactComponent as ConfirmWhite } from "../../assets/icons/confirm-white.svg";
import { ReactComponent as Confirm } from "../../assets/icons/confirm.svg";
import "./index.css";
import { Grid } from "@mui/material";
const ProgressStepper: React.FC<{ activeStep: number }> = (props: any) => {
  return (
    <Grid
      xs={12}
      sm={12}
      style={{
        background: "#F5F6FF",
        textAlign: "center",
        marginBottom: "2%",
      }}
    >
      <Stepper
        activeStep={props.activeStep}
        variant="outlined"
        className="stepper-class-style"
      >
        <Step>
          <StepLabel StepIconComponent={Details}>Details</StepLabel>
        </Step>
        <Step>
          <StepLabel
            StepIconComponent={props.activeStep > 0 ? Extras : ExtrasWhite}
          >
            Extras
          </StepLabel>
        </Step>
        <Step>
          <StepLabel
            StepIconComponent={props.activeStep > 1 ? Confirm : ConfirmWhite}
          >
            Confirm
          </StepLabel>
        </Step>
      </Stepper>
    </Grid>
  );
};

export default ProgressStepper;
