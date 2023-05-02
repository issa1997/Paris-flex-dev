import {
  Badge,
  Card,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
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

const PassengerDetailSummary: React.FC = () => {
  return (
    <Card className="card-styles">
      <Grid container spacing={3}>
        <Grid xs={9}>
          <Badge className="box-styles passengers">
            <Passengers className="icon-styles"/> <span className="text-style">3 Passengers</span>
          </Badge>
          <Badge className="box-styles suitcase">
            <Suitcase className="icon-styles"/> <span className="text-style">3 Suitcases</span>
          </Badge>
          <Grid container spacing={1} className="list-view-styles">
            <Grid xs={5}>
              <List>
                <ListItem className='list-spacing'>
                  <ListItemButton>
                    <ListItemIcon>
                      <MeetNGreet />
                    </ListItemIcon>
                    <ListItemText primary="Meet & Greet" />
                  </ListItemButton>
                </ListItem>
                <ListItem className='list-spacing'>
                  <ListItemButton>
                    <ListItemIcon>
                      <FreeWaiting />
                    </ListItemIcon>
                    <ListItemText primary="Free Waiting" />
                  </ListItemButton>
                </ListItem>
                <ListItem className='list-spacing'>
                  <ListItemButton>
                    <ListItemIcon>
                      <HiddenCosts />
                    </ListItemIcon>
                    <ListItemText primary="No Hidden Costs" />
                  </ListItemButton>
                </ListItem>
              </List>
            </Grid>
            <Grid xs={7}>
              <List>
                <ListItem className='list-spacing-style'>
                  <ListItemButton>
                    <ListItemIcon>
                      <FreePorter />
                    </ListItemIcon>
                    <ListItemText primary="Free Porter" />
                  </ListItemButton>
                </ListItem>
                <ListItem className='list-spacing-style'>
                  <ListItemButton>
                    <ListItemIcon>
                      <Seats />
                    </ListItemIcon>
                    <ListItemText primary="Free Baby Seats & Booster Seats" />
                  </ListItemButton>
                </ListItem>
                <ListItem className='list-spacing-style'>
                  <ListItemButton sx={{ paddingTop: "0px" }}>
                    <ListItemIcon>
                      <FreeCancel />
                    </ListItemIcon>
                    <ListItemText>
                      <p style={{ color: "#4aab3d" }}>Free Cancellation</p>
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Grid>

        <Grid xs={3}>
          <Box className="price-box">
            <p className="trip-detail-style">Total One-way Price</p>
            <h4 className="trip-price-style">€ 185.00</h4>
            <p className="trip-tax-style">All prices include VAT & Fees</p>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
};

export default PassengerDetailSummary;
