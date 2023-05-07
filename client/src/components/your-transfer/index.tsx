import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { ReactComponent as Travellers } from "../../assets/icons/healthicons_travel-alt-outline.svg";
import { ReactComponent as Repeat } from "../../assets/icons/repeat.svg";
import { ReactComponent as Passengers } from "../../assets/icons/passengers.svg";
import { ReactComponent as OneWay } from "../../assets/icons/one-way.svg";
import { ReactComponent as StepA } from "../../assets/icons/step-a.svg";
import { ReactComponent as StepB } from "../../assets/icons/step-b.svg";
import { ReactComponent as Calendar } from "../../assets/icons/calendar.svg";
import { ReactComponent as Clock } from "../../assets/icons/clock.svg";
import "./index.css";
import EditTripModal from "../edit-trip-modal";
import AddReturnTripModal from "../add-return-trip";

const YourTransfer: React.FC = () => {
  const [editModal, setEditModal] = useState(false);
  const [addReturn, setAddReturn] = useState(false);

  const handleClose =()=> {
    setEditModal(false);
    setAddReturn(false)
  }
  return (
    <><Card
    className="main-card-style"
    sx={{
      boxShadow: "0px 4px 70px rgba(62, 62, 185, 0.08)",
      borderRadius: "20px",
    }}
  >
    <CardContent>
      <Typography
        gutterBottom
        variant="h5"
        className="header-style"
        component="div"
      >
        <Travellers /> Your Transfer
      </Typography>
      <Divider variant="middle" />
      <p className="p-text-style">Outward journey</p>
      <div>
        <Box sx={{ maxWidth: 400 }} className='stepper-styles'>
          <Stepper orientation="vertical">
            <Step key={1}>
              <StepLabel StepIconComponent={StepA}>
                Paris Charles de Gaulle Airport (CDG), Paris Charles de
                Gaulle, France
              </StepLabel>
            </Step>
            <Step key={1}>
              <StepLabel StepIconComponent={StepB}>
                Disneyland Paris, Boulevard de Parc, Coupvray, France
              </StepLabel>
            </Step>
          </Stepper>
          <Stepper orientation="vertical">
            <Step key={1}>
              <StepLabel StepIconComponent={Calendar}>17 March 2023</StepLabel>
            </Step>
          </Stepper>
          <Stepper orientation="vertical">
            <Step key={1}>
              <StepLabel StepIconComponent={Clock}>12:00 (12.00 pm)</StepLabel>
            </Step>
          </Stepper>
        </Box>
      </div>
      <Divider variant="middle" />
      <p className="p-text-style">Book smart ! Add a return Journey</p>
      <Grid container className="edit-trip">
      <Typography variant="h6" className="change-mind-styles">
            Change Mind?
          </Typography>
        <Button className="edit-button" onClick={()=>setEditModal(true)}>
          Edit Trip
        </Button>
      </Grid>
      <Grid container className="button-container">
        <Button className="box-styles passengerss">
          <Passengers className="icon-styles" /> <p className="text-style">3 Passengers</p>
        </Button>
        <Button className="box-styles onewayy">
          <OneWay /> <p className="text-style">One way</p>
        </Button>
      </Grid>
      <Button className="button-styles" onClick={()=>setAddReturn(true)}>
        ADD RETURN <Repeat className="svg-icon" />
      </Button>
     
    </CardContent>
    </Card>
      <EditTripModal isModalVisible={editModal} onClose={handleClose} />
      <AddReturnTripModal isModalVisible={addReturn} onClose={handleClose} />
    </>
    
  );
};
export default YourTransfer;
