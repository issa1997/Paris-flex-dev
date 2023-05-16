import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ReactComponent as Edit } from "../../../assets/icons/edit.svg";
import { ReactComponent as Delete } from "../../../assets/icons/delete.svg";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import AddBookingModal from "../booking-modal";
import { Link } from "react-router-dom";

const BookingsTable: React.FC = () => {
  const [editModal, setEditModal] = useState(false);
  const handleClose = () => {
    setEditModal(false);
  };
  const rows = [
    {
      PickupLocation: "Location A",
      DropOffLocation: "Location B",
      PassengerId: 1,
      PickupDate: "2023-05-09",
      PickupTime: "12:00",
      RateId: 1234,
      TripType: "One-way",
      LuggagePieces: 2,
      BookingRefId: "ABCD1234",
    },
    {
      PickupLocation: "Location C",
      DropOffLocation: "Location D",
      PassengerId: 2,
      PickupDate: "2023-05-10",
      PickupTime: "14:00",
      RateId: 5678,
      TripType: "Round-trip",
      LuggagePieces: 1,
      BookingRefId: "EFGH5678",
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
          Bookings
        </Typography>
        <Button
          style={{ float: "right", background: "#341EA0", color: "white" }}
          onClick={() => setEditModal(true)}
        >
          Add Booking
        </Button>
        <TableContainer component={Paper}>
          <Table className={""} aria-label="rates table">
            <TableHead>
              <TableRow>
                <TableCell>Pickup Location</TableCell>
                <TableCell>Drop-off Location</TableCell>
                <TableCell>Passenger ID</TableCell>
                <TableCell>Pickup Date</TableCell>
                <TableCell>Pickup Time</TableCell>
                <TableCell>Rate ID</TableCell>
                <TableCell>Trip Type</TableCell>
                <TableCell>Luggage Pieces</TableCell>
                <TableCell>Booking Ref ID</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.RateId}>
                  <TableCell>{row.PickupLocation}</TableCell>
                  <TableCell>{row.DropOffLocation}</TableCell>
                  <TableCell>{row.PassengerId}</TableCell>
                  <TableCell>{row.PickupDate}</TableCell>
                  <TableCell>{row.PickupTime}</TableCell>
                  <TableCell>{row.RateId}</TableCell>
                  <TableCell>{row.TripType}</TableCell>
                  <TableCell>{row.LuggagePieces}</TableCell>
                  <TableCell>{row.BookingRefId}</TableCell>
                  <TableCell>
                    <Delete />
                    <Edit />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <AddBookingModal isModalVisible={editModal} onClose={handleClose} />
      </Box>
    </div>
  );
};
export default BookingsTable;
