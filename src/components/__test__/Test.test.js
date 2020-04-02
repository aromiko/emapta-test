import React, { Fragment } from "react";

import App from "./../../App";
import Pricing from "../Pricing";
import { Provider } from "react-redux";
import SelectProductTier from "../SelectProductTier";
import product from "../../content/product";
import { render } from "@testing-library/react";
import store from "./../../ducks/Store";

it("Start App OK", () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(getByTestId("product-form"));
});

it("Renders Standard Edition Radio Button", () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(getByTestId("standard-radio-btn"));
});

it("Renders Enterprise Edition Radio Button", () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(getByTestId("enterprise-radio-btn"));
});

it("Price Should Match Standard Radio Button", () => {
  const radioPropData = {
    key: 0,
    value: "standard",
    label: "Standard Edition",
    checked: true
  };

  const pricingPropData = {
    price: product[product.map(e => e.value).indexOf(radioPropData.value)].price
  };

  const { getByText, getByTestId } = render(
    <Fragment>
      <SelectProductTier {...radioPropData} />
      <Pricing {...pricingPropData}></Pricing>
    </Fragment>
  );

  const radioLabel = getByText("Standard Edition");
  const radioInput = getByTestId("standard-radio-btn");

  const pricing = getByTestId("price-per-month");

  expect(radioLabel.textContent).toEqual("Standard Edition");
  expect(radioInput).toHaveProperty("checked", true);
  expect(pricing.textContent).toEqual("$120 per month");
});

it("Price Should Match Enterprise Radio Button", () => {
  const radioPropData = {
    key: 1,
    value: "enterprise",
    label: "Enterprise Edition",
    checked: true
  };

  const pricingPropData = {
    price: product[product.map(e => e.value).indexOf(radioPropData.value)].price
  };

  const { getByText, getByTestId } = render(
    <Fragment>
      <SelectProductTier {...radioPropData} />
      <Pricing {...pricingPropData}></Pricing>
    </Fragment>
  );

  const radioLabel = getByText("Enterprise Edition");
  const radioInput = getByTestId("enterprise-radio-btn");

  const pricing = getByTestId("price-per-month");

  expect(radioLabel.textContent).toEqual("Enterprise Edition");
  expect(radioInput).toHaveProperty("checked", true);
  expect(pricing.textContent).toEqual("$999 per month");
});
