import Authen from '../api/authen';
import API from '../api';
import { showToast } from "../../utils/userServices";

export const userConnect = async (email, password) => {
    let [err, res] = await API.userService.login(email,password)
    if(res){
      return new Promise((resolve,reject) =>{
        resolve(res.data)
      })
    }else{
      showToast('error',err || "Vui lòng thử lại sau")
    }
    
}

export const onloadDantoc = async () => {
  let [err, res] = await API.commonService.getDantoc();
  if(res){
    res.data.sort((a,b)=> a.ten.localeCompare(b.ten))
    const dantocOptions = res.data.map((e) => {
      return {
        value: e.id,
        label: e.ten,
      };
    });
    return new Promise((resolve,reject) =>{
      resolve(dantocOptions)
    })
  }else{
    showToast('error',err || "Vui lòng thử lại sau")
  }
}

export const onloadTongiao = async () => {
  let [err, res] = await API.commonService.getTongiao();
  if(res){
    const tongiaoOptions = res.data.map((e) => {
      return {
        value: e.id,
        label: e.ten,
      };
    });
    return new Promise((resolve,reject) =>{
      resolve(tongiaoOptions)
    })
  }else{
    showToast('error',err || "Vui lòng thử lại sau")
  }
}

export const onloadQuoctich = async () => {
  let [err, res] = await API.commonService.getQuocgia();
  if(res){
    const quocgiaOptions = res.data.map((e) => {
      return {
        value: e.id,
        label: e.ten,
      };
    });
    return new Promise((resolve,reject) =>{
      resolve(quocgiaOptions)
    })
  }else{
    showToast('error',err || "Vui lòng thử lại sau")
  }
}

export const onloadTinhthanhpho = async () => {
  let [err, res] = await API.commonService.getTinhthanhpho();
  if(res){
    const tinhthanhphoOptions = res.data.map((e) => {
      return {
        value: e.id,
        label: e.ten,
      };
    });
    return new Promise((resolve,reject) =>{
      resolve(tinhthanhphoOptions)
    })
  }else{
    showToast('error',err || "Vui lòng thử lại sau")
  }
}

export const onloadKhuvuc = async () => {
  let [err, res] = await API.commonService.getKhuvuc();
  if(res){
    const khuvucOptions = res.data.map((e) => {
      return {
        value: e.id,
        label: e.ten,
      };
    });
    return new Promise((resolve,reject) =>{
      resolve(khuvucOptions)
    })
  }else{
    showToast('error',err || "Vui lòng thử lại sau")
  }
}

export const onloadLydonghihoc = async () => {
  let [err, res] = await API.commonService.getLyDoNghiHoc();
  if(res){
    const lydoOptions = res.data.map((e) => {
      return {
        value: e.id,
        label: e.ten,
      };
    });
    return new Promise((resolve,reject) =>{
      resolve(lydoOptions)
    })
  }else{
    showToast('error',err || "Vui lòng thử lại sau")
  }
}

export const onloadHopdong = async () => {
  let [err, res] = await API.commonService.getHinhThucHopDong();
  if(res){
    const hopdongOptions = res.data.map((e) => {
      e.label = e.ten;
      e.value = e.id;
      return e
    });
    return new Promise((resolve,reject) =>{
      resolve(hopdongOptions)
    })
  }else{
    showToast('error',err || "Vui lòng thử lại sau")
  }
}

export const onloadDienchinhsach = async () => {
  let [err, res] = await API.commonService.getDienChinhSach();
  if(res){
    const chinhsachOptions = res.data.map((e) => {
      return {
        value: e.id,
        label: e.ten,
      };
    });
    return new Promise((resolve,reject) =>{
      resolve(chinhsachOptions)
    })
  }else{
    showToast('error',err || "Vui lòng thử lại sau")
  }
}
export const onloadCapHoc = async () => {
  let [err, res] = await API.commonService.getBachoc();
  if(res){
    const capHocOptions = res.data.map((e) => {
      return {
        value: e.id,
        label: e.ten,
      };
    });
    return new Promise((resolve,reject) =>{
      resolve(capHocOptions)
    })
  }else{
    showToast('error',err || "Vui lòng thử lại sau")
  }
}
export const onloadTrangThai = async () => {
  let [err, res] = await API.commonService.getTrangThaiHocSinh();
  if(res){
    const trangThaiOptions = res.data.map((e) => {
      return {
        value: e.id,
        label: e.ten,
      };
    });
    return new Promise((resolve,reject) =>{
      resolve(trangThaiOptions)
    })
  }else{
    showToast('error',err || "Vui lòng thử lại sau")
  }
}
export const userDisconnect = async () => {
  const authen = Authen.getInstance();
  await authen.clearAuthenObject();
};

