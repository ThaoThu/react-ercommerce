import jwt_decode from "jwt-decode";
import { history } from "./history";
import Swal from "sweetalert2";
import Alert from "sweetalert2";
import Authen from "../services/api/authen";

export const userService = {
  verify,
  verifyNotRedirect,
  checkLogin,
};

export const showToast = (icon, message, timer = 3000) => {
  Swal.fire({
    position: "top-end",
    icon: icon,
    title: message,
    showConfirmButton: false,
    timer,
    timerProgressBar: true,
    onOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });
};

export const AlertError = (message) => {
  Alert.fire("Lỗi!", message, "error");
};
export const AlertDelete = async (objectName = "", title = "") => {
  let status = await Alert.fire({
    title: "Xác nhận",
    html: `<div class="table-responsive">
      <span>Bạn có chắc chắn muốn xóa ${objectName} <b>${title}</b>?<span>
    </div>`,

    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Đồng ý",
    cancelButtonText: "Hủy",
  });
  return new Promise((resolve, reject) => {
    resolve(status.value);
  });
};

export const AlertConfirm = async (account = "", flag) => {
  let isActive = flag ? "hủy kích hoạt" : "kích hoạt";
  let status = await Alert.fire({
    title: "Xác nhận",
    html: `<div class="table-responsive">
      <span>Bạn có chắc chắn muốn <b>${isActive}</b> tài khoản <b>${account}</b>?<span>
    </div>`,

    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Đồng ý",
    cancelButtonText: "Hủy",
  });
  return new Promise((resolve, reject) => {
    resolve(status.value);
  });
};
export const AlertConfirmRegister = async (account = "", flag) => {
  let isActive = flag ? "hủy đăng ký" : "đăng ký";
  let status = await Alert.fire({
    title: "Xác nhận",
    html: `<div class="popup-confirm-register">
      <span>Bạn có chắc chắn muốn <b>${isActive}</b> sổ liên lạc điện tử  cho <b>${account}</b>?<span>
    </div>`,

    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Đồng ý",
    cancelButtonText: "Hủy",
  });
  return status.value;
 
};


function haveCommonElement(array1 = [], array2 = []) {
  let flag = false;
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] == array2[j]) {
        flag = true;
        break;
      }
    }
  }
  return flag;
}

export function filterRoutes(routes) {
  const user = JSON.parse(localStorage.getItem("CJuser")) || {};
  const rolesUser = user.roles || [];
  const routesFinal = routes.filter((route = {}) => {
    const permissionRoute = route.roles || [];
    const flag = haveCommonElement(rolesUser, permissionRoute);
    return flag;
  });
  return routesFinal;
}

export function filterNavigations(navs = []) {
  console.log("navs", navs);
  const user = JSON.parse(localStorage.getItem("CJuser")) || {};
  const rolesUser = user.roles || [];
  const navsFinal = navs.map((nav = []) => {
    const navigation = { ...nav };

    if (!haveCommonElement(navigation.roles, rolesUser)) return {};

    if (
      !navigation.children &&
      haveCommonElement(navigation.roles, rolesUser)
    ) {
      return navigation;
    }

    const childrenNavs = navigation.children || [];
    const childerenNavsFinal = childrenNavs.filter((item) =>
      haveCommonElement(item.roles, rolesUser)
    );
    return { ...navigation, children: childerenNavsFinal };
  });
  return navsFinal;
}

function verify() {
  const authen = Authen.getInstance();
  if (!!authen.accessToken) {
    let content = jwt_decode(authen.accessToken);
    let now = Math.floor(Date.now() / 1000);
    if (content.exp < now) {
      showToast("warning", "Your session has expired. Please login again.");
      authen.clearAuthenObject();
      history.push("/login");
      history.go("/login");
      return false;
    }
    return true;
  }
  return false;
}

function verifyNotRedirect(user) {
  if (user && user.accessToken) {
    let content = jwt_decode(user.accessToken);
    let now = Math.floor(Date.now() / 1000);
    if (content.exp > now) return true;
    return false;
  }
  return false;
}

function checkLogin() {
  const user = JSON.parse(localStorage.getItem("CJuser")) || {};
  if (user.accessToken) {
    let content = jwt_decode(user.accessToken);
    let now = Math.floor(Date.now() / 1000);
    if (content.exp < now) {
      showToast("warning", "Your session has expired. Please login again.");
      localStorage.removeItem("CJuser");
      history.push("/login");
      history.go("/login");
      return false;
    }
    return true;
  }
  localStorage.removeItem("CJuser");
  history.push("/login");
  history.go("/login");
  return false;
}
