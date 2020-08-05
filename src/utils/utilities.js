import moment from "moment";
import Alert from "sweetalert2";
import Config from "../services/config";

export function formatStringToCammelcase(str) {
  if (!str || typeof str !== "string") return -1;
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}
export function ValidateIPaddress(ipaddress) {
  if (
    /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
      ipaddress
    )
  ) {
    return true;
  }
  return false;
}
export function warningPermisson() {
  Alert.fire("Xin lỗi", "Bạn không có quyền sử dụng chức năng này!", "warning");
  return;
}
export function convertUrlToModuleName(path) {
  let x = path.split("/");
  let name = "module";
  x.forEach((el) => {
    if (el) name += "_" + el;
  });
  return name;
}

export function format(x) {
  return x ? parseFloat(x.toFixed(8)) : 0.0;
}

export function convertDatetime(timeStamp) {
  return moment.unix(timeStamp).format("DD-MM-YYYY HH:mm:ss");
}
export function sliceDate(date) {
  if (date) return moment(date).format("DD/MM/YYYY");
  return null;
}

export function formatPhoneNumber(str) {
  let cleaned = ('' + str).replace(/\D/g, '');
  let match = cleaned.match(/^(\d{4})(\d{3})(\d+)$/);

  if (match) {
    return match[1] + '.' + match[2] + '.' + match[3]
  };

  return str;
}

export function convertUrlImage(image, size = "400x400") {
  let url = image;
  let config = Config.getInstance();
  let base_url = config.base_url;
  if (image && image.indexOf("/mccdiag137.blob.core.windows.net/") > 0) {
    url = base_url + `/${size}/` + image;
  }
  return url;
}

