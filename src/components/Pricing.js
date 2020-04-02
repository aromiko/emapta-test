import React, { Fragment } from "react";

import { FormLabel } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  formLabel: {
    marginBottom: theme.spacing(1)
  }
}));

const Pricing = props => {
  const classes = useStyles();
  return (
    <Fragment>
      <FormLabel
        component="legend"
        className={classes.formLabel}
        data-testid="price-label"
      >
        Total Price
      </FormLabel>
      <div data-testid="price-per-month">
        <strong>{props.price} per month</strong>
      </div>
    </Fragment>
  );
};

export default Pricing;
