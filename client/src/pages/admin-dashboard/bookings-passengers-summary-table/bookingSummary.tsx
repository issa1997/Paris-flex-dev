import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  Typography,
  Paper,
  CircularProgress,
  IconButton,
} from "@mui/material";
import { Box } from "@mui/system";
import NavigationBar from "../navigation-bar";
import _ from "lodash";
import { useEffect, useState } from "react";
import {
  getAllBookingsPassengersAndPassengerExtras,
  changeBookingStatus,
} from "../../../services/bookings";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import { AxiosResponse } from "axios";
import { ToastContainer, toast } from "react-toastify";

const BookingsPassengrsSummary: React.FC = () => {
  const [tableData, setTableData] = useState<any[]>([]);

  useEffect(() => {
    getAllBookingsPassengersAndPassengerExtras().then((response) => {
      const tableData = response.data.data;
      if (!_.isEmpty(tableData)) {
        setTableData(tableData);
      }
    });
  }, []);

  const handleTripStatusChange = (bookingId: number) => {
    changeBookingStatus(bookingId)
      .then((response: AxiosResponse) => {
        const restrcutredResponse: any = response.data;
        toast.success(restrcutredResponse.message, {
          position: "bottom-right",
        });
      })
      .catch((error: any) => {
        const response: any = error.response.data;
        toast.error(response.message, { position: "bottom-right" });
      });
  };

  return (
    <div style={{ flexGrow: 1 }}>
      <ToastContainer />
      <NavigationBar />
      <Box sx={{ maxWidth: "100%", margin: "8%" }}>
        <Typography variant="h3" style={{ flexGrow: 1, textAlign: "center" }}>
          Booking / Passengers Summary
        </Typography>
        <TableContainer component={Paper}>
          {_.isEmpty(tableData) ? (
            <CircularProgress color="success" />
          ) : (
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Last Name</TableCell>
                  <TableCell>Phone</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Passenger Count</TableCell>
                  <TableCell>Travel Number</TableCell>
                  <TableCell>Travel From</TableCell>
                  <TableCell>Pickup Date</TableCell>
                  <TableCell>Pickup Time</TableCell>
                  <TableCell>Luggage Pieces</TableCell>
                  <TableCell>Booking Ref Id</TableCell>
                  <TableCell>Pickup Lank Mark</TableCell>
                  <TableCell>Extras Description</TableCell>
                  <TableCell>Child Seats</TableCell>
                  <TableCell>Booster Seats</TableCell>
                  <TableCell>Trip Status</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tableData.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.lastName}</TableCell>
                    <TableCell>{row.phone}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>{row.passengerCount}</TableCell>
                    <TableCell>{row.travelNumber}</TableCell>
                    <TableCell>{row.travelFrom}</TableCell>
                    <TableCell>{row.pickUpDate}</TableCell>
                    <TableCell>{row.PickUpTime}</TableCell>
                    <TableCell>{row.luggagePieces}</TableCell>
                    <TableCell>{row.bookingRefId}</TableCell>
                    <TableCell>{row.pickUpLandMark}</TableCell>
                    <TableCell>{row.extrasDescription}</TableCell>
                    <TableCell>{row.childSeats}</TableCell>
                    <TableCell>{row.boosterSeats}</TableCell>
                    <TableCell>{row.tripStatus}</TableCell>
                    <TableCell>
                      <div onClick={() => handleTripStatusChange(row.id)}>
                        <IconButton
                          color="primary"
                          aria-label="add to shopping cart"
                        >
                          <AutorenewIcon />
                        </IconButton>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </TableContainer>
      </Box>
    </div>
  );
};

export default BookingsPassengrsSummary;
