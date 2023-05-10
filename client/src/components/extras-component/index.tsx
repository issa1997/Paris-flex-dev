import React from "react";
import "./index.css";
import {
  Card,
  Typography,
  Box,
  Grid,
  InputLabel,
  Button,
  Fab,
  Stack,
} from "@mui/material";
import { ReactComponent as Extras } from "../../assets/icons/extras.svg";
import { ReactComponent as RequiredSign } from "../../assets/icons/coolicon.svg";
import { ReactComponent as ArrowIcon } from "../../assets/icons/arrow.svg";
import { ReactComponent as BabySeats } from "../../assets/icons/toddler-1.svg";
import { ReactComponent as Booster } from "../../assets/icons/seats-one.svg";
import { ReactComponent as FreeTag } from "../../assets/icons/free-tag.svg";
import { ReactComponent as Add } from "../../assets/icons/add.svg";
import { ReactComponent as Minus } from "../../assets/icons/minus.svg";
import {
  PassengerDetailExtrasType,
  createPassengerExtra,
} from "../../services/passengers-detail-extras";
import _ from "lodash";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { AxiosResponse } from "axios";

const ExtrasComponent: React.FC<{
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
  activeStep: number;
  passengerId: number;
}> = (props) => {
  const handleAddPassengerExtra = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    // todo - if no extras handle the response

    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const passengerExtra: Omit<PassengerDetailExtrasType, "id" | "isDelete"> = {
      extrasDescription: String(formData.get("txtExtraDescription")),
      boosterSeats: 0,
      childSeats: 0,
      passengerId: props.passengerId,
    };
    if (!_.isEmpty(passengerExtra) || !_.isUndefined(passengerExtra)) {
      createPassengerExtra(passengerExtra)
        .then((response: AxiosResponse) => {
          const restrcutredResponse: any = response.data;
          toast.success(restrcutredResponse.message, {
            position: "bottom-right",
          });
          // props.setActiveStep(props.activeStep + 1);
          // props.setPassengerId(restrcutredResponse.data.id);
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
      <Card className="passenger-detail-card-style-extras">
        <Typography gutterBottom variant="h5" className="heading-style">
          Extras
          <span>
            <Extras className="icon-styles" />
          </span>
        </Typography>
        <Box
          component="form"
          autoComplete="off"
          onSubmit={handleAddPassengerExtra}
        >
          <Grid container className="form-styles">
            <Grid xs={6} md={6} sm={6} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <div>
                <InputLabel>
                  Note for chauffeur{" "}
                  <span>
                    <RequiredSign />
                  </span>
                </InputLabel>
                <textarea
                  id="txtExtraDescription"
                  name="txtExtraDescription"
                  className="input-bx"
                />
              </div>
            </Grid>
            <Grid xs={6} className="row-style">
              <Box className="free-seats-styles">
                <Stack
                  direction="row"
                  spacing={1}
                  justifyContent="center"
                  alignItems="center"
                >
                  <BabySeats className="seating-icon-style" />
                  <FreeTag />
                  <span className="seats-text">Baby Seats</span>
                  <Minus />
                  <span className="seats-number">5</span>
                  <Add />
                </Stack>
              </Box>
              <Box className="free-seats-styles">
                <Stack
                  direction="row"
                  spacing={1}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Booster className="seating-icon-style" />
                  <FreeTag />
                  <span className="seats-text">Booster Seats</span>
                  <Minus />
                  <span className="seats-number">5</span>
                  <Add />
                </Stack>
              </Box>
            </Grid>
          </Grid>
          <Button className="submit-styles" type="submit">
            Continue booking {"  "}
            <ArrowIcon className="submit-icon-style" />
          </Button>
        </Box>
      </Card>
    </>
  );
};
export default ExtrasComponent;
