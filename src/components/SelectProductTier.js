import { FormControlLabel, Radio } from "@material-ui/core";

import React from "react";

const SelectProductTier = props => {
  return (
    <FormControlLabel
      name={props.value}
      value={props.value}
      control={
        <Radio
          inputProps={{ "data-testid": props.value + "-radio-btn" }}
          checked={props.checked}
        />
      }
      label={props.label}
    />
  );
};

export default SelectProductTier;
