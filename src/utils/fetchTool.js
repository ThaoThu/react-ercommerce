import { Base64 } from "js-base64";
import { userService } from "./userServices";
import { history } from "./history";
import { responseCode, errorMessage } from "../constants/Constant";
import axios from "axios";
import { showToast } from "./userServices";
/*
  window.location.origin polyfill
 */
export const getLocationOrigin = () => {
  if (!window.location.origin) {
    window.location.origin = `${window.location.protocol}//${
      window.location.hostname
    }${window.location.port ? ":" + window.location.port : ""}`;
  }
  return window.location.origin;
};

/*
  query options:
 */
export const defaultOptions = {
  credentials: "same-origin",
};

export const postMethod = {
  method: "POST",
};

export const getMethod = {
  method: "GET",
};

export const requestOptions = (token) => {
  return {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: "Bearer " + token,
  };
};

export const jsonHeaderAuth = () => {
  let user = JSON.parse(localStorage.getItem("CJuser"));
  if (userService.verify(user))
    return {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${user.accessToken}`,
    };

  return {
    Accept: "application/json",
    "Content-Type": "application/json",
  };
};

export const jsonHeader = {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
};

/*
  query response helpers:
 */
// let check401 = 0;
// export const checkStatus = response => {
//   response = response || {}
//   let txtMessage = response.message || '';
//   if (response.status >= 200 && response.status < 300) {
//     return response;
//   } else if (response.status === responseCode.expiredToken) {
//     check401 += 1;
//     if (check401 === 1) {
//       notification.info({
//         message: 'Campus notification',
//         description: txtMessage ,
//       });
//       setTimeout(() => {
//         localStorage.clear();
//         history.push('/signin');
//         history.go('/signin');
//       }, 2000)
//     }
//     return response;
//   } else {
//     let message = response.message || txtMessage
//     notification.error({
//       message: 'Campus notification',
//       description: message ,
//     });
//     return response;
//   }
// };

export const parseJSON = (response) => {
  let res = response.json();
  return res;
};

/*
 general helpers
 */
export const encodeBase64 = (stringToEncode) => {
  return Base64.encode(stringToEncode);
};

export async function getRequest(url, params) {
  await axios(url, params)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      showToast("error", err.response.data.message);
    });
}

export async function postRequest(url, params) {
  let res = await axios
    .post(url, params)
    .then((resp) => {
      if (resp.data.status === responseCode.successCode) {
        return resp.data;
      } else {
        showToast("error", resp.data.message);
        return resp.data;
      }
    })
    .catch((err) => {
      console.log("err", err.response.data.message);
      showToast(
        "error",
        "error",
        (err && err.response && err.response.data.message) || errorMessage
      );
    });
  return res;
}
export function postRequestAuth(url, params) {
  let token = JSON.parse(localStorage.getItem("CJuser")).accessToken || "";

  let res = axios
    .post(url, params, {
      headers: { Authorization: "Bearer " + token },
    })
    .then((resp) => {
      if (resp.data.status === responseCode.successCode) {
        return resp.data;
      } else {
        showToast("error", resp.data.data);
        return resp.data;
      }
    })
    .catch((err) => {
      showToast(
        "error",
        (err && err.response && err.response.data.message) || errorMessage
      );
    });
  return res;
}
export function putRequestAuth(url, params) {
  let token = JSON.parse(localStorage.getItem("CJuser")).accessToken || "";

  let res = axios
    .put(url, params, {
      headers: { Authorization: "Bearer " + token },
    })
    .then((resp) => {
      if (resp.data.status === responseCode.successCode) {
        return resp.data;
      } else {
        showToast("error", resp.data.message);
        return resp.data;
      }
    })
    .catch((err) => {
      showToast(
        "error",
        (err && err.response && err.response.data.message) || errorMessage
      );
    });
  return res;
}
export function deleteRequestAuth(url, params) {
  let token = JSON.parse(localStorage.getItem("CJuser")).accessToken || "";
  let res = axios
    .delete(url, {
      headers: { Authorization: "Bearer " + token },
      data : {
        ...params
      }
    })
    .then((resp) => {
 
      if (resp.data.status === responseCode.successCode) {
        return resp.data;
      } else {
        showToast("error", resp.data.message);
        return resp.data;
      }
    })
    .catch((err) => {
      showToast(
        "error",
        (err && err.response && err.response.data.message) || errorMessage
      );
    });
  return res;
}
export function getRequestAuth(url, params) {
  let token = JSON.parse(localStorage.getItem("CJuser")).accessToken || "";
  let res = axios
    .get(url, {
      headers: { Authorization: "Bearer " + token },
    })
    .then((res) => {
      if (res.data.status === responseCode.successCode) return res.data;
      else {
        showToast("error", res.data.message);
      }
    })
    .catch((err) => {
      console.log(err.response);

      showToast(
        "error",
        (err && err.response && err.response.data.message) || errorMessage
      );
      if(err ?.response?.status === responseCode.expiredToken){
        history.push('/login')
      }
    });
  return res;
}
