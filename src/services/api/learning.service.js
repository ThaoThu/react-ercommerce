import { API } from "./api.service";

export default class LearningService {
  api = new API("LEARNING");
  constructor() {}

  async getTruonghoc(params = {}) {
    let [err, data] = await this.api.get(`/v1/truonghoc`, params);
    return [err, data];
  }

  async postTruonghoc(params = {}) {
    let [err, data] = await this.api.post(`/v1/truonghoc`, params);
    return [err, data];
  }
  async patchTruonghoc(code, params = {}) {
    let [err, data] = await this.api.patch(`/v1/truonghoc/${code}`, params);
    return [err, data];
  }

  async deleteTruonghoc(id, params = {}) {
    let [err, data] = await this.api.delete(`/v1/truonghoc/${id}`, params);
    return [err, data];
  }

  async getMonhoc(params = {}) {
    let [err, data] = await this.api.get(`/v1/monhoc`, params);
    return [err, data];
  }

  async getGiaovien(params = {}) {
    let [err, data] = await this.api.get(`/v1/giaovien`, params);
    return [err, data];
  }

  async getThoikhoabieu(params = {}) {
    let [err, data] = await this.api.get(`/v1/thoikhoabieu`, params);
    return [err, data];
  }

  async postThoikhoabieu(params = {}) {
    let [err, data] = await this.api.post(`/v1/thoikhoabieu`, params);
    return [err, data];
  }

  async getThucdon(params = {}) {
    let [err, data] = await this.api.get(`/v1/thucdon`, params);
    return [err, data];
  }

  async postThucdon(params = {}) {
    let [err, data] = await this.api.post(`/v1/thucdon`, params);
    return [err, data];
  }

  async getCampus(id, params = {}) {
    let [err, data] = await this.api.get(
      `/v1/truonghoc/${id}/diemtruong`,
      params
    );
    return [err, data];
  }
  async addCampus(params = {}) {
    let [err, data] = await this.api.post(`/v1/truonghoc/diemtruong`, params);
    return [err, data];
  }
  async updateCampus(id, params = {}) {
    let [err, data] = await this.api.patch(
      `/v1/truonghoc/diemtruong/${id}`,
      params
    );
    return [err, data];
  }
  async deleteCampus(id, params = {}) {
    let [err, data] = await this.api.delete(
      `/v1/truonghoc/diemtruong/${id}`,
      params
    );
    return [err, data];
  }
  async getProfileSchool(id, params = {}) {
    let [err, data] = await this.api.get(`/v1/truonghoc/${id}`, params);
    return [err, data];
  }
  async updateProfileSchool(id, params = {}) {
    let [err, data] = await this.api.patch(`/v1/truonghoc/${id}`, params);
    return [err, data];
  }
  async getLophoc(params = {}) {
    let [err, data] = await this.api.get(`/v1/lophoc`, params);
    return [err, data];
  }
  async getLopHocId(id) {
    let [err, data] = await this.api.get(`/v1/lophoc/` + id);
    return [err, data];
  }
  async postLophoc(params = {}) {
    let [err, data] = await this.api.post(`/v1/lophoc`, params);
    return [err, data];
  }
  async patchLophoc(id, params = {}) {
    let [err, data] = await this.api.patch(`/v1/lophoc/${id}`, params);
    return [err, data];
  }
  async deleteLophoc(id, params = {}) {
    let [err, data] = await this.api.delete(`/v1/lophoc/${id}`, params);
    return [err, data];
  }

  async postHosoNhansu(params = {}) {
    let [err, data] = await this.api.post(`/v1/hosonhansu`, params);
    return [err, data];
  }

  async getHosonhansu(params = {}) {
    let [err, data] = await this.api.get(`/v1/hosonhansu`, params);
    return [err, data];
  }
  async getHosonhansuSo(params = {}) {
    let [err, data] = await this.api.get(`/v1/hosonhansu-so`, params);
    return [err, data];
  }

