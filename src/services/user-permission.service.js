import { navigation } from "../models";
import Authen from "./api/authen";
import { history } from "../utils/history";
import { showToast } from "../utils/userServices";
const PERMISSON_VIEW = true;
const PERMISSON_ADD = true;
const PERMISSON_EDIT = true;
const PERMISSON_DELETE = true;
const ROLES_SYSTEM = ["admin", "quanly_so", "quanly_phong", "quanly_truong"];

// 0 : sở , 1 : Phòng , 2 : Trường
const ROLES_LEVEL_0 = {
  // Permissions Trường
  "module_canhan_ho-so": [],
  module_canhan_lichgiangday: [],
  "module_daotao_danh-gia": [],
  "module_daotao_danhgia-dinhky": [],
  "module_daotao_danhgia-tonghop": [],
  module_daotao_soghidiem: [],
  module_daotao_diem: [],
  module_daotao_duyetdiem: [],
  "module_daotao_ho-so-lop-hoc": [],
  module_daotao_nhapdiem: [],
  "module_daotao_thoi-khoa-bieu": [],
  "module_hocsinh_bien-dong": [],
  "module_hocsinh_chuyen-lop": [],
  "module_hocsinh_thuc-don": [],
  "module_hocsinh_suc-khoe": [],
  "module_hocsinh_thong-bao": [],
  "module_hocsinh_danh-sach": [],
  module_truonghoc_hoso: [],
  "module_truonghoc_nhan-su": [],
  module_truonghoc_tintuc: [],
  module_truonghoc_tintuc: [],
  // Permissions Phòng
  "module_phong-giao-duc_ho-so": [],
  "module_phong-giao-duc_can-bo": [],
  "module_phong-giao-duc_truong-hoc": [],
  "module_phong-giao-duc_phong-ban": [],
  // Permissions Hệ thống
  "module_hethong_phan-quyen": [],
  // Permissions Sở
};
const ROLES_LEVEL_1 = {
  // Permissions Hệ thống
  "module_hethong_phan-quyen": [],
  // Permissions Trường
  "module_hocsinh_bien-dong": [],
  "module_hocsinh_chuyen-lop": [],
  "module_hocsinh_suc-khoe": [],
  "module_hocsinh_thuc-don": [],
  module_truonghoc_hoso: [],
  "module_truonghoc_nhan-su": [],
  module_truonghoc_tintuc: [],
  "module_canhan_ho-so": [],
  module_canhan_lichgiangday: [],
  "module_daotao_danh-gia": [],
  "module_daotao_danhgia-dinhky": [],
  "module_daotao_danhgia-tonghop": [],
  module_daotao_diem: [],
  module_daotao_duyetdiem: [],
  module_daotao_soghidiem: [],
  "module_daotao_ho-so-lop-hoc": [],
  module_daotao_nhapdiem: [],
  "module_daotao_thoi-khoa-bieu": [],
  // Permissions Sở
  "module_so-giao-duc_ho-so": [],
  "module_so-giao-duc_canbo": [],
  "module_so-giao-duc_phong-giao-duc": [],
  "module_so-giao-duc_phong-ban": [],
  "module_so-giao-duc_thong-bao": [],
  "module_so-giao-duc_truong-truc-thuoc": [],

  // Permissions Phòng
  "module_hocsinh_danh-sach": [],
  "module_hocsinh_bien-dong": [],
  "module_hocsinh_suc-khoe": [],
  "module_hocsinh_thuc-don": [],
  "module_hocsinh_chuyen-lop": [],
  "module_hocsinh_chuyen-lop": [],
  "module_hocsinh_thong-bao": [],
  "module_hocsinh_suc-khoe": [],
};

const ROLES_LEVEL_2 = {
  // Permissions Hệ thống
  "module_hethong_danh-muc": [],
  "module_hethong_phan-quyen": [],
  // Permissions Sở
  "module_so-giao-duc_ho-so": [],
  "module_so-giao-duc_canbo": [],
  "module_so-giao-duc_phong-giao-duc": [],
  "module_so-giao-duc_phong-ban": [],
  "module_so-giao-duc_thong-bao": [],
  "module_so-giao-duc_truong-truc-thuoc": [],
  // Permissions Phòng
  "module_phong-giao-duc_ho-so": [],
  "module_phong-giao-duc_can-bo": [],
  "module_phong-giao-duc_truong-hoc": [],
  "module_phong-giao-duc_phong-ban": [],
  // Permissions Trường
  "module_hethong_nguoi-dung": [true, false, false, false],
  "module_hocsinh_thuc-don": [],
};

