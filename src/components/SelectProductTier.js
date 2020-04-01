import { FormControlLabel, Radio } from "@material-ui/core";

import React from "react";

const SelectProductTier = props => {
  return (
    <FormControlLabel
      value={props.value}
      control={<Radio />}
      label={props.label}
    />
  );
};

export default SelectProductTier;
