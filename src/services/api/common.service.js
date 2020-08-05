import { API } from "./api.service";

export default class CommonService {
  api = new API();
  constructor() {}
  
  async dangkySoLL(params = {}) {
    let [err, data] = await this.api.patch(`/v1/hocsinh/dangki-solienlac`, params);
    return [err, data];
  }
  async updatePhuHuynh(params = {}) {
    let [err, data] = await this.api.post(`/v1/hocsinh/phuhuynh`, params);
    return [err, data];
  }
  async getBachoc(params = {}) {
    let [err, data] = await this.api.get(`/v1/bachoc`, params);
    return [err, data];
  }

  async getMonhoc(params = {}) {
    let [err, data] = await this.api.get(`/v1/monhoc`, params);
    return [err, data];
  }

  async getKhoilop(params = {}) {
    let [err, data] = await this.api.get(`/v1/khoi-lop`, params);
    return [err, data];
  }

  async getPhuongxa(params = {}) {
    let [err, data] = await this.api.get(`/v1/phuong-xa`, params);
    return [err, data];
  }

  async getQuanhuyen(params = {}) {
    let [err, data] = await this.api.get(`/v1/quan-huyen`, params);
    return [err, data];
  }

  async getTinhthanhpho(params = {}) {
    let [err, data] = await this.api.get(`/v1/tinh-thanhpho`, params);
    return [err, data];
  }

  async getQuocgia(params = {}) {
    let [err, data] = await this.api.get(`/v1/quocgia`, params);
    return [err, data];
  }

  async getDantoc(params = {}) {
    let [err, data] = await this.api.get(`/v1/dantoc`, params);
    return [err, data];
  }

  async getTongiao(params = {}) {
    let [err, data] = await this.api.get(`/v1/tongiao`, params);
    return [err, data];
  }

  async getChuyenmon(params = {}) {
    let [err, data] = await this.api.get(`/v1/chuyen-mon`, params);
    return [err, data];
  }

  async getDienChinhSach(params = {}) {
    let [err, data] = await this.api.get(`/v1/dien-chinhsach`, params);
    return [err, data];
  }

  async getHanhKiem(params = {}) {
    let [err, data] = await this.api.get(`/v1/hanh-kiem`, params);
    return [err, data];
  }

  async getHocLuc(params = {}) {
    let [err, data] = await this.api.get(`/v1/hocluc`, params);
    return [err, data];
  }

  async getHinhThucHopDong(params = {}) {
    let [err, data] = await this.api.get(`/v1/hinhthuc-hopdong`, params);
    return [err, data];
  }

  async getLyDoNghiHoc(params = {}) {
    let [err, data] = await this.api.get(`/v1/ly-do-thoi-hoc`, params);
    return [err, data];
  }

  async getTrangThaiCanBo(params = {}) {
    let [err, data] = await this.api.get(`/v1/trangthai-canbo`, params);
    return [err, data];
  }

  async getTrangThaiHocSinh(params = {}) {
    let [err, data] = await this.api.get(`/v1/trangthai-hocsinh`, params);
    return [err, data];
  }

  async getNhomcanbo(params = {}) {
    let [err, data] = await this.api.get(`/v1/nhom-canbo`, params);
    return [err, data];
  }

  async getLoaicanbo(params = {}) {
    let [err, data] = await this.api.get(`/v1/loai-canbo`, params);
    return [err, data];
  }

  async getKiemNhiem(params = {}) {
    let [err, data] = await this.api.get(`/v1/nhiemvu-kiemnhiem`, params);
    return [err, data];
  }

  async getLoaihinh(params = {}) {
    let [err, data] = await this.api.get(`/v1/loaihinh-truong`, params);
    return [err, data];
  }
  async getLoaitruong(params = {}) {
    let [err, data] = await this.api.get(`/v1/loai-truong`, params);
    return [err, data];
  }

  async getKhuvuc(params = {}) {
    let [err, data] = await this.api.get(`/v1/khuvuc`, params);
    return [err, data];
  }
  async getLoaiTruong(params = {}) {
    let [err, data] = await this.api.get(`/v1/loai-truong`, params);
    return [err, data];
  }
  async getGiaoVien(params = {}) {
    let [err, data] = await this.api.get(`/v1/hosonhansu/giaovien`, params);
    console.log(err, data);
    return [err, data];
  }
  async getNamHoc(params = {}) {
    let [err, data] = await this.api.get(`/v1/namhoc`, params);
    return [err, data];
  }
  async getLoaiDiem(params = {}) {
    let [err, data] = await this.api.get(`/v1/loaidiem`, params);
    return [err, data];
  }

  async getVitriVieclam(params = {}) {
    let [err, data] = await this.api.get(`/v1/nhom-canbo`, params);
    return [err, data];
  }

  async getLoaiCB(params = {}) {
    let [err, data] = await this.api.get(`/v1/loai-canbo`, params);
    return [err, data];
  }

  async updateHosoNhansu(id, params = {}) {
    let [err, data] = await this.api.patch(`/v1/hosonhansu/${id}`, params);
    return [err, data];
  }

