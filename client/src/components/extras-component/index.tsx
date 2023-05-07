import React from "react";
import "./index.css";
import {
  Card,
  Typography,
  Box,
  Grid,
  InputLabel,
  Button,
} from "@mui/material";
import { ReactComponent as Extras } from "../../assets/icons/extras.svg";
import { ReactComponent as RequiredSign } from "../../assets/icons/coolicon.svg";
import { ReactComponent as ArrowIcon } from "../../assets/icons/arrow.svg";
import { ReactComponent as BabySeats } from "../../assets/icons/toddler-1.svg";
import { ReactComponent as Booster } from "../../assets/icons/seat.svg";
import { ReactComponent as FreeTag } from "../../assets/icons/free-tag.svg";

const ExtrasComponent: React.FC = () => {
  return (
    <>
      <Card className="passenger-detail-card-style">
        <Typography gutterBottom variant="h5" className="heading-style">
          Extras
          <span>
            <Extras className="icon-styles" />
          </span>
        </Typography>
        <Box component="form" autoComplete="off">
          <Grid container className="form-styles">
            <Grid xs={6} md={6} sm={6} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <div>
                <InputLabel>
                  Note for chauffeur{" "}
                  <span>
                    <RequiredSign />
                  </span>
                </InputLabel>
                <input id="outlined-required" className="input-bx" />
              </div>
            </Grid>
            <Grid xs={6} className="row-style">
              <Grid item xs={12}>
                <Box className="free-seats-styles">
                  <BabySeats /><FreeTag className="free-tag-style"/><span>Baby Seats</span>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box className="free-seats-styles">
                  <Booster/><span><FreeTag/></span> <span>Booster Seats</span>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Button className="submit-styles">
            Continue booking {"  "}
            <ArrowIcon />
          </Button>
        </Box>
      </Card>
    </>
  );
};
export default ExtrasComponent;
