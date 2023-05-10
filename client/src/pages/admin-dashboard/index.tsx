import React from "react";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";

const AdminDashboard: React.FC = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Rates
            </Typography>
            <Button color="inherit">Add Rates</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default AdminDashboard;