export function makeRandomName(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export function getTen(ten) {
  if (ten) {
    let result = ten.split(" ");
    return result[result.length - 1];
  }
  return null;
}

export function convertTimeStamp(date) {
  return moment(date).format("X");
}

export function getDate(timestamp) {
  if (typeof timestamp !== "number") return timestamp;
  return moment
    .unix(timestamp)
    .format()
    .slice(0, 10);
}

export function getTimes(timestamp) {
  if (typeof timestamp !== "number") return timestamp;
  return moment.unix(timestamp).format("HH:mm");
}

export function getTimesToMiniSec(timestamp) {
  if (typeof timestamp !== "number") return timestamp;
  return moment.unix(timestamp).format("HH:mm:ss");
}

// export function getUrlParameter(key, url) {
//   key = key.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
//   let regex = new RegExp("[\\?&]" + key + "=([^&#]*)");
//   let results = regex.exec(url);
//   return results === null
//     ? ""
//     : decodeURIComponent(results[1].replace(/\+/g, " "));
// }

export function readFile(file) {
  return new Promise(function(resolve, reject) {
    var reader = new FileReader();
    reader.onload = function(event) {
      resolve(event.target.result);
    };
    reader.onerror = reject;
    reader.readAsArrayBuffer(file);
  });
}

export function getExtension(fileName) {
  return fileName.split(".").pop();
}

// export function normalString(text, type) {
//   switch (type) {
//     case "email":
//       return text.replace(/[!~#$%&()|+\=?;,*\^<>\{\}\[\]\\\/]/gi, "");
//     case "name":
//       return text.replace(/[!~@#$%&()_|+\=?;,*.\^<>\{\}\[\]\\\/]/gi, "");
//       break;
//     case "postalCode":
//       return text.replace(/[^A-Za-z0-9\-| ]/gi, "");
//       break;
//     case "phone":
//       return text.replace(/[^0-9 ]/gi, "");
//       break;
//     default:
//       return text.trim();
//   }
// }

export function getStartOfDate(timestamp) {
  var date = new Date(timestamp * 1000);
  date.setHours(0, 0, 0, 0);
  return date.getTime() / 1000;
}

export function getEndOfDate(timestamp) {
  var date = new Date(timestamp * 1000);
  date.setHours(23, 59, 59, 999);
  return date.getTime() / 1000;
}
export function changeObjectToUrl(params) {
  let arr = [];
  for (var i in params) {
    if (params[i]) {
      arr.push(`${i}=${params[i]}`);
    }
  }
  return "?" + arr.join("&");
}

export function convertPhone(p) {
  let phone = p + "";
  if (phone[0] === "+") return phone;
  return "+84" + phone.slice(1);
}

export function getDatesInWeek(_date) {
  const arr = [];
  for (let i = -7; i <= 7; i++) {
    arr.push(
      "" +
        moment(_date)
          .add(i, "day")
          .format()
    );
  }
  return arr;
}

export function getNameDinner(code) {
  switch (code) {
    case 1:
      return "sang";
      break;
    case 2:
      return "phusang";
      break;
    case 3:
      return "trua";
      break;
    case 4:
      return "chieu";
      break;
    case 5:
      return "phuchieu";
      break;
  }
}

export function changeCode(code) {
  if (code < 6) {
    return "S" + code;
  } else {
    let c = code - 5;
    return "C" + c;
  }
}
export function formatPoint(n, f) {
  if (n === undefined || n === null) return 0;
  if (f > 0)
    return parseFloat(n)
      .toFixed(f)
      .replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
  else return n.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function getYearSchool(_date) {
  const currentMonth = moment().format("MM");
  const monthNumber = +moment()
    .month(currentMonth)
    .format("MM");
  const currentYear = +moment().format("YYYY");
  if (monthNumber > 8) {
    return currentYear + "-" + currentYear + 1;
  }
  return currentYear - 1 + "-" + currentYear;
}

export function getInfoAccount() {
  return JSON.parse(localStorage.getItem("CJuser")) || {};
}
export function formatDateISO8601(date) {
  if (date) {
    return moment(date).format("DD-MM-YYYY");
  }
}

export const chartColors = [
  '#39A2EB',
  '#F86383',
  '#4BC0C0',
  '#FACE55',
  '#EC932F',
  '#79F2E8',
  '#97DBDB',
  '#F278E9',
  '#F27882'


  // "#4473C5",
  // "#FEC101",
  // "#B4A126",
  // "#8CBA1A",
  // "#3E97CF",
  // "#783F68",
  // "#50000E",
  // "#E01400",
  // "#8C8800",
  // "#004D4D",
  // "#580093",
  // "#0094AE"

  // "#336699",
  // "#99CCFF",
  // "#999933",
  // "#666699",
  // "#CC9933",
  // "#006666",
  // "#3399FF",
  // "#993300",
  // "#CCCC99",
  // "#666666",
  // "#FFCC66",
  // "#6699CC",
  // "#663366",
  // "#9999CC",
  // "#CCCCCC",
  // "#669999",
  // "#CCCC66",
  // "#CC6600",
  // "#9999FF",
  // "#0066CC",
  // "#99CCCC",
  // "#999999",
  // "#FFCC00",
  // "#009999",
  // "#99CC33",
  // "#FF9900",
  // "#999966",
  // "#66CCCC",
  // "#339966",
  // "#CCCC33",
  // "#003f5c",
  // "#665191",
  // "#a05195",
  // "#d45087",
  // "#2f4b7c",
  // "#f95d6a",
  // "#ff7c43",
  // "#ffa600",
  // "#EF6F6C",
  // "#465775",
  // "#56E39F",
  // "#59C9A5",
  // "#5B6C5D",
  // "#0A2342",
  // "#2CA58D",
  // "#84BC9C",
  // "#CBA328",
  // "#F46197",
  // "#DBCFB0",
  // "#545775",
]; // wheel color

export function trimStringInArray(str) {
  return str.replace(/\s{2,}/g, "").split(",");
}
export function filterQueryObject(object) {

  if (!Object.keys(object).length) return null;
  for (const key in object) {
    if (object[key]==='' || typeof object[key]=== null || typeof object[key] ==='undefined' ) {
      delete object[key];
    }
  }
console.log(object)
  return object;
}
