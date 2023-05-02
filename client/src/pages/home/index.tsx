import React from "react";
import PassengerDetailSummary from "../../components/passenger-detail-summary";
import { Grid } from "@mui/material";
import PassengerDetails from "../../components/passenger-details-form";

const Home: React.FC = () => {
  return (
    <>

<Grid container spacing={3} style={{padding: '8%'}}>
  <Grid item xs={9}>
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <PassengerDetailSummary/>
      </Grid>
      <Grid item xs={12}>
       <PassengerDetails/>
      </Grid>
    </Grid>
  </Grid>
  <Grid item xs={3}>
    {/* Second column */}
    {/* Insert your content here */}
  </Grid>
</Grid>

    </>
  );
};

export default Home;
