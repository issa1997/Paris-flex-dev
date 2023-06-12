import {
  Autocomplete,
  Box,
  Button,
  Grid,
  InputLabel,
  Modal,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { RatesType } from "../../../services/rates";
import { AxiosResponse } from "axios";
import _ from "lodash";
import { createRate } from "../../../services/rates";
import { toast, ToastContainer } from "react-toastify";
import "./index.css"
interface AddBookingModalType {
  isModalVisible: boolean;
  onClose: any;
}
const AddRatesModal: React.FC<AddBookingModalType> = (props) => {
  const [tripType, setTripType] = useState<any>();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const rateData: Omit<RatesType, "id" | "isDelete"> = {
      fromLocation: String(formData.get("fromLocation")),
      toLocation: String(formData.get("toLocation")),
      packageName: String(formData.get("packageName")),
      passengerCount: Number(formData.get("passengerCount")),
      price: Number(formData.get("rate")),
      tripType: tripType.value,
    };
    if (!_.isEmpty(rateData) || !_.isUndefined(rateData)) {
      createRate(rateData)
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
    }
  };

  return (
    <>
      <ToastContainer />
      <Modal
        open={props.isModalVisible}
        onClose={props.onClose}
        sx={{
          display: "flex",
          width: "auto",
          alignItems: "center",
          justifyContent: "center",
          margin: "10%",
          margiRadius: "10px"
        }}
      >
        <div
          style={{
            backgroundColor: "#fff",
            padding: "2% 4% ",
            borderRadius: "4px",
            outline: "none",
          }}
        >
          <h2>Add Rates</h2>

          <Box component="form" autoComplete="off" onSubmit={onSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={6}>
                <InputLabel className="label-name" id="select-label">From Location</InputLabel>
                <TextField
                  name="fromLocation"
                  sx={{ width: "90%" }}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
              <InputLabel className="label-name" id="select-label">To Location</InputLabel>
                <TextField
                  name="toLocation"
                  sx={{ width: "90%" }}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
              <InputLabel className="label-name" id="select-label">Passenger Count</InputLabel>
                <TextField
                  name="passengerCount"
                  sx={{ width: "90%" }}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
              <InputLabel className="label-name" id="select-label">Package Name</InputLabel>
                <TextField
                  name="packageName"
                  sx={{ width: "90%" }}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
              <InputLabel id="select-label">Rate</InputLabel>
                <TextField name="rate"  sx={{ width: "90%" }} />
              </Grid>

              <Grid item xs={12} sm={6} md={6}>
              <InputLabel className="label-name" id="select-label">Trip Type</InputLabel>
                <Autocomplete
                  disablePortal
                  className="trip-type"
                  options={[
                    {
                      value: "one_way",
                      label: "One Way",
                    },
                    {
                      value: "round_trip",
                      label: "Round Trip",
                    },
                  ]}
                  renderInput={(params) => <TextField {...params} />}
                  onChange={(
                    event: React.SyntheticEvent<Element, Event>,
                    value: any
                  ) => setTripType(value)}
                  value={tripType}
                />
              </Grid>
            </Grid>
            <div style={{float: "right", margin:"0 4%"}}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              style={{ marginRight: "0.5rem" }}
            >
              Add
            </Button>
            <Button variant="contained" onClick={props.onClose}>Cancel</Button>
            </div>
            
          </Box>
          
        </div>
      </Modal>
    </>
  );
};
export default AddRatesModal;
