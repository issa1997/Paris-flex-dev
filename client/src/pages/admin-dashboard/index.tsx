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
import { Link, Route, Router, Routes } from "react-router-dom";

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
            component={Link} to="/admin/rates"
          >
            Rates
          </Button>
          <Button
            color="inherit"
            component={Link} to="/admin/bookings"
          >
            Bookings
          </Button>
          <Button
            color="inherit"
            component={Link} to="/admin/passengers"
          >
            Passengers
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default AdminDashboard;
