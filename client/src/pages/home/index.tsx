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
import { convertToValidTimeString } from "../../utls/time-formater";
import { BookingType } from "../../services/bookings";

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
  setPassengerId: React.Dispatch<React.SetStateAction<number>>;
  passengerExtrasDetails:
    | Omit<PassengerDetailExtrasType, "id" | "isDelete">
    | undefined;
  passengerId: number;
  bookingDetails: BookingType;
}> = (props) => {
  switch (props.activeStep) {
    case 0:
      return (
        <PassengerDetails
          setActiveStep={props.setActiveStep}
          activeStep={props.activeStep}
          setPassengerId={props.setPassengerId}
          setPassengerDetails={props.setPassengerDetails}
          pasengers={props.passengers}
        />
      );
    case 1:
      return (
        <ExtrasComponent
          setActiveStep={props.setActiveStep}
          activeStep={props.activeStep}
          passengerId={props.passengerId}
          setPassengerExtrasDetails={props.setPassengerExtrasDetails}
        />
      );
    case 2:
      return (
        <BookingSummaryComponent
          bookingDetails={props.bookingDetails}
          passengerDetails={props.passengerDetails}
          passengerExtrasDetails={props.passengerExtrasDetails}
        />
      );
  }
  return <></>;
};

const Home: React.FC = () => {
  let orderIdCounter: number = 1;

  const bookingInitalType: BookingType = {
    pickUpLocation: "",
    dropOffLocation: "",
    passengerId: 0,
    pickUpDate: "",
    PickUpTime: "",
    rateId: 0,
    tripType: "one_way",
    luggagePieces: 0,
    bookingRefId: "",
    price: 0,
    returnLocation: "",
    returnDropLocation: "",
    returnTime: "",
    returnDate: "",
  };

  const [activeStep, setActiveStep] = useState<number>(0);
  const [bookingPrice, setBookingPrice] = useState<number>(0);
  const [passengerDetails, setPassengerDetails] =
    useState<Omit<PassengerDetailsType, "id" | "isDelete">>();
  const [passengerExtraDetails, setPassengerExtraDetails] =
    useState<Omit<PassengerDetailExtrasType, "id" | "isDelete">>();
  const [passengerId, setPassengerId] = useState<number>(0);
  const [bookingDetails, setBookingDetails] =
    useState<BookingType>(bookingInitalType);
  const [searchParams] = useSearchParams();

  const luggagePieces = searchParams.get("luggagePieces");
  const pickupLocation = searchParams.get("pickupLocation");
  const dropLocation = searchParams.get("dropLocation");
  const passengers = searchParams.get("passengers");
  const pickupDate = searchParams.get("pickupDate");
  const pickupTime = searchParams.get("pickupTime");

  const generateBookingRefId = () => {
    const orderPrefix: string = "BK";
    const orderID: string = `${orderPrefix}${orderIdCounter
      .toString()
      .padStart(4, "0")}`;
    orderIdCounter++;
    return orderID;
  };

  const getRatesForLocation = async () => {
    if (
      !_.isNull(pickupLocation) &&
      !_.isNull(dropLocation) &&
      !_.isNull(passengers) &&
      !_.isNull(pickupTime)
    ) {
      const getRatesFromLocationParams: RatesFromLocationType = {
        fromLocation: pickupLocation,
        toLocation: dropLocation,
        passengerCount: Number(passengers),
        pickUpTime: convertToValidTimeString(pickupTime),
      };
      getRateFromLocation(getRatesFromLocationParams)
        .then((response: AxiosResponse) => {
          const restrcutredResponse: any = response.data;
          setBookingDetails({
            ...bookingDetails,
            rateId: restrcutredResponse.data.id,
            passengerId: passengerId,
            pickUpLocation: pickupLocation,
            dropOffLocation: dropLocation,
            luggagePieces: Number(luggagePieces),
            pickUpDate: String(pickupDate),
            PickUpTime: String(pickupTime),
            price: restrcutredResponse.data.price,
            tripType: "one_way",
            returnDate: "",
            returnLocation: "",
            returnDropLocation: "",
            returnTime: "",
            bookingRefId: generateBookingRefId(),
          });
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
  }, [pickupLocation, dropLocation, passengers, passengerId]);

  return (
    <>
      <ToastContainer />
      <div>
        <ProgressStepper activeStep={activeStep} />
      </div>

      <div className="home-container">
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Grid container spacing={3} direction="column">
              <Grid item md={8} xs={12}>
                <PassengerDetailSummary
                  bookingPrice={bookingPrice}
                  luggagePieces={luggagePieces}
                  passengerCount={passengers}
                />
              </Grid>
              <Grid item md={8} xs={12} order={{ xs: 2, sm: 2 }}>
                <RenderStepperComponents
                  activeStep={activeStep}
                  setActiveStep={setActiveStep}
                  setPassengerDetails={setPassengerDetails}
                  passengers={passengers}
                  passengerDetails={passengerDetails}
                  setPassengerExtrasDetails={setPassengerExtraDetails}
                  passengerExtrasDetails={passengerExtraDetails}
                  passengerId={passengerId}
                  setPassengerId={setPassengerId}
                  bookingDetails={bookingDetails}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={4} xs={12} order={{ xs: 3, sm: 3 }}>
            <YourTransfer
              date={pickupDate}
              dropoffLocation={dropLocation}
              pickupLocation={pickupLocation}
              time={pickupTime}
              passengers={passengers}
              passengerId={passengerId}
            />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Home;
