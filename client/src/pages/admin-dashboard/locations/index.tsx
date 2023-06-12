import React, { useState } from "react";
import NavigationBar from "../navigation-bar";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Box from "@mui/material/Box";
import { Typography, Button, Paper } from "@mui/material";
import { ReactComponent as Delete } from "../../../assets/icons/delete.svg";
import PickupLocationsModal from "./addPickupModal";
const LocationsTable: React.FC = () => {
  const [locationsModal, setLocationsModal] = useState(false);
  const handleClose = () => {
    setLocationsModal(false);
  };
  return (
    <>
      <NavigationBar />
      <Box sx={{ maxWidth: "100%", margin: "8%" }}>
        <Typography variant="h3" style={{ flexGrow: 1, textAlign: "center" }}>
          Locations
        </Typography>
        <Button
          style={{ float: "right", background: "#341EA0", color: "white" }}
          onClick={() => setLocationsModal(true)}
        >
          Add Locations
        </Button>
        <TableContainer component={Paper}>
          <Table className={""} aria-label="rates table">
            <TableHead>
              <TableRow>
                <TableCell>Location</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row"></TableCell>

                <TableCell>
                  <Delete />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <PickupLocationsModal
          isModalVisible={locationsModal}
          onClose={handleClose}
        />
      </Box>
    </>
  );
};
export default LocationsTable;
