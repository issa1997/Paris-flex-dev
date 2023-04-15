import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import { SvgIconTypeMap, TextField } from "@material-ui/core";
import Autocomplete, {
  AutocompleteChangeDetails,
  AutocompleteChangeReason,
} from "@material-ui/lab/Autocomplete";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";

export type optionsType = {
  locationName: string;
  locationCordinates?: string[] | string;
  locationKey: string;
};

interface DropDownProps {
  label: string;
  options: optionsType[] | [] | any; // change this later
  helperText: string;
  customIcon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  onChange: (
    event: React.ChangeEvent<{}>,
    value: null,
    reason: AutocompleteChangeReason,
    details?: AutocompleteChangeDetails<never> | undefined
  ) => void;
  id: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 300,
      marginTop: 10,
    },
    icon: {
      marginTop: 5,
      marginLeft: 10,
    },
    autoComplete: {
      width: 180,
      height: 100,
      marginLeft: 5,
    },
    verticalDivider: {
      borderLeft: "2px solid #E0E0E0",
      height: 70,
      marginLeft: "47%",
    },
  })
);

const DropDown: React.FC<DropDownProps> = (props) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid className={classes.icon} item xs={2} sm={1}>
            {props.customIcon}
          </Grid>
          <Grid item xs={2}>
            <FormControl>
              <Autocomplete
                id={props.id}
                options={props.options}
                className={classes.autoComplete}
                renderInput={(params: any) => (
                  <>
                    <TextField
                      {...params}
                      label={props.label}
                      size="small"
                      variant="outlined"
                    />
                    <FormHelperText id="combo-box-demo">
                      {props.helperText}
                    </FormHelperText>
                  </>
                )}
                onChange={props.onChange}
              />
            </FormControl>
          </Grid>
          <div className={classes.verticalDivider}></div>
        </Grid>
      </div>
    </>
  );
};

export default DropDown;
