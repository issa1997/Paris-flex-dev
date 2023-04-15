import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import _ from "lodash";
import CircularProgress from "@material-ui/core/CircularProgress";

export type RadioOptionType = {
  value: string;
  labelPlacement: "end" | "start" | "top" | "bottom";
  label: React.ReactNode;
};

interface RadioButtonCollectionProps {
  radioGroupValue: any;
  radioGroupOnChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    value: string
  ) => void;
  radioGroupName: string;
  radioOptions: RadioOptionType[];
}

const RadioButtonCollection: React.FC<RadioButtonCollectionProps> = (props) => {
  return (
    <FormControl component="fieldset">
      <RadioGroup
        row
        aria-label={props.radioGroupName}
        name={props.radioGroupName}
        value={props.radioGroupValue}
        onChange={props.radioGroupOnChange}
      >
        {_.isEmpty(props.radioOptions) || _.isUndefined(props.radioOptions) ? (
          <CircularProgress />
        ) : (
          props.radioOptions.map((item) => (
            <FormControlLabel control={<Radio />} {...item} />
          ))
        )}
      </RadioGroup>
    </FormControl>
  );
};

export default RadioButtonCollection;
