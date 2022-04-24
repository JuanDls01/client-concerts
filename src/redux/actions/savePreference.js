import axios from "axios";
export const SAVE_PREFERENCE = "SAVE_PREFERENCE";

export default function savePreference(preference) {
  return async function (dispatch) {
    const preferenceId = await axios.post(
      "http://localhost:3001/mercadoPago",
      preference
    );
    dispatch({ type: SAVE_PREFERENCE, payload: preferenceId.data });
  };
}