import {
  INIT_LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  CLEAR_ERROR,
  DISCONNECT_SUCCESS,
} from "./types";

import { userConnect, userDisconnect } from "../../services/user";

export const initLogin = () => {
  return { type: INIT_LOGIN };
};
export const clearError = () => {
  return { type: CLEAR_ERROR };
};

export const userLogin = ({ email, password }) => {
  return (dispatch) => {
    return userConnect(email, password)
      .then((user) => loginSuccess(dispatch, user))
      .catch((error) => loginFail(dispatch, error));
  };
};

const loginFail = (dispatch, error) => {
  dispatch({
    type: LOGIN_FAIL,
    payload: error,
  });
};

const loginSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_SUCCESS,
    payload: user,
  });
};

export const userLogout = () => {
  return (dispatch) => {
    return userDisconnect().then(() => {
      dispatch({ type: DISCONNECT_SUCCESS });
    });
  };
};
