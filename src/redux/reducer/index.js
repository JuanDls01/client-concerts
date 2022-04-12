import { GET_EVENTS } from "../actions/getEvents";

const initialState = {
    events: [],
    details: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_EVENTS: {
            console.log(action.payload);
            return {
                ...state,
                events: action.payload,
            }
        }
        case "FILT_BY_DATEs": {
            return {
                ...state,
                events: action.payload,
            };
        }
        default:
          return state;
      }
}

export default rootReducer;