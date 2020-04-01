import { SET_PRODUCT_TIER } from "./Types";

const initialState = { productTier: "standard" };

const Reducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCT_TIER:
      return (state = action.payload);
    default:
      return state;
  }
};

export default Reducers;
