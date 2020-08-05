import {
  GET_DAN_TOC,
  GET_TON_GIAO,
  GET_HOP_DONG,
  GET_KHU_VUC,
  GET_LY_DO,
  GET_QUOC_GIA,
  GET_TINH_THANH_PHO,
  GET_DIEN_CHINH_SACH,
  GET_CAP_HOC,
  GET_TRANG_THAI,
} from "./types";
import {
  onloadDantoc,
  onloadTongiao,
  onloadHopdong,
  onloadKhuvuc,
  onloadLydonghihoc,
  onloadQuoctich,
  onloadDienchinhsach,
  onloadTinhthanhpho,
  onloadCapHoc,
  onloadTrangThai,
} from "../../services/user";

export const getDantoc = () => {
  return (dispatch) => {
    return onloadDantoc()
      .then((data) => getDantocSuccess(dispatch, data))
      .catch((error) => {
        console.log(error);
      });
  };
};
export const getTrangThai = () => {
  return (dispatch) => {
    return onloadTrangThai()
      .then((data) => getTrangThaiSuccess(dispatch, data))
      .catch((error) => {
        console.log(error);
      });
  };
};

export const getCapHoc = () => {
  return (dispatch) => {
    return onloadCapHoc()
      .then((data) => getCapHocSuccess(dispatch, data))
      .catch((error) => {
        console.log(error);
      });
  };
};

export const getDienchinhsach = () => {
  return (dispatch) => {
    return onloadDienchinhsach()
      .then((data) => getDienchinhsachSuccess(dispatch, data))
      .catch((error) => {
        console.log(error);
      });
  };
};
const getDienchinhsachSuccess = (dispatch, data) => {
  dispatch({
    type: GET_DIEN_CHINH_SACH,
    payload: data,
  });
};

export const getTongiao = () => {
  return (dispatch) => {
    return onloadTongiao()
      .then((data) => getTongiaoSuccess(dispatch, data))
      .catch((error) => {
        console.log(error);
      });
  };
};

const getDantocSuccess = (dispatch, data) => {
  dispatch({
    type: GET_DAN_TOC,
    payload: data,
  });
};
const getTrangThaiSuccess = (dispatch, data) => {
  dispatch({
    type: GET_TRANG_THAI,
    payload: data,
  });
};
const getCapHocSuccess = (dispatch, data) => {
  dispatch({
    type: GET_CAP_HOC,
    payload: data,
  });
};
const getTongiaoSuccess = (dispatch, data) => {
  dispatch({
    type: GET_TON_GIAO,
    payload: data,
  });
};
export const getHinhthuchopdong = () => {
  return (dispatch) => {
    return onloadHopdong()
      .then((data) => getHopdongSuccess(dispatch, data))
      .catch((error) => {
        console.log(error);
      });
  };
};

const getHopdongSuccess = (dispatch, data) => {
  dispatch({
    type: GET_HOP_DONG,
    payload: data,
  });
};

export const getKhuvuc = () => {
  return (dispatch) => {
    return onloadKhuvuc()
      .then((data) => getKhuvucSuccess(dispatch, data))
      .catch((error) => {
        console.log(error);
      });
  };
};

const getKhuvucSuccess = (dispatch, data) => {
  dispatch({
    type: GET_KHU_VUC,
    payload: data,
  });
};
export const getLydonghihoc = () => {
  return (dispatch) => {
    return onloadLydonghihoc()
      .then((data) => getLydoSuccess(dispatch, data))
      .catch((error) => {
        console.log(error);
      });
  };
};

const getLydoSuccess = (dispatch, data) => {
  dispatch({
    type: GET_LY_DO,
    payload: data,
  });
};

export const getQuocgia = () => {
  return (dispatch) => {
    return onloadQuoctich()
      .then((data) => getQuocgiaSuccess(dispatch, data))
      .catch((error) => {
        console.log(error);
      });
  };
};

const getQuocgiaSuccess = (dispatch, data) => {
  dispatch({
    type: GET_QUOC_GIA,
    payload: data,
  });
};

export const getTinhthanhpho = () => {
  return (dispatch) => {
    return onloadTinhthanhpho()
      .then((data) => getTinhthanhphoSuccess(dispatch, data))
      .catch((error) => {
        console.log(error);
      });
  };
};

const getTinhthanhphoSuccess = (dispatch, data) => {
  dispatch({
    type: GET_TINH_THANH_PHO,
    payload: data,
  });
};
