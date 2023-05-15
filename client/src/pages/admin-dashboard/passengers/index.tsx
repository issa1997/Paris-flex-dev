import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const PassengersTable: React.FC = () => {
  const passengers = [
    {
      firstName: "John",
      lastName: "Doe",
      email: "johndoe@example.com",
      contactNumber: "123-456-7890",
      passengerCount: 2,
      flightNumber: "ABC123",
      flightFrom: "New York",
    },
    {
      firstName: "Jane",
      lastName: "Smith",
      email: "janesmith@example.com",
      contactNumber: "987-654-3210",
      passengerCount: 1,
      flightNumber: "DEF456",
      flightFrom: "San Francisco",
    },
    {
      firstName: "Bob",
      lastName: "Johnson",
      email: "bobjohnson@example.com",
      contactNumber: "555-555-5555",
      passengerCount: 4,
      flightNumber: "GHI789",
      flightFrom: "Chicago",
    },
  ];

  return (
    <div style={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Paris Flex
        </Typography>
        <Button color="inherit" component={Link} to="/admin/rates">
          Rates
        </Button>
        <Button color="inherit" component={Link} to="/admin/bookings">
          Bookings
        </Button>
        <Button color="inherit" component={Link} to="/admin/passengers">
          Passengers
        </Button>
      </Toolbar>
    </AppBar>
    <Box sx={{ maxWidth: "100%", margin: "8%" }}>
      <Typography variant="h3" style={{ flexGrow: 1, textAlign: "center" }}>
        Passengers
      </Typography>
      <TableContainer component={Paper}>
        <Table className={""} aria-label="rates table">
          <TableHead>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Contact Number</TableCell>
              <TableCell>Passenger Count</TableCell>
              <TableCell>Flight/Train Number</TableCell>
              <TableCell>Flight/Train From</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {passengers.map((row) => (
              <TableRow key={row.firstName}>
                <TableCell component="th" scope="row">
                  {row.firstName}
                </TableCell>
                <TableCell>{row.lastName}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.contactNumber}</TableCell>
                <TableCell>{row.passengerCount}</TableCell>
                <TableCell>{row.flightNumber}</TableCell>
                <TableCell>{row.flightFrom}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </Box>
      </div>
  );
};
export default PassengersTable;
