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
  SEND_EMAIL_RECOVER,
  SEND_EMAIL_REGISTER
} = actions;

const initialState = {
  events: [],
  allevents: [],
  searchevents: [],
  details: [],
  genres: [],
  messagge: "",
  user: {},
  token: "",
  tokenError: null,
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
        allevents: action.payload,
        searchevents: action.payload,
      };
    }

    case "GET_ARTISTS": {
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
        tokenError: null,
      };
    }

    case GET_NAME_EVENT: {
      console.log(action.payload)
      const eventfinds = action.payload;
      console.log(eventfinds)
      console.log(eventfinds.length)
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
        events: eventfinds.length !== 0 ? action.payload : state.allevents,
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
        token: action.payload.token ? action.payload.token: "",
        tokenError: action.payload.error,
      };
    }

    case POST_STAGE: {
      return {
        ...state,
      };
    }
    case SEND_EMAIL_RECOVER:{
    
        const notfound = (info=action.payload) => {
          Swal.fire({
            title: "Hey!" ,
            text: `${info}`,
            icon: info==="This email is not registered!" ? "error" : "success" ,
            confirmButtonText: "Ok",
          });
        };
        return {
          ...state,
          messagge: action.payload && notfound(),
        };
    
    }
    case SEND_EMAIL_REGISTER:{
        
      const notfound = (info=action.payload) => {
        Swal.fire({
          title: "Hey!",
          text:`${info}`,
          icon: info==="user existent" ? "error" : "success" ,
          confirmButtonText: "Ok",
        });
      };
      return {
        ...state,
        messagge: action.payload && notfound(),
      };
  
  }

    default:
      return state;
  }
};

export default rootReducer;