  async getHosonhansuPlus(params = {}) {
    let [err, data] = await this.api.get(
      `/v1/hosonhansu/giaovien-monhoc`,
      params
    );
    return [err, data];
  }

  async getThongTinNhanSu(id, params = {}) {
    let [err, data] = await this.api.get(`/v1/hosonhansu/${id}`, params);
    return [err, data];
  }

  async patchThongTinCaNhan(id, params = {}) {
    let [err, data] = await this.api.patch(`/v1/hosonhansu/${id}`, params);
    return [err, data];
  }

  async getListGiaoVien(params = {}) {
    let [err, data] = await this.api.get(`/v1/hosonhansu/giaovien`, params);
    return [err, data];
  }

  async getNamhoc(params = {}) {
    let [err, data] = await this.api.get(`/v1/namhoc`, params);
    return [err, data];
  }
  async getDiemSo(params = {}) {
    let [err, data] = await this.api.get(`/v1/diemso`, params);
    return [err, data];
  }
  async postDiemSo(params = {}) {
    let [err, data] = await this.api.post(`/v1/diemso`, params);
    return [err, data];
  }

  async postAllDiemSo(params = {}) {
    let [err, data] = await this.api.post(`/v1/list-diemso`, params);
    return [err, data];
  }
  async postHocsinh(params = {}) {
    let [err, data] = await this.api.post(`/v1/hocsinh`, params);
    return [err, data];
  }

  async getHocsinh(params = {}) {
    let [err, data] = await this.api.get(`/v1/hocsinh`, params);
    return [err, data];
  }

  async patchHocsinh(id, params = {}) {
    let [err, data] = await this.api.patch(`/v1/hocsinh/${id}`, params);
    return [err, data];
  }
  async getPhuhuynhHocsinh(params = {}) {
    let [err, data] = await this.api.get(`/v1/hocsinh/phuhuynh`, params);
    return [err, data];
  }

  async postPhuhuynhHocsinh(id, params = {}) {
    let [err, data] = await this.api.post(`/v1/hocsinh/${id}/phuhuynh`, params);
    return [err, data];
  }
  async patchPhuhuynhHocsinh(id, params = {}) {
    let [err, data] = await this.api.patch(
      `/v1/hocsinh/${id}/phuhuynh`,
      params
    );
    return [err, data];
  }
  async getNguoidungId(params) {
    let [err, data] = await this.api.get(`/v1/user/`+params);
    return [err, data];
  }

  async getSucKhoe(params = {}) {
    let [err, data] = await this.api.get(`/suckhoehocsinh/`, params);
    return [err, data];
  }

  async postSucKhoe(params = {}) {
    let [err, data] = await this.api.post(`/suckhoehocsinh`, params);
    return [err, data];
  }

  async getThongbao(params = {}) {
    let [err, data] = await this.api.get(`/v1/danhsach-thongbao`, params);
    return [err, data];
  }
  async postThongbao(params = {}) {
    let [err, data] = await this.api.post(`/v1/gui-thongbao-lop`, params);
    return [err, data];
  }
  async getNguoidung(params = {}) {
    let [err, data] = await this.api.get(`/v1/manager`, params);
    return [err, data];
  }
  async postXepLoai(params = {}) {
    let [err, data] = await this.api.post(`/v1/diemso/xeploai`, params);
    return [err, data];
  }

  async getHocBa(params = {}) {
    let [err, data] = await this.api.get(`/v1/hocba`, params);
    return [err, data];
  }

  async getDanhgia(params = {}) {
    let [err, data] = await this.api.get(`/v1/danhgia`, params);
    return [err, data];
  }

  async getLoaiDanhgia(params = {}) {
    let [err, data] = await this.api.get(`/v1/loai-danhgia`, params);
    return [err, data];
  }

  async getTieuChi(params = {}) {
    let [err, data] = await this.api.get(`/v1/tieuchi-danhgia`, params);
    return [err, data];
  }

