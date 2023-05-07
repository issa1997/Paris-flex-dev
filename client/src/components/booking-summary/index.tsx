import { Box, Card, Grid, Typography } from "@mui/material";
import React from "react";
import { ReactComponent as HealthIcon } from "../../assets/icons/healthicons_travel-alt-outline.svg";
import "./index.css";
import { ReactComponent as PassengersDetails } from "../../assets/icons/passenger.svg";
import { ReactComponent as Extras } from "../../assets/icons/extras.svg";
import { ReactComponent as BabySeats } from "../../assets/icons/toddler-1.svg";
import { ReactComponent as Booster } from "../../assets/icons/seat.svg";
import { ReactComponent as FreeTag } from "../../assets/icons/free-tag.svg";
const BookingSummaryComponent: React.FC = () => {
  return (
    <>
      <Card className="booking-detail-card-style">
        <Typography gutterBottom variant="h5" className="heading-style">
          <span>
            <HealthIcon className="health-icon-styles" />
          </span>
          BOOKING SUMMARY
        </Typography>
        <Typography gutterBottom variant="h5" className="sub-heading-style">
          Passenger Details
          <span>
            <PassengersDetails className="icon-styles" />
          </span>
        </Typography>
        <Grid container spacing={3} className="grid-space">
          <Grid item xs={4}>
            <Typography variant="h6" className="data-heading">
              Name
            </Typography>
            <Typography className="data-heading-item">
              Malisha Ponweera
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h6" className="data-heading">
              Email
            </Typography>
            <Typography className="data-heading-item">
              malishaponweera@gmail.com
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h6" className="data-heading">
              Contact Number
            </Typography>
            <Typography className="data-heading-item">
              +33 715 125 148
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h6" className="data-heading">
              Flight/Train Number
            </Typography>
            <Typography className="data-heading-item">AF165</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h6" className="data-heading">
              Flight/Train from
            </Typography>
            <Typography className="data-heading-item">Spain</Typography>
          </Grid>
          <Grid item xs={4}></Grid>
        </Grid>
        <Typography gutterBottom variant="h5" className="sub-heading-style">
          Extras
          <span>
            <Extras className="icon-styles" />
          </span>
        </Typography>
        <Grid container spacing={2} className="grid-space">
          <Grid item  xs={6}><Typography variant="h6" className="data-heading">
            Notes for chauffeur
            </Typography>
            <Typography className="data-heading-item">1 bottle of whiskey/ 1 cigarette pack please</Typography>
          </Grid>
          <Grid item xs={6} container direction="column" spacing={2}>
            
            <Grid item >
                <Box className="free-seats-styles">
                  <BabySeats /><FreeTag className="free-tag-style"/><span>Baby Seats</span>
                </Box>
              </Grid>
              <Grid item  >
                <Box className="free-seats-styles">
                  <Booster/><span><FreeTag/></span> <span>Booster Seats</span>
                </Box>
              </Grid>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};
export default BookingSummaryComponent;
