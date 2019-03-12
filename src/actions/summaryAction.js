import { FETCH_SUMMARY, APPLY_PROMO } from "./types";
import axios from "axios";

export const fetchSummary = () => dispatch => {
  axios
    .get(`https://5b82de4f5118040014cd6c3a.mockapi.io/item-cart`)
    .then(res => {
      //console.log('Response:', res.data[0]);
      dispatch({
        type: FETCH_SUMMARY,
        payload: res.data[0]
      });
    })
    .catch(err => {
      console.log(err);
    });
};

export const applyPromo = data => dispatch => {
  dispatch({
    type: APPLY_PROMO,
    payload: 10
  });
};
