import { actions } from "../actions/index";
import Swal from "sweetalert2";
import { GET_STAGES } from "../actions/getStages";
// import { act } from "@testing-library/react";
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
  GET_TICKETS,
  SEND_EMAIL_RECOVER,
  SEND_EMAIL_REGISTER,
  SEND_EMAIL_BUY,
  GET_USER,
  CLEAR_USER,
  GET_USERS,
  UPDATE_USER,
  CLEAR_UPDATE_ERR,
  UPDATE_PASSWORD,
  UPDATE_PROFILE,

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
  userUpdareErr: null,
  artists: [],
  stages: [],
  usersList: {},
  userDetail: {},
  purchase: {},
  preference: null,
  preOrder: {},
  getTickets:[]
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

    case "SAVE_PREFERENCE": {
      return { ...state, preference: action.payload };
    }
    case "SAVE_PREORDER": {
      return { ...state, preOrder: action.payload };
    }
    case GET_TICKETS: {
      return { ...state, getTickets: action.payload };
    }

    case GET_ARTISTS: {
      return {
        ...state,
        artists: action.payload,
      };
    }
    case GET_USER: {
      return {
        ...state,
        userDetail: action.payload,
      };
    }
    case UPDATE_USER: {
      const success = (status = true) => {
        Swal.fire({
          title: "Hey!",
          text: !status ? action.payload.error : "The user has been updated",
          icon: !status ? "error" : "success",
          confirmButtonText: "Ok",
        });
      };
      return {
        ...state,
        userDetail: action.payload.error ? state.userDetail : action.payload,
        userUpdareErr: action.payload.error ? action.payload.error && success(false) : "success" && success(),
      };
    }
    case UPDATE_PROFILE: {
      const success = (status = true) => {
        Swal.fire({
          title: "Hey!",
          text: !status ? action.payload.error : "Your info has been updated",
          icon: !status ? "error" : "success",
          confirmButtonText: "Ok",
        });
      };
      return {
        ...state,
        user: action.payload.error ? state.userDetail : action.payload,
        userUpdareErr: action.payload.error ? action.payload.error && success(false) : "success" && success(),
      };
    }
    case UPDATE_PASSWORD: {
      const success = (status = true) => {
        Swal.fire({
          title: "Hey!",
          text: !status ? action.payload.error : "The password has been updated",
          icon: !status ? "error" : "success",
          confirmButtonText: "Ok",
        });
      };
      return {
        ...state,
        userUpdareErr: action.payload.error ? action.payload.error && success(false) : "success" && success(),
      };
    }
    case CLEAR_USER: {
      return {
        ...state,
        userDetail: {},
      };
    }

    case GET_USERS: {
      return {
        ...state,
        usersList: action.payload,
      };
    }

    case GET_STAGES: {
      return {
        ...state,
        stages: action.payload,
      };
    }

    case GET_GENRES: {
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

    case CLEAR_UPDATE_ERR: {
      return {
        ...state,
        userUpdareErr: null,
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
      console.log(action.payload);
      const eventfinds = action.payload;
      console.log(eventfinds);
      console.log(eventfinds.length);
      const notfound = () => {
        document.getElementById("nameEvent").focus();
        Swal.fire({
          title: "Information",
          text: "No events found!",
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
      const notfound = (authError = action.payload.error) => {
        Swal.fire({
          title: "Hey!",
          text: action.payload.user? 'User registered success':`${authError}`,
          icon: authError === "There are missing parameters" ||  authError === "The email is already in use!"? "error" : "success",
          confirmButtonText: "Ok",
        });
      };
      return {
        ...state,
        user: action.payload.user ? "success" : "error",
        authError: action.payload.error? action.payload.error:null,
        messagge: action.payload && notfound(),
      };
    }

    case LOGIN_USER: {
      const errormsg = (authError = action.payload.error) => {
        Swal.fire({
          title: "Hey!",
          text: `${authError}`,
          icon: "error",
          confirmButtonText: "Ok",
        });
      };
      return {
        ...state,
        user: action.payload.user ? action.payload.user : "error",
        token: action.payload.token ? action.payload.token : "",
        authError: action.payload.error,
        messagge: action.payload.error? errormsg(): "",
      };
    }

    case LOGIN_TOKEN: {
      return {
        ...state,
        user: action.payload.user ? action.payload.user : "error",
        token: action.payload.token ? action.payload.token : "",
        tokenError: action.payload.error,
      };
    }

    case POST_STAGE: {
      return {
        ...state,
      };
    }
    case SEND_EMAIL_BUY: {
      const notfound = (info = action.payload) => {
        Swal.fire({
          title: "Hey!",
          text: `${info}`,
          icon: "success",
          confirmButtonText: "Ok",
        });
      };
      return {
        ...state,
        messagge: action.payload && notfound(),
      };
    }
    case SEND_EMAIL_RECOVER: {
      const notfound = (info = action.payload) => {
        Swal.fire({
          title: "Hey!",
          text: `${info}`,
          icon: info === "This email is not registered!" ? "error" : "success",
          confirmButtonText: "Ok",
        });
      };
      return {
        ...state,
        messagge: action.payload && notfound(),
      };
    }
    case SEND_EMAIL_REGISTER: {
      const notfound = (info = action.payload) => {
        Swal.fire({
          title: "Hey!",
          text: `${info}`,
          icon: info === "user existent" ? "error" : "success",
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
