import { SET_PRODUCT_TIER } from "./Types";

export const setProductTier = productTier => {
  return {
    type: SET_PRODUCT_TIER,
    payload: { productTier }
  };
};
