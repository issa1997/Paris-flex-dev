import React from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  AppBar,
  Typography,
  Button,
  Toolbar,
  Paper,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import NavigationBar from "../navigation-bar";
const BookingSPassengrsSummary = () => {
  const data = [
    {
      id: 1,
      name: "John Doe",
      pickupLocation: "ABC Street",
      dropLocation: "XYZ Street",
      passengerCount: 2,
      pickupDate: "2023-05-20",
      pickupTime: "10:00 AM",
      luggage: "2 bags",
      babySeats: 1,
      boosterSeats: 0,
      notesForChauffeur: "No special instructions",
      pickupLandmark: "Near City Park",
    },
  ];

  return (
    <div style={{ flexGrow: 1 }}>
      <NavigationBar />
      <Box sx={{ maxWidth: "100%", margin: "8%" }}>
        <Typography variant="h3" style={{ flexGrow: 1, textAlign: "center" }}>
          Booking/ Passengers Summary
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Pickup Location</TableCell>
                <TableCell>Drop Location</TableCell>
                <TableCell>Passenger Count</TableCell>
                <TableCell>Pickup Date</TableCell>
                <TableCell>Pickup Time</TableCell>
                <TableCell>Luggage</TableCell>
                <TableCell>Baby Seats</TableCell>
                <TableCell>Booster Seats</TableCell>
                <TableCell>Notes for Chauffeur</TableCell>
                <TableCell>Pickup Landmark</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.pickupLocation}</TableCell>
                  <TableCell>{row.dropLocation}</TableCell>
                  <TableCell>{row.passengerCount}</TableCell>
                  <TableCell>{row.pickupDate}</TableCell>
                  <TableCell>{row.pickupTime}</TableCell>
                  <TableCell>{row.luggage}</TableCell>
                  <TableCell>{row.babySeats}</TableCell>
                  <TableCell>{row.boosterSeats}</TableCell>
                  <TableCell>{row.notesForChauffeur}</TableCell>
                  <TableCell>{row.pickupLandmark}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
};

export default BookingSPassengrsSummary;
