import { FETCH_SUMMARY, APPLY_PROMO } from "../actions/types";

const initialState = {
  pricing: null,
  itemDetails: null,
  promoPercent: 0
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_SUMMARY:
      return {
        ...state,
        pricing: action.payload.pricing,
        itemDetails: action.payload.itemDetails
      };
    case APPLY_PROMO:
      return {
        ...state,
        promoPercent: action.payload
      };
    default:
      return state;
  }
}
