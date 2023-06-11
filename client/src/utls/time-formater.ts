import moment from "moment";

export const convertToValidTimeString = (time: string) => {
  const format = "HH:mm";
  const parsedTime = moment(time, format, true);
  if (!parsedTime.isValid()) {
    throw new Error("Invalid time format");
  }
  return parsedTime.format(format);
};
