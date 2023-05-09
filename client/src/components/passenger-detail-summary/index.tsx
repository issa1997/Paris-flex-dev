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

const PassengerDetailSummary: React.FC<{
  passengerCount: string | null;
  luggagePieces: string | null;
  bookingPrice: number;
}> = (props) => {
  return (
    <Card className="card-styles">
      <div className="grid">
        <div className="col-main">
          <div className="row-1">
            <div className="passenger-div-styles">
              <Badge className="box-styles passengers">
                <Passengers className="icon-styles" />{" "}
                <span className="text-styles">{`${props.passengerCount} Passengers`}</span>
              </Badge>
              <Badge className="box-styles suitcase">
                <Suitcase className="icon-styles" />{" "}
                <span className="text-styles">{`${props.luggagePieces} Suitcases`}</span>
              </Badge>
            </div>
          </div>
          <div className="row-2">
            <div className="col-sub-1">
              <List>
                <ListItem className="list-spacing">
                  <ListItemButton>
                    <ListItemIcon>
                      <MeetNGreet />
                    </ListItemIcon>
                    <ListItemText primary="Meet & Greet" />
                  </ListItemButton>
                </ListItem>
                <ListItem className="list-spacing">
                  <ListItemButton>
                    <ListItemIcon>
                      <FreeWaiting />
                    </ListItemIcon>
                    <ListItemText primary="Free Waiting" />
                  </ListItemButton>
                </ListItem>
                <ListItem className="list-spacing">
                  <ListItemButton>
                    <ListItemIcon>
                      <HiddenCosts />
                    </ListItemIcon>
                    <ListItemText primary="No Hidden Costs" />
                  </ListItemButton>
                </ListItem>
              </List>
            </div>
            <div className="col-sub-2">
              <List>
                <ListItem className="list-spacing-style">
                  <ListItemButton>
                    <ListItemIcon>
                      <FreePorter />
                    </ListItemIcon>
                    <ListItemText primary="Free Porter" />
                  </ListItemButton>
                </ListItem>
                <ListItem className="list-spacing-style">
                  <ListItemButton>
                    <ListItemIcon>
                      <Seats />
                    </ListItemIcon>
                    <ListItemText primary="Free Baby Seats & Booster Seats" />
                  </ListItemButton>
                </ListItem>
                <ListItem className="list-spacing-style">
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
            </div>
          </div>
        </div>
        <div className="col-side">
          <Box className="price-box">
            <p className="trip-detail-style">Total One-way Price</p>
            <h4 className="trip-price-style">{`€ ${props.bookingPrice}`}</h4>
            <p className="trip-tax-style">All prices include VAT & Fees</p>
          </Box>
        </div>
      </div>
    </Card>
  );
};

export default PassengerDetailSummary;
