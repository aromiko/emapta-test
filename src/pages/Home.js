import {
  Card,
  CardContent,
  Container,
  FormControl,
  FormLabel,
  RadioGroup
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

import Pricing from "../components/Pricing";
import React from "react";
import SelectedProductTier from "../components/SelectProductTier";
import { makeStyles } from "@material-ui/core/styles";
import product from "../content/product";
import { setProductTier } from "../ducks/Actions";

const useStyles = makeStyles(theme => ({
  card: {
    marginTop: theme.spacing(8)
  },
  formLabel: {
    marginBottom: theme.spacing(1)
  },
  radioGroup: {
    marginBottom: theme.spacing(2)
  }
}));

const Home = () => {
  const productTier = useSelector(state => state.productTier);
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleChange = event => {
    dispatch(setProductTier(event.target.value));
  };

  return (
    <Container maxWidth="xs">
      <Card className={classes.card}>
        <CardContent>
          <FormControl component="fieldset">
            <FormLabel component="legend" className={classes.formLabel}>
              Product Edition
            </FormLabel>
            <RadioGroup
              aria-label="product-edition"
              name="product-edition"
              value={productTier}
              onChange={handleChange}
              className={classes.radioGroup}
            >
              {product.map((product, index) => {
                return (
                  <SelectedProductTier
                    key={index}
                    value={product.value}
                    label={product.label}
                  />
                );
              })}
            </RadioGroup>
            <Pricing
              price={
                product[product.map(e => e.value).indexOf(productTier)].price
              }
            />
          </FormControl>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Home;
