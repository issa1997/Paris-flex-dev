import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ReactComponent as Edit } from "../../../assets/icons/edit.svg";
import { ReactComponent as Delete } from "../../../assets/icons/delete.svg";
import { Box, Typography } from "@mui/material";

const RatesTable: React.FC = () => {
  const rates = [
    {
      id: 1,
      fromLocation: "New York City",
      toLocation: "Los Angeles",
      passengerCount: 2,
      ratePrice: 500.0,
    },
    {
      id: 2,
      fromLocation: "San Francisco",
      toLocation: "Seattle",
      passengerCount: 1,
      ratePrice: 350.0,
    },
    {
      id: 3,
      fromLocation: "Chicago",
      toLocation: "Houston",
      passengerCount: 4,
      ratePrice: 750.0,
    },
  ];
  return (
    <Box sx={{ maxWidth: "100%", margin: "8%" }}>
      <Typography variant="h3" style={{ flexGrow: 1, textAlign: "center" }}>
        Rates
      </Typography>
      <TableContainer component={Paper}>
        <Table className={""} aria-label="rates table">
          <TableHead>
            <TableRow>
              <TableCell>From Location</TableCell>
              <TableCell>To Location</TableCell>
              <TableCell>Passenger Count</TableCell>
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
    </Box>
  );
};
export default RatesTable;
