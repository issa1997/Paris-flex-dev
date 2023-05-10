import React, { useEffect } from "react";
import PassengerDetailSummary from "../../components/passenger-detail-summary";
import { Grid } from "@mui/material";
import PassengerDetails from "../../components/passenger-details-form";
import YourTransfer from "../../components/your-transfer";
import ExtrasComponent from "../../components/extras-component";
import ProgressStepper from "../../components/progress-stepper";
import { useState } from "react";
import "./index.css";
import {
  getRateFromLocation,
  RatesFromLocationType,
} from "../../services/rates";
import { AxiosResponse } from "axios";
import "react-toastify/dist/ReactToastify.min.css";
import { toast, ToastContainer } from "react-toastify";
import { ResponseType } from "../../utls/api-adapter";
import { useSearchParams } from "react-router-dom";
import _ from "lodash";
import BookingSummaryComponent from "../../components/booking-summary";
import { PassengerDetailsType } from "../../services/passengers-details";
import { PassengerDetailExtrasType } from "../../services/passengers-detail-extras";

const RenderStepperComponents: React.FC<{
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
  activeStep: number;
  setPassengerDetails: React.Dispatch<
    React.SetStateAction<
      Omit<PassengerDetailsType, "id" | "isDelete"> | undefined
    >
  >;
  passengers: any;
  passengerDetails: Omit<PassengerDetailsType, "id" | "isDelete"> | undefined;
  setPassengerExtrasDetails: React.Dispatch<
    React.SetStateAction<
      Omit<PassengerDetailExtrasType, "id" | "isDelete"> | undefined
    >
  >;
  passengerExtrasDetails:
    | Omit<PassengerDetailExtrasType, "id" | "isDelete">
    | undefined;
}> = (props) => {
  const [passengerId, setPassengerId] = useState<number>(0);
  switch (props.activeStep) {
    case 0:
      return (
        <PassengerDetails
          setActiveStep={props.setActiveStep}
          activeStep={props.activeStep}
          setPassengerId={setPassengerId}
          setPassengerDetails={props.setPassengerDetails}
          pasengers={props.passengers}
        />
      );
    case 1:
      return (
        <ExtrasComponent
          setActiveStep={props.setActiveStep}
          activeStep={props.activeStep}
          passengerId={passengerId}
          setPassengerExtrasDetails={props.setPassengerExtrasDetails}
        />
      );
    case 2:
      return (
        <BookingSummaryComponent
          passengerDetails={props.passengerDetails}
          passengerExtrasDetails={props.passengerExtrasDetails}
        />
      );
  }
  return <></>;
};

const Home: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [bookingPrice, setBookingPrice] = useState<number>(0);
  const [passengerDetails, setPassengerDetails] =
    useState<Omit<PassengerDetailsType, "id" | "isDelete">>();
  const [passengerExtraDetails, setPassengerExtraDetails] =
    useState<Omit<PassengerDetailExtrasType, "id" | "isDelete">>();

  const [searchParams] = useSearchParams();
  const luggagePieces = searchParams.get("luggagePieces");
  const pickupLocation = searchParams.get("pickupLocation");
  const dropLocation = searchParams.get("dropLocation");
  const passengers = searchParams.get("passengers");
  const pickupDate = searchParams.get("pickupDate");
  const pickupTime = searchParams.get("pickupTime");

  const getRatesForLocation = async () => {
    if (
      !_.isNull(pickupLocation) &&
      !_.isNull(dropLocation) &&
      !_.isNull(passengers)
    ) {
      const getRatesFromLocationParams: RatesFromLocationType = {
        fromLocation: pickupLocation,
        toLocation: dropLocation,
        passengerCount: Number(passengers),
      };
      getRateFromLocation(getRatesFromLocationParams)
        .then((response: AxiosResponse) => {
          const restrcutredResponse: any = response.data;
          if (!_.isEmpty(restrcutredResponse.data)) {
            setBookingPrice(restrcutredResponse.data.price);
          }
        })
        .catch((error: any) => {
          const response: ResponseType = error.response.data;
          toast.error(response.message, { position: "bottom-right" });
        });
    }
  };

  useEffect(() => {
    getRatesForLocation();
  }, [pickupLocation, dropLocation, passengers]);

  return (
    <>
      <ToastContainer />
      <div
        style={{
          background: "#F5F6FF",
          width: "100%",
          textAlign: "center",
          marginBottom: "2%",
        }}
      >
        <ProgressStepper activeStep={activeStep} />
      </div>

      <div className="home-container">
        <Grid container spacing={2}>
          <Grid item md={8}>
            <PassengerDetailSummary
              bookingPrice={bookingPrice}
              luggagePieces={luggagePieces}
              passengerCount={passengers}
            />
            <RenderStepperComponents
              activeStep={activeStep}
              setActiveStep={setActiveStep}
              setPassengerDetails={setPassengerDetails}
              passengers={passengers}
              passengerDetails={passengerDetails}
              setPassengerExtrasDetails={setPassengerExtraDetails}
              passengerExtrasDetails={passengerExtraDetails}
            />
          </Grid>
          <Grid item md={4}>
            <YourTransfer
              date={pickupDate}
              dropoffLocation={dropLocation}
              pickupLocation={pickupLocation}
              time={pickupTime}
            />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Home;
