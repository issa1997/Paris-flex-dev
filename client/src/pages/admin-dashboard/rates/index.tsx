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
import { Link } from "react-router-dom";
import AddRatesModal from "../rates-modal";
import NavigationBar from "../navigation-bar";

const RatesTable: React.FC = () => {
  const [editModal, setEditModal] = useState(false);
  const handleClose = () => {
    setEditModal(false);
  };

  const rates = [
    {
      id: 1,
      fromLocation: "New York City",
      toLocation: "Los Angeles",
      packageName: "Los Angeles",
      passengerCount: 2,
      ratePrice: 500.0,
    },
    {
      id: 2,
      fromLocation: "San Francisco",
      toLocation: "Seattle",
      packageName: "Los Angeles",
      passengerCount: 1,
      ratePrice: 350.0,
    },
    {
      id: 3,
      fromLocation: "Chicago",
      toLocation: "Houston",
      passengerCount: 4,
      packageName: "Los Angeles",
      ratePrice: 750.0,
    },
  ];
  return (
    <div style={{ flexGrow: 1 }}>
      <NavigationBar />
      <Box sx={{ maxWidth: "100%", margin: "8%" }}>
        <Typography variant="h3" style={{ flexGrow: 1, textAlign: "center" }}>
          Rates
        </Typography>
        <Button
          style={{ float: "right", background: "#341EA0", color: "white" }}
          onClick={() => setEditModal(true)}
        >
          Add Rates
        </Button>
        <Button color="inherit" component={Link} to="/admin/booking-summary">
          Booking Summary
        </Button>
        <TableContainer component={Paper}>
          <Table className={""} aria-label="rates table">
            <TableHead>
              <TableRow>
                <TableCell>From Location</TableCell>
                <TableCell>To Location</TableCell>
                <TableCell>Passenger Count</TableCell>
                <TableCell>Package Name</TableCell>
                <TableCell>Rate Price</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rates.map((rate) => (
                <TableRow key={rate.id}>
                  <TableCell component="th" scope="row">
                    {rate.fromLocation}
                  </TableCell>
                  <TableCell>{rate.toLocation}</TableCell>

                  <TableCell>{rate.passengerCount}</TableCell>
                  <TableCell>{rate.packageName}</TableCell>
                  <TableCell>{rate.ratePrice}</TableCell>
                  <TableCell>
                    <Delete />
                    <Edit />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <AddRatesModal isModalVisible={editModal} onClose={handleClose} />
      </Box>
    </div>
  );
};
export default RatesTable;
