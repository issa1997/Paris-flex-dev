import {
  Badge,
  Card,
  Grid,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
} from "@mui/material";
import React from "react";
import "./index.css";
import { ReactComponent as Seats } from "../../assets/icons/seats.svg";
import { ReactComponent as FreeCancel } from "../../assets/icons/free-cancel.svg";
import { ReactComponent as FreePorter } from "../../assets/icons/free-porter.svg";
import { ReactComponent as FreeWaiting } from "../../assets/icons/free-waiting.svg";
import { ReactComponent as HiddenCosts } from "../../assets/icons/hidden-costs.svg";
import { ReactComponent as MeetNGreet } from "../../assets/icons/meet-n-greet.svg";
import { ReactComponent as Passengers } from "../../assets/icons/passengers.svg";
import { ReactComponent as Suitcase } from "../../assets/icons/suitcase.svg";
import { Box } from "@mui/system";

const PassengerDetailSummary: React.FC<{
  passengerCount: string | null;
  luggagePieces: string | null;
  bookingPrice: number;
}> = (props) => {
  return (
    <Card className="card-styles">
      <Grid container spacing={1}>
        <Grid item md={9}>
          <Grid container spacing={0} direction="column">
            <Grid item className="button-box-style">
              {" "}
              <Badge className="box-styles passengers">
                <Passengers className="icon-styles" />{" "}
                <span className="text-styles">{`${props.passengerCount} Passengers`}</span>
              </Badge>
              <Badge className="box-styles suitcase">
                <Suitcase className="icon-styles" />{" "}
                <span className="text-styles">{`${props.luggagePieces} Suitcases`}</span>
              </Badge>
            </Grid>
            <Grid item xs={12} md={6}>
              <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
                <Stack direction={{ xs: "column" }} spacing={0}>
                  <ListItemButton className="list-button-style">
                    <MeetNGreet className="stack-icon" />
                    <ListItemText primary="Meet & Greet" />
                  </ListItemButton>
                  <ListItemButton>
                    <FreeWaiting className="stack-icon" />
                    <ListItemText primary="Free Waiting" />
                  </ListItemButton>
                  <ListItemButton className="list-button-style">
                    <HiddenCosts className="stack-icon" />
                    <ListItemText primary="No Hidden Costs" />
                  </ListItemButton>
                </Stack>
                <Stack direction={{ xs: "column" }} spacing={0}>
                  {" "}
                  <ListItemButton className="list-button-style">
                    <FreePorter className="stack-icon" />
                    <ListItemText primary="Free Porter" />
                  </ListItemButton>{" "}
                  <ListItemButton className="list-button-style-seats">
                    <Seats className="stack-icon" />
                    <ListItemText primary="Free Baby Seats & Booster Seats" />
                  </ListItemButton>
                  <ListItemButton
                    sx={{ paddingTop: "0px" }}
                    className="list-button-style"
                  >
                    <FreeCancel className="stack-icon" />
                    <ListItemText>
                      <span style={{ color: "#4aab3d" }}>
                        Free Cancellation
                      </span>
                    </ListItemText>
                  </ListItemButton>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={3}>
          {" "}
          <Box className="price-box">
            <p className="trip-detail-style">Total One-way Price</p>
            <h4 className="trip-price-style">{`€ ${props.bookingPrice}`}</h4>
            <p className="trip-tax-style">All prices include VAT & Fees</p>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
};

export default PassengerDetailSummary;
