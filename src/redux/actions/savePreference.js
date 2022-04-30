import axios from "axios";
export const SAVE_PREFERENCE = "SAVE_PREFERENCE";

export default function savePreference(preference) {
  return async function (dispatch) {
    dispatch({ type: SAVE_PREFERENCE, payload: preference });
  };
}
