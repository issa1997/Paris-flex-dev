import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ReactComponent as Edit } from "../../../assets/icons/edit.svg";
import { ReactComponent as Delete } from "../../../assets/icons/delete.svg";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import AddRatesModal from "../rates-modal";
import NavigationBar from "../navigation-bar";
import { getAllRates, deleteRate } from "../../../services/rates";
import _ from "lodash";
import { AxiosResponse } from "axios";
import { ToastContainer, toast } from "react-toastify";

const RatesTable: React.FC = () => {
  const [editModal, setEditModal] = useState(false);
  const [tableData, setTableData] = useState<any[]>([]);

  const handleClose = () => {
    setEditModal(false);
  };

  useEffect(() => {
    getAllRates().then((response) => {
      const tableData = response.data.data;
      if (!_.isEmpty(tableData)) {
        setTableData(tableData);
      }
    });
  }, []);

  const handleDeleteRate = (id: number) => {
    deleteRate(id)
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
          {_.isEmpty(tableData) ? (
            <CircularProgress color="success" />
          ) : (
            <Table className={""} aria-label="rates table">
              <TableHead>
                <TableRow>
                  <TableCell>From Location</TableCell>
                  <TableCell>To Location</TableCell>
                  <TableCell>Passenger Count</TableCell>
                  <TableCell>Trip Type</TableCell>
                  <TableCell>Rate Price</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tableData.map((rate) => (
                  <TableRow key={rate.id}>
                    <TableCell component="th" scope="row">
                      {rate.fromLocation}
                    </TableCell>
                    <TableCell>{rate.toLocation}</TableCell>
                    <TableCell>{rate.passengerCount}</TableCell>
                    <TableCell>{rate.tripType}</TableCell>
                    <TableCell>{rate.price}</TableCell>
                    <TableCell>
                      <Delete onClick={() => handleDeleteRate(rate.id)} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </TableContainer>
        <AddRatesModal isModalVisible={editModal} onClose={handleClose} />
      </Box>
    </div>
  );
};
export default RatesTable;
