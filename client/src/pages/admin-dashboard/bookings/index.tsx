import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ReactComponent as Edit } from "../../assets/icons/icon-feather-edit.svg";
import { ReactComponent as Delete } from "../../assets/icons/icon-feather-delete.svg";
import { Box } from "@mui/material";

const RatesTable: React.FC = () => {
  const rows = [{
    PickupLocation: 'Location A',
    DropOffLocation: 'Location B',
    PassengerId: 1,
    PickupDate: '2023-05-09',
    PickupTime: '12:00',
    RateId: 1234,
    TripType: 'One-way',
    LuggagePieces: 2,
    BookingRefId: 'ABCD1234'
  },{
    PickupLocation: 'Location C',
    DropOffLocation: 'Location D',
    PassengerId: 2,
    PickupDate: '2023-05-10',
    PickupTime: '14:00',
    RateId: 5678,
    TripType: 'Round-trip',
    LuggagePieces: 1,
    BookingRefId: 'EFGH5678'
  }

  ]
  
  return (
    <Box sx={{ maxWidth: "100%", margin: "8%" }}>
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
            </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
export default RatesTable;