const ROLES_LEVEL_2_TIEU_HOC = {
  // Permissions Hệ thống
  "module_hethong_danh-muc": [],
  "module_hethong_phan-quyen": [],
  // Permissions Sở
  "module_so-giao-duc_ho-so": [],
  "module_so-giao-duc_canbo": [],
  "module_so-giao-duc_phong-giao-duc": [],
  "module_so-giao-duc_phong-ban": [],
  "module_so-giao-duc_thong-bao": [],
  "module_so-giao-duc_truong-truc-thuoc": [],
  // Permissions Phòng
  "module_phong-giao-duc_ho-so": [],
  "module_phong-giao-duc_can-bo": [],
  "module_phong-giao-duc_truong-hoc": [],
  "module_phong-giao-duc_phong-ban": [],
  // Permissions Trường
  "module_hethong_nguoi-dung": [true, false, false, false],
  "module_hocsinh_thuc-don": [true, true, true, true],
  "module_daotao_soghidiem": []
};

const ROLES_LEVEL_2_MAM_NON = {
  // Permissions Hệ thống
  "module_hethong_danh-muc": [],
  "module_hethong_phan-quyen": [],
  // Permissions Sở
  "module_so-giao-duc_ho-so": [],
  "module_so-giao-duc_canbo": [],
  "module_so-giao-duc_phong-giao-duc": [],
  "module_so-giao-duc_phong-ban": [],
  "module_so-giao-duc_thong-bao": [],
  "module_so-giao-duc_truong-truc-thuoc": [],
  // Permissions Phòng
  "module_phong-giao-duc_ho-so": [],
  "module_phong-giao-duc_can-bo": [],
  "module_phong-giao-duc_truong-hoc": [],
  "module_phong-giao-duc_phong-ban": [],
  // Permissions Trường
  module_daotao_soghidiem: [],
  "module_hethong_nguoi-dung": [true, false, false, false],
  "module_daotao_thoi-khoa-bieu": [],
  module_daotao_nhapdiem: [],
  module_daotao_duyetdiem: [],
  "module_daotao_danhgia-dinhky": [],
  "module_daotao_danhgia-tonghop": [],
  module_canhan_lichgiangday: [],
  "module_canhan_ho-so": [],
  module_daotao_diem: [],
  "module_daotao_danh-gia": [],
  "module_hocsinh_thuc-don": [true, true, true, true],
};
export default class Permissions {
  authen = Authen.getInstance();
  permissons = {};
  module = [];
  systemPermisson = [];
  roles = [];
  inited = false;
  static instance;

  static getInstance() {
    if (!this.instance) {
      this.instance = new Permissions();
    }
    return this.instance;
  }

  generatePermissonSystem() {
    let generatePermisson = {};
    this.module.forEach((item) => {
      var obj = {
        [item]: [
          PERMISSON_VIEW,
          PERMISSON_ADD,
          PERMISSON_EDIT,
          PERMISSON_DELETE,
        ],
      };
      generatePermisson = { ...generatePermisson, ...obj };
    });
    let permissions = {
      admin: this.setPermissonUser("admin", generatePermisson),
      quanly_so: this.setPermissonUser("quanly_so", generatePermisson),
      quanly_phong: this.setPermissonUser("quanly_phong", generatePermisson),
      quanly_truong: this.setPermissonUser("quanly_truong", generatePermisson),
      quanly_mamnon: this.setPermissonUser("quanly_mamnon", generatePermisson),
      quanly_truong_tieuhoc: this.setPermissonUser(
        "quanly_truong_tieuhoc",
        generatePermisson
      ),
    };
    console.log("Init Permisson System", permissions);
    this.permissons = permissions;
    return new Promise((resolve, reject) => {
      resolve(permissions);
    });
  }

  generateModule() {
    let { items } = navigation;
    let arr = [];
    items.forEach((e) => {
      if (!e.children) return;
      e.children.forEach((item) => {
        let name = this.convertUrlToModuleName(item.url);
        arr.push(name);
        if (item.children.length > 0) {
          item.children.forEach((el) => {
            let name = this.convertUrlToModuleName(el.url);
            arr.push(name);
          });
        }
      });
    });
    this.module = arr;
    return new Promise((resolve, reject) => {
      resolve(arr);
    });
  }

  async initPermisson() {
    if (this.inited) return;
    await this.generateModule();
    await this.generatePermissonSystem();
    let authenJson = localStorage.getItem("CJuser");
    if (authenJson) {
      let authenObj = JSON.parse(authenJson);
      this.roles = authenObj["roles"];
      this.callbackPermissonModule();
      this.inited = true;
    } else {
      this.inited = true;
    }
    console.log("Permisson service initialized!");
  }

  checkRolesInSystem(roles) {
    let role = [];
    if (roles) {
      roles.forEach((e) => {
        if (ROLES_SYSTEM.indexOf(e) !== -1) role.push(e);
      });
    }
    return role;
  }

  callBackRolerUser = (level, bachocId) => {
    let roles = [];
    switch (level) {
      case 0:
        roles.push("quanly_so");
        break;
      case 1:
        roles.push("quanly_phong");
        break;
      case 2:
        if (bachocId == 1) {
          roles.push("quanly_mamnon");
        } else {
          if (bachocId == 2) {
            roles.push("quanly_truong_tieuhoc");
          } else {
            roles.push("quanly_truong");
          }
        }
        break;
      default:
        break;
    }
    return roles;
  };

