import {
  Autocomplete,
  Box,
  Button,
  Grid,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import "./index.css";
import DateTimePicker from "react-datetime-picker";
import { ReactComponent as Calendar } from "../../assets/icons/calendar.svg";
import { ReactComponent as Clock } from "../../assets/icons/clock.svg";
import { ReactComponent as Location } from "../../assets/icons/location.svg";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";
interface AddReturnTripModalType {
  isModalVisible: boolean;
  onClose: any;
}
const AddReturnTripModal: React.FC<AddReturnTripModalType> = (props) => {
  const [selectedOption, setSelectedOption] = useState("");
  const handleChange = (event: any) => {
    setSelectedOption(event.target.value);
  };
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date());

  const handleTimeChange = (time: any) => {
    setSelectedTime(time);
  };
  const handleDateChange = (date: any) => {
    setSelectedDate(date);
  };
  const options = [
    { value: "A", label: "A" },
    { value: "B", label: "B" },
    { value: "C", label: "C" },
    { value: "D", label: "D" },
  ];
  return (
    <>
      <Modal
        open={props.isModalVisible}
        onClose={props.onClose}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Box className="return-modal-styles">
          <Grid container spacing={2}>
            <Grid item xs={6} md={4}>
              <Grid>
                <Grid>
                  <InputLabel id="select-label">Return Location</InputLabel>

                  <div className="return-location-container">
                    <Location />
                    <Autocomplete
                      disablePortal
                      className="return-trip-select"
                      options={options}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <input
                    className="location-input"
                    placeholder="Enter your destinations"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6} md={4}>
              <Grid>
                <Grid>
                  <InputLabel id="select-label">
                    Return Drop Location
                  </InputLabel>
                  <div className="return-location-container">
                    <Location />
                    <Autocomplete
                      disablePortal
                      className="return-trip-select"
                      options={options}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <input
                    className="location-input"
                    placeholder="Enter your destinations"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={0} md={4}>
              {/* Content for row 3, column 3 */}
            </Grid>
            <Grid item xs={12} md={4}>
              <Grid>
                <Grid>
                  <InputLabel id="select-label">Return Time</InputLabel>
                  <Clock />
                  <DateTimePicker
                    onChange={handleTimeChange}
                    value={selectedTime}
                    format="HH:mm a"
                    calendarIcon={null}
                    clearIcon={null}
                    className="time-picker"
                    amPmAriaLabel="Select AM/PM"
                  />
                </Grid>
                <Grid item xs={12}>
                  <input
                    className="location-input"
                    placeholder="Enter your destinations"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6} md={4}>
              <Grid>
                <Grid>
                  <InputLabel id="select-label">Return Date</InputLabel>
                  <Calendar />
                  <DateTimePicker
                    onChange={handleDateChange}
                    value={selectedDate}
                    format="dd-MM-y"
                    className="date-picker"
                    disableClock={true}
                    calendarIcon={null}
                    formatDay={(locale: any, date: any) =>
                      date.toLocaleDateString(locale, { day: "numeric" })
                    }
                    formatMonth={(locale: any, date: any) =>
                      date.toLocaleDateString(locale, { month: "short" })
                    }
                    formatYear={(locale: any, date: any) =>
                      date.toLocaleDateString(locale, { year: "numeric" })
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <input
                    className="location-input"
                    placeholder="Enter your destinations"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6} md={4}>
              <Button className="save-trip">Save Trip</Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </>
  );
};
export default AddReturnTripModal;
