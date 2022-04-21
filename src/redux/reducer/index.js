import { actions } from "../actions/index";
import Swal from "sweetalert2";
import { GET_STAGES } from "../actions/getStages";
//import { act } from "@testing-library/react";

const {
  GET_EVENTS,
  GET_EVENT_DETAIL,
  CLEAN_EVENT_DETAIL,
  FILT_EVENTS,
  GET_GENRES,
  GET_NAME_EVENT,
  POST_STAGE,
  REGISTER_USER,
  LOGIN_USER,
  LOGIN_TOKEN,
  CLEAR_AUTH_ERR,
  LOGOUT,
  GET_ARTISTS,
} = actions;

const initialState = {
  events: [],
  searchevents: [],
  details: [],
  genres: [],
  messagge: "",
  user: {},
  token: "",
  authError: null,
  artists: [],
  stages: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EVENTS: {
      return {
        ...state,
        events: action.payload,
        searchevents: action.payload,
      };
    }

    case GET_ARTISTS: {
      return {
        ...state,
        artists: action.payload,
      };
    }

    case GET_STAGES: {
      return {
        ...state,
        stages: action.payload,
      };
    }

    case GET_GENRES: {
      // console.log('ejecutando getGenres desde reducer')
      return {
        ...state,
        genres: action.payload,
      };
    }

    case FILT_EVENTS: {
      return {
        ...state,
        events: action.payload,
      };
    }

    case GET_EVENT_DETAIL: {
      return {
        ...state,
        details: action.payload,
      };
    }

    case CLEAN_EVENT_DETAIL: {
      return {
        ...state,
        details: [],
      };
    }

    case CLEAR_AUTH_ERR: {
      return {
        ...state,
        authError: null,
      };
    }

    case LOGOUT: {
      return {
        ...state,
        user: {},
        token: "",
        authError: null,
      };
    }

    case GET_NAME_EVENT: {
      const eventfinds = action.payload;
      const notfound = () => {
        document.getElementById("nameEvent").focus();
        Swal.fire({
          title: "Información",
          text: "No se encontraron eventos!!!",
          icon: "info",
          confirmButtonText: "Ok",
        });
      };
      return {
        ...state,
        events: eventfinds.length > 0 ? action.payload : state.events,
        messagge: eventfinds.length === 0 && notfound(),
      };
    }

    case REGISTER_USER: {
      return {
        ...state,
        user: action.payload.user ? "success" : "error",
        authError: action.payload.error,
      };
    }

    case LOGIN_USER: {
      return {
        ...state,
        user: action.payload.user ? action.payload.user : "error",
        token: action.payload.token ? action.payload.token: "",
        authError: action.payload.error,
      };
    }

    case LOGIN_TOKEN: {
      return {
        ...state,
        user: action.payload.user ? action.payload.user : "error",
        token: action.payload.token,
        authError: action.payload.error,
      };
    }

    case POST_STAGE: {
      return {
        ...state,
      };
    }

    default:
      return state;
  }
};

export default rootReducer;
