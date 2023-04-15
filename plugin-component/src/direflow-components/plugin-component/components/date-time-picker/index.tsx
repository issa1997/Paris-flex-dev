import "date-fns";
import React, { useState } from "react";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";

const DateTimePicker: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(
    new Date("2014-08-18T21:11:54")
  );

  return (
    <>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Date picker inline"
          value={selectedDate}
          onChange={(
            date: MaterialUiPickersDate,
            value?: string | null | undefined
          ) => setSelectedDate(date)}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
        />
      </MuiPickersUtilsProvider>
    </>
  );
};

export default DateTimePicker;
