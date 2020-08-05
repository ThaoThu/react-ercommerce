import {
  GET_DAN_TOC,
  GET_TON_GIAO,
  GET_HOP_DONG,
  GET_KHU_VUC,
  GET_LY_DO,
  GET_QUOC_GIA,
  GET_DIEN_CHINH_SACH,
  GET_TINH_THANH_PHO,
  GET_CAP_HOC,
  GET_TRANG_THAI,
} from "../actions/types";

const INITIAL_STATE = {
  dantoc: [],
  tongiao: [],
  hinhthuchopdong: [],
  khuvuc: [],
  lydonghihoc: [],
  quocgia: [],
  tinhthanhpho: [],
  dienchinhsach: [],
  caphoc: [],
  trangthaihs: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_DAN_TOC:
      return { ...state, dantoc: action.payload };
    case GET_TON_GIAO:
      return { ...state, tongiao: action.payload };
    case GET_HOP_DONG:
      return { ...state, hinhthuchopdong: action.payload };
    case GET_KHU_VUC:
      return { ...state, khuvuc: action.payload };
    case GET_LY_DO:
      return { ...state, lydonghihoc: action.payload };
    case GET_QUOC_GIA:
      return { ...state, quocgia: action.payload };
    case GET_TINH_THANH_PHO:
      return { ...state, tinhthanhpho: action.payload };
    case GET_DIEN_CHINH_SACH:
      return { ...state, dienchinhsach: action.payload };
    case GET_CAP_HOC:
      return { ...state, caphoc: action.payload };
    case GET_TRANG_THAI:
      return { ...state, trangthaihs: action.payload };
    default:
      return state;
  }
};