  async deleteNhansu(id) {
    let [err, data] = await this.api.delete(`/v1/hosonhansu/${id}`);
    return [err, data];
  }
  async getCoSoVatChat(params = {}) {
    let [err, data] = await this.api.get(`/v1/coso-vatchat`, params);
    return [err, data];
  }
  async getPhongGD(params = {}) {
    let [err, data] = await this.api.get(`/v1/phonggiaoduc`, params);
    return [err, data];
  }
  async postPhongGD(params = {}) {
    let [err, data] = await this.api.post(`/v1/phonggiaoduc`, params);
    return [err, data];
  }
  async updatePhongGD(id, params = {}) {
    let [err, data] = await this.api.patch(`/v1/phonggiaoduc/${id}`, params);
    return [err, data];
  }
  async deletePhongGD(id) {
    let [err, data] = await this.api.delete(`/v1/phonggiaoduc/${id}`);
    return [err, data];
  }
  async getUrlUploadImage(action = "POST", params) {
    let [err, data] = await this.api.post(
      `/v1/az/presigned-urls/${action}`,
      params
    );
    return [err, data];
  }

  async getTieuchiDanhgia(params = {}) {
    let [err, data] = await this.api.get(`/v1/tieuchi-danhgia`, params);
    return [err, data];
  }

  async getDonvicongtac(params = {}) {
    let [err, data] = await this.api.get(`/v1/manager/donvicongtac`, params);
    return [err, data];
  }
  //thong ke hs
  async getThongKeHSTheoBacHoc(params = {}) {
    let [err, data] = await this.api.get(`/thongke-hocsinh-caphoc`, params);
    return [err, data];
  }
  async getThongKeBMITheoKhoi(params = {}) {
    let [err, data] = await this.api.get(`/thongke-hocsinh-bmi-khoi`, params);
    return [err, data];
  }
  async getThongKeBMITheoBacHoc(params = {}) {
    let [err, data] = await this.api.get(`/thongke-hocsinh-bmi-bachoc`, params);
    return [err, data];
  }
  async getThongKeSoLuongHS(namhoc,params = {}) {
    let [err, data] = await this.api.get(`/v1/thongke-hocsinh/${namhoc}`, params);
    return [err, data];
  }
  async getThongKeGioiTinhHS(namhoc,params = {}) {
    let [err, data] = await this.api.get(`/v1/thongke-hocsinh-gioitinh/${namhoc}`, params);
    return [err, data];
  }
  async getThongKeDanTocHS(namhoc,params = {}) {
    let [err, data] = await this.api.get(`/v1/thongke-hocsinh-dantoc/${namhoc}`, params);
    return [err, data];
  }
  async getThongKeSucKhoeHS(namhoc,params = {}) {
    let [err, data] = await this.api.get(`/v1/thongke-hocsinh-suckhoe/${namhoc}`, params);
    return [err, data];
  }

  async getThongKeHocHamGV(params = {}) {
    let [err, data] = await this.api.get(`/thongke-giaovien-hocham`, params);
    return [err, data];
  }
  async getThongKeGioiTinhGV(params = {}) {
    let [err, data] = await this.api.get(`/thongke-giaovien-gioitinh`, params);
    return [err, data];
  }
  async getTKTrinhDoGV(params = {}) {
    let [err, data] = await this.api.get(`/thongke-giaovien-trinhdo`, params);
    return [err, data];
  }
  async getThongKeDanTocGV(params = {}) {
    let [err, data] = await this.api.get(`/thongke-giaovien-dantoc`, params);
    return [err, data];
  }

  async getHocKyDanhGia(params = {}) {
    let [err, data] = await this.api.get(`/v1/loai-danhgia`, params);
    return [err, data];
  }

  async getPhongBanSoGD(params = {}) {
    let [err, data] = await this.api.get(`/phongban`, params);
    return [err, data];
  }
  async getNhanSuSoGD(params = {}) {
    let [err, data] = await this.api.get(`/v1/hosonhansu-so`, params);
    return [err, data];
  }
  async postNhanSuSoGD(params = {}) {
    let [err, data] = await this.api.post(`/v1/hosonhansu-so`, params);
    return [err, data];
  }
  async patchNhanSuSoGD(id, params) {
    let [err, data] = await this.api.patch(`/hosonhansu-so/${id}`, params);
    return [err, data];
  }
  async getDashBoardData(params = {}) {
    let [err, data] = await this.api.get(`/v1/dashboard/${params.truonghocId}`);
    return [err, data];
  }

  //dashboard
  async getXepLoaiSDB(params = {}) {
    let [err, res] = await this.api.get(`/v1/dashboard/thongke-tiethoc-truong` , params);
    return [err, res];
  }
  async getXepLoaiLopHoc(params = {}) {
    let [err, res] = await this.api.get(`/v1/dashboard/thongke-xephang-lophoc` , params);
    return [err, res];
  }
  //
  async getThongKeGVTheoCapHoc(params = {}) {
    let [err, data] = await this.api.get(`/v1/dashboard/thongke-caphoc-giaovien`, params);
    return [err, data];
  }
  async getThongKeHSTheoCapHoc(params = {}) {
    let [err, data] = await this.api.get(`/v1/dashboard/thongke-caphoc-hocsinh`, params);
    return [err, data];
  }
  async getThongKeLopTheoCapHoc(params = {}) {
    let [err, data] = await this.api.get(`/v1/dashboard/thongke-caphoc-lophoc`, params);
    return [err, data];
  }
  async getThongKeTruongTheoCapHoc(params = {}) {
    let [err, data] = await this.api.get(`/v1/dashboard/thongke-caphoc-truong`, params);
    return [err, data];
  }

  async getNghiHocHS(params = {}) {
    let [err, data] = await this.api.get(`/v1/dashboard/thongke-caphoc-nghiphep`, params);
    return [err, data];
  }


}
