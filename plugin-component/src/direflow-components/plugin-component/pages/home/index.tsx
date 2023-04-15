import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardContainer from "../../components/card-container";
import RadioButtonCollection, {
  RadioOptionType,
} from "../../components/radio-button-collection";
import DropDown from "../../components/dropdown";
import Divider from "@material-ui/core/Divider";
import DateTimePicker from "../../components/date-time-picker";

const useStyles = makeStyles({
  root: {
    width: 975,
    height: 190,
  },
});

const Home: React.FC = () => {
  const classes = useStyles();
  const [radioGroupValue, setRadioGroupValue] = useState();

  const pickUpRadioOptions: RadioOptionType[] = [
    {
      label: "One Way",
      labelPlacement: "start",
      value: "one-way",
    },
    {
      label: "Round Trip",
      labelPlacement: "start",
      value: "round-trip",
    },
  ];

  return (
    <>
      <Card className={classes.root}>
        <CardContent>
          <CardContainer
            containerStyle={{ width: "100%", height: 160 }}
            content={
              <>
                <RadioButtonCollection
                  radioGroupName="pickup-options"
                  radioGroupOnChange={() => {}}
                  radioGroupValue={radioGroupValue}
                  radioOptions={pickUpRadioOptions}
                />
                <Divider />
                <DateTimePicker />
              </>
            }
          />
        </CardContent>
      </Card>
    </>
  );
};

export default Home;