  flagPermissonModule(module) {
    let flag = [];
    let flagPermisson = [];
    let roles = this.checkRolesInSystem(this.authen.roles);
    // roles = ["quanly_so"]
    // roles = ["quanly_phong"]
    // roles = ["quanly_truong"]
    // roles = ["quanly_mamnon"]
    if (roles.length === 0) {
      let levelUser = this.authen.level;
      let bachhocId = this.authen?.noicongtac?.bachocId;
      roles = this.callBackRolerUser(levelUser, bachhocId);
      if (roles.length === 0) {
        this.authen.clearAuthenObject();
        history.push("/login");
        showToast(
          "warning",
          "Tài khoản của bạn không có quyền truy cập vào hệ thống",
          5000
        );
        return;
      }
    }
    for (let i = 0; i < roles.length; i++) {
      let index = roles[i];
      if (!!this.permissons[index]) {
        let permission = this.permissons[index];
        if (!!permission[module]) {
          if (flagPermisson.length > 0) {
            for (let j = 0; j < 4; j++) {
              flagPermisson[j] || !!permission[module][j]
                ? (flagPermisson[j] = true)
                : (flagPermisson[j] = false);
            }
          } else {
            for (let k = 0; k < 4; k++) {
              !!permission[module][k]
                ? flagPermisson.push(true)
                : flagPermisson.push(false);
            }
          }
        }
      }
    }
    for (let index = 0; index < 4; index++) {
      !!flagPermisson[index] ? flag.push(true) : flag.push(false);
    }
    return flag;
  }

  getPermissonFromPath(path) {
    let name = this.convertUrlToModuleName(path);
    let flag = this.flagPermissonModule(name);
    return flag;
  }

  callbackPermissonModule() {
    let systemPermisson = [];
    this.module.forEach((e) => {
      let flag = this.flagPermissonModule(e);
      systemPermisson[e] = flag;
    });
    this.systemPermisson = systemPermisson;
    return systemPermisson;
  }

  convertUrlToModuleName(path) {
    let x = path.split("/");
    let name = "module";
    x.forEach((el) => {
      if (el) name += "_" + el;
    });
    return name;
  }
  cleanNavs(navs = []) {
    const navsFinal = navs.filter((item) => {
      return item.children.length > 0;
    });
    return navsFinal;
  }
  isEmpty = (v) => {
    return Object.keys(v).length === 0;
  };

  cleanNavsChild = (navs) => {
    let navsFinal = [];
    navsFinal = navs.map((items) => {
      const navParent = { ...items };
      let nav = items.children.map((e) => {
        const navigation = { ...e };
        if (!navigation.children) return navigation;
        let childNav = e.children.filter((el) => {
          let moduleName = this.convertUrlToModuleName(el.url);
          let permissonModule = this.flagPermissonModule(moduleName);
          let flag = permissonModule
            ? permissonModule
            : [false, false, false, false];
          return flag[0];
        });
        return { ...navigation, children: childNav };
      });
      return { ...navParent, children: nav };
    });
    return navsFinal;
  };

  initNavigations() {
    let navs = navigation.items;
    if (this.isEmpty(this.permissons)) return;
    this.callbackPermissonModule();
    let navsFinal = [];
    navsFinal = navs.map((nav = []) => {
      const navigation = { ...nav };
      if (!navigation.children) return navigation;
      const childrenNavs = navigation.children || [];
      let childerenNavsFinal = childrenNavs.filter((item) => {
        let moduleName = this.convertUrlToModuleName(item.url);
        let permissonModule = this.flagPermissonModule(moduleName);
        let flag = permissonModule
          ? permissonModule
          : [false, false, false, false];
        return flag[0];
      });
      return { ...navigation, children: childerenNavsFinal };
    });
    navsFinal = this.cleanNavs(navsFinal);
    console.log("level1", navsFinal);
    navsFinal = this.cleanNavsChild(navsFinal);
    console.log("level2", navsFinal);
    return navsFinal;
  }

  setPermissonUser(key, obj = {}) {
    // Convention generate module name : module_ + path ( thay "/" bằng "_")
    switch (key) {
      case "admin":
        return { ...obj };
      case "quanly_so":
        return { ...obj, ...ROLES_LEVEL_0 };
      case "quanly_phong":
        return { ...obj, ...ROLES_LEVEL_1 };
      case "quanly_truong":
        return { ...obj, ...ROLES_LEVEL_2 };
      case "quanly_mamnon":
        return { ...obj, ...ROLES_LEVEL_2_MAM_NON };
      case "quanly_truong_tieuhoc":
        return { ...obj, ...ROLES_LEVEL_2_TIEU_HOC };
      default:
        return [];
    }
  }
}