  // Thong tin so suc khoe
  async getThongTinChungSucKhoe(studentId) {
    let [err, data] = await this.api.get(`/thongtinchung-suckhoe/${studentId}`);
    return [err, data];
  }
  async getSucKhoe(params = {}) {
    let [err, res] = await this.api.get(`/suckhoehocsinh`,params);
    return [err, res];
  }

  async getSoLienLac(params) {
    let [err, data] = await this.api.get(`/v1/solienlac/` + params);
    return [err, data];
  }

  async postSoLienLac(params = {}) {
    let [err, data] = await this.api.post(`/v1/solienlac`, params);
    return [err, data];
  }

  async postDanhGia(params = {}) {
    let [err, data] = await this.api.post(`/v1/danhgia`, params);
    return [err, data];
  }

  async getPhongGiaoDuc(params) {
    let [err, data] = await this.api.get(`/v1/phonggiaoduc/` + params);
    return [err, data];
  }
  async getListPGD(params) {
    let [err, data] = await this.api.get(`/v1/phonggiaoduc` , params);
    return [err, data];
  }
  async getListTruong(params) {
    let [err, data] = await this.api.get(`/v1/truonghoc` , params);
    return [err, data];
  }
  async getListNhanSu(params) {
    let [err, data] = await this.api.get(`/v1/hosonhansu` , params);
    return [err, data];
  }
  async patchPhongGiaoDuc(params = {}, code) {
    let [err, data] = await this.api.patch(`/v1/phonggiaoduc/` + code, params);
    return [err, data];
  }

  async getSoGiaoDuc(params) {
    let [err, data] = await this.api.get(`/sogiaoduc/` + params);
    return [err, data];
  }

  async patchSoGiaoDuc(params = {}, id) {
    let [err, data] = await this.api.patch(`/v1/sogiaoduc/` + id, params);
    return [err, data];
  }
  async postDuyetDiem(params = {}) {
    let [err, data] = await this.api.post(`/v1/diemso/xacnhan`, params);
    return [err, data];
  }
  async postChuyenLop(params = {}) {
    let [err, data] = await this.api.post(`/lophoc/thamgia-lophoc`, params);
    return [err, data];
  }

  async downloadTemplate(filename) {
    let [err, data] = await this.api.download(
      `/v1/files/` + filename,
      filename
    );
    return [err, data];
  }

  // He thống
  async addTaiKhoanAdmin(params = {}) {
    let [err, data] = await this.api.post(`/v1/manager/admin`, params);
    return [err, data];
  }

  async getManamger(params = {}) {
    let [err, data] = await this.api.get(`/v1/manager`, params);
    return [err, data];
  }

  async getHoSoNhanSuSo(params = {}) {
    let [err, data] = await this.api.get(`/v1/hosonhansu-so`, params);
    return [err, data];
  }

  async taoTaiKhoanNhanSu(params = {}) {
    let [err, data] = await this.api.post(`/v1/manager/nhansu`, params);
    return [err, data];
  }

  async postDanhSachHocSinh(params = {}) {
    let [err, data] = await this.api.post(`/v1/list-hocsinh`, params);
    return [err, data];
  }

  async getThongbaoNhan(params = {}) {
    let [err, data] = await this.api.get(`/v1/thongbao/danhsach/nhan`, params);
    return [err, data];
  }
  async getThongbaoGui(params = {}) {
    let [err, data] = await this.api.get(`/v1/thongbao/danhsach/gui`, params);
    return [err, data];
  }
  async postThongBaoToQuanLy(params = {}) {
    let [err, data] = await this.api.post(`/v1/thongbao/quanly`, params);
    return [err, data];
  }
  async postThongBaoToNhanSu(params = {}) {
    let [err, data] = await this.api.post(`/v1/thongbao/nhansu`, params);
    return [err, data];
  }
  async postThongBaoToPhuHuynh(params = {}) {
    let [err, data] = await this.api.post(`/v1/thongbao/hocsinh`, params);
    return [err, data];
  }
}
