import axios from "axios";
export const SAVE_PREORDER = "SAVE_PREORDER";

export default function savePreOrder(preOrder) {
  return function (dispatch) {
    dispatch({ type: SAVE_PREORDER, payload: preOrder });
  };
}
