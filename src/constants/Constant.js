import moment from "moment";

export const errorMessage = "System maintenance!";
export const regexEmail = /^([\w.%+-]){6,30}@([\w-]+\.)+([\w]{2,})$/i;
export const inValidEmailMessage = "Invalid email";
export const regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*(\[\]\~\`)\-@%&]).{8,30}$/;
export const invalidPassMessage =
  "Your password must contain from 8 to 30 characters length, include in uppercase letter, lowercase letter, number and special character supported";
export const regexCode = /^[a-zA-Z0-9]*$/;
export const regexPhone = /(84[3|7|8|9|5]|0[3|7|8|9|5])+([0-9]{8})\b/; // change from || to |
// export const regexPhone = /0[9|8|1|7|3|5]([0-9]|\s|-|\.){8,12}/
// (84[3|7|8|9|5]||0[3|7|8|9|5])+([0-9]{8})\b
export const invalidPhone = 'Số điện thoại không hợp lệ'
export const noTextDefault = 'Vui lòng chọn điều kiện tìm kiếm'
export const noData = 'Không tìm thấy dữ liệu'
export const inValidCodeMessage = "Invalid email code";
export const regexCode2FA = /^[0-9]{1,6}$/;
export const inValidCode2FAMessage = "Invalid Authenticate code";
export const regexCodeNumberReal = /^[0-9]*\.?[0-9]*/;
export const inValidNumberMessage = "Please input number";
export const notEnoughAge = 'Chưa đủ 18 tuổi'
export const responseCode = {
  successCode: 200,
  expiredToken: 401,
  errorCode: 400,
};

export const message = {
  add_success: "Thêm mới thành công",
  update_success: "Cập nhật thành công",
  delete_success: "Xóa thành công",
  noData: "Không tìm thấy dữ liệu",
  customNoData: "Vui lòng chọn điều kiện tìm kiếm",
};
export const regexFindNumber = /\d+/;
export const nhomtuoiOption = [
  {
    label: "3-12 Tháng",
    value: "nhomtuoi1",
    type: "M",
  },
  {
    label: "13-24 Tháng",
    value: "nhomtuoi2",
    type: "M",
  },
  {
    label: "25-36 Tháng",
    value: "nhomtuoi3",
    type: "M",
  },
  {
    label: "3-4 Tuổi",
    value: "nhomtuoi4",
    type: "Y",
  },
  {
    label: "4-5 Tuổi",
    value: "nhomtuoi5",
    type: "Y",
  },
  {
    label: "5-6 Tuổi",
    value: "nhomtuoi6",
    type: "Y",
  },
];

export const hocbantruOptions = [
  {
    label: "Thuộc đối tượng chính sách",
    value: "dtchinhsach",
  },
  {
    label: "Tự nguyện",
    value: "tunguyen",
  },
];
export const mondayMn = [
  {
    label: "Mẫu giáo",
    value: "maugiao",
  },
  {
    label: "Nhà trẻ",
    value: "nhatre",
  },
];

export const tinhTrangDK = [
  {
    label : 'Tất cả',
    value : ''
  }, 
  {
    label : 'Đã đăng ký',
    value : true
  },
  {
    label : 'Chưa đăng ký',
    value : false
  },
]
const errNamsinh = "Năm sinh không hợp lệ";
export const validateNamsinh =  {
  max: {
    value: +moment().year() - 18,
    errorMessage: errNamsinh,
  },
  min: {
    value: +moment().year() - 70,
    errorMessage: errNamsinh,
  },
}
export const validateSodt = {
  pattern: {
    value: regexPhone,
    errorMessage: invalidPhone,
  },
}
export const dsKhuyettat = [
  
  { label: "Khuyết tật vận động", value: 1 },
  { label: "Khuyết tật nghe nói", value: 2 },
  { label: "Khuyết tật nhìn", value: 3 },
  { label: "Khuyết tật thần kinh tâm thần", value: 4 },
  { label: "Khuyết tật trí tuệ", value: 5 },
  { label: "Khuyết tật khác", value: 6 },
];
