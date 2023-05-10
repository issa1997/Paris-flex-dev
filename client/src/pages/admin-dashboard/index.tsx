import React, { useState } from "react";
import { makeStyles } from "@mui/material";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import RatesComponent from "./rates/index";
import BookingsComponent from "./bookings/index";
import Passengers from "./passengers/index";
import PassengersTable from "./passengers/index";

const AdminDashboard = () => {
  const [activeComponent, setActiveComponent] = useState(null);

  const handleMenuItemClick = (component: any) => {
    setActiveComponent(component);
  };

  return (
    <div style={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Paris Flex
          </Typography>
          <Button
            color="inherit"
            onClick={() => handleMenuItemClick(<RatesComponent />)}
          >
            Rates
          </Button>
          <Button
            color="inherit"
            onClick={() => handleMenuItemClick(<BookingsComponent />)}
          >
            Bookings
          </Button>
          <Button
            color="inherit"
            onClick={() => handleMenuItemClick(<PassengersTable />)}
          >
            Passengers
          </Button>
        </Toolbar>
      </AppBar>
      <div style={{ padding: "20px" }}>{activeComponent}</div>
    </div>
  );
};

export default AdminDashboard;
