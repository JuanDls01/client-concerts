//Here we import all de actions creator:

import getEventDetail, { GET_EVENT_DETAIL } from './getEventDetail';
import filtEvents, { FILT_EVENTS } from './actionFiltEvents';
import getGenres, { GET_GENRES } from './actionGenres';
import cleanEventDetail, { CLEAN_EVENT_DETAIL } from './cleanEventDetail';
import getEvents, { GET_EVENTS } from './getEvents';
import getNameEvent, { GET_NAME_EVENT } from './getNameEvent';
import postStage, { POST_STAGE } from './postStage';
import registerUser, { REGISTER_USER } from './registerUser';
import postArtist, {POST_ARTIST} from './postRegisterArtist';
import loginUser, { LOGIN_USER } from './loginUser';
import loginToken, { LOGIN_TOKEN } from './loginToken';
import clearAuthError, { CLEAR_AUTH_ERR } from './clearAuthErr';
import logout, { LOGOUT } from './logout';
import sendEmailRecover,{SEND_EMAIL_RECOVER} from './sendEmailRecover'; 
import sendEmailRegister,{SEND_EMAIL_REGISTER} from './sendEmailRegister';
import getUser, { GET_USER } from './getUser';
import getUsers, { GET_USERS } from './getUsers';
import clearUser, { CLEAR_USER } from './clearUser';
import updateUser, { UPDATE_USER } from './updateUser';
import clearUpdateErr, { CLEAR_UPDATE_ERR } from './clearUpdateErr';

export const actions = {
    GET_EVENTS,
    GET_EVENT_DETAIL,
    GET_GENRES,
    FILT_EVENTS,
    CLEAN_EVENT_DETAIL,
    GET_NAME_EVENT,
    POST_STAGE,
    REGISTER_USER,
    POST_ARTIST,
    LOGIN_USER,
    LOGIN_TOKEN,
    CLEAR_AUTH_ERR,
    LOGOUT,
    SEND_EMAIL_RECOVER,
    SEND_EMAIL_REGISTER,
    GET_USER,
    GET_USERS,
    CLEAR_USER,
    UPDATE_USER,
    CLEAR_UPDATE_ERR
}

const actionsCreator = {
    getEvents,
    getEventDetail,
    filtEvents,
    getGenres,
    cleanEventDetail,
    getNameEvent,
    postStage,
    registerUser,
    postArtist,
    loginUser,
    loginToken,
    clearAuthError,
    logout,
    sendEmailRecover,
    sendEmailRegister,
    getUser,
    getUsers,
    clearUser,
    updateUser,
    clearUpdateErr
}

export default actionsCreator;
