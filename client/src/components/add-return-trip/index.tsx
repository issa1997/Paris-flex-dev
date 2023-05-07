import {
  Box,
  Button,
  Grid,
  InputLabel,
  MenuItem,
  Modal,
  Select,
} from "@mui/material";
import React, { useState } from "react";
import "./index.css";
import { ReactComponent as Calendar } from "../../assets/icons/calendar.svg";
import { ReactComponent as Clock } from "../../assets/icons/clock.svg";
import { ReactComponent as Location } from "../../assets/icons/location.svg";

interface AddReturnTripModalType {
  isModalVisible: boolean;
  onClose: any;
}
const AddReturnTripModal: React.FC<AddReturnTripModalType> = (props) => {
  const [selectedOption, setSelectedOption] = useState("");
  const handleChange = (event: any) => {
    setSelectedOption(event.target.value);
  };
  return (
    <>
      <Modal
        open={props.isModalVisible}
        onClose={props.onClose}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Box className="return-modal-styles">
          < Grid container spacing={2}>
            <Grid item xs={4}>
              <Grid>
                <Grid>
                  <InputLabel id="select-label">Return Location</InputLabel>
                  <Location />
                  <Select
                    labelId="select-label"
                    id="select"
                    value={selectedOption}
                    onChange={handleChange}
                    className="select-styles"
                  >
                    <MenuItem value="A">A</MenuItem>
                    <MenuItem value="B">B</MenuItem>
                    <MenuItem value="C">C</MenuItem>
                    <MenuItem value="D">D</MenuItem>
                  </Select>
                </Grid>
                <Grid item xs={12}>
                  <input
                    className="location-input"
                    placeholder="Enter your destinations"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <Grid>
                <Grid>
                  <InputLabel id="select-label">
                    Return Drop Location
                  </InputLabel>
                  <Location />
                  <Select
                    labelId="select-label"
                    id="select"
                    value={selectedOption}
                    onChange={handleChange}
                    className="select-styles"
                  >
                    <MenuItem value="A">A</MenuItem>
                    <MenuItem value="B">B</MenuItem>
                    <MenuItem value="C">C</MenuItem>
                    <MenuItem value="D">D</MenuItem>
                  </Select>
                </Grid>
                <Grid item xs={12}>
                  <input
                    className="location-input"
                    placeholder="Enter your destinations"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={4}>
              {/* Content for row 3, column 3 */}
            </Grid>
            <Grid item xs={4}>
              <Grid>
                <Grid>
                  <InputLabel id="select-label">Return Time</InputLabel>
                  <Clock />
                  <Select
                    labelId="select-label"
                    id="select"
                    value={selectedOption}
                    onChange={handleChange}
                    className="select-styles"
                  >
                    <MenuItem value="A">A</MenuItem>
                    <MenuItem value="B">B</MenuItem>
                    <MenuItem value="C">C</MenuItem>
                    <MenuItem value="D">D</MenuItem>
                  </Select>
                </Grid>
                <Grid item xs={12}>
                  <input
                    className="location-input"
                    placeholder="Enter your destinations"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <Grid>
                <Grid>
                  <InputLabel id="select-label">Return Date</InputLabel>
                  <Calendar />
                  <Select
                    labelId="select-label"
                    id="select"
                    value={selectedOption}
                    onChange={handleChange}
                    className="select-styles"
                  >
                    <MenuItem value="A">A</MenuItem>
                    <MenuItem value="B">B</MenuItem>
                    <MenuItem value="C">C</MenuItem>
                    <MenuItem value="D">D</MenuItem>
                  </Select>
                </Grid>
                <Grid item xs={12}>
                  <input
                    className="location-input"
                    placeholder="Enter your destinations"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <Button className="save-trip">Save Trip</Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </>
  );
};
export default AddReturnTripModal;
