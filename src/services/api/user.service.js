import { API } from "./api.service";

export default class UserService {
  api = new API();
  constructor() {}

  async login(email, password) {
    let [err, data] = await this.api.post("/v1/user/login", {
      taikhoan: email,
      matkhau: password,
    });
    return [err, data];
  }

  async postCreateLink(params = {}) {
    let [err, data] = await this.api.post(`/v1/user/tao-duongdan`, params);
    return [err, data];
  }

  async postChangePassword(params = {}) {
    let [err, data] = await this.api.post(`/v1/user/caplai-matkhau`, params);
    return [err, data];
  }

  async getScholastics(params = {}) {
    let [err, data] = await this.api.get("/v1/scholastics", params);
    return [err, data];
  }

  async getClasses(params = {}) {
    let [err, data] = await this.api.get("/v1/classes", params);
    return [err, data];
  }

  async updateClasses(classId, params = {}) {
    let [err, data] = await this.api.put(`/v1/classes/${classId}`, params);
    return [err, data];
  }

  async addClasses(params = {}) {
    let [err, data] = await this.api.post(`/v1/classes`, params);
    return [err, data];
  }

  async deleteClasses(id, params = {}) {
    let [err, data] = await this.api.delete(`/v1/classes/${id}`, params);
    return [err, data];
  }

  async getParents(params = {}) {
    let [err, data] = await this.api.get("/v1/relationships/students", params);
    return [err, data];
  }

  async getSchools(params = {}) {
    let [err, data] = await this.api.get("/v1/schools", params);
    return [err, data];
  }

  async getNationalitys(params = {}) {
    let [err, data] = await this.api.get("/v1/nations", params);
    return [err, data];
  }
  async getEthnic(params = {}) {
    let [err, data] = await this.api.get("/v1/ethnicGroups", params);
    return [err, data];
  }

  async getTeacher(params = {}) {
    let [err, data] = await this.api.get("/v1/teachers", params);
    return [err, data];
  }

  async addTeacher(params = {}) {
    let [err, data] = await this.api.post(`/v1/teachers`, params);
    return [err, data];
  }
  async deleteTeacher(id, params = {}) {
    let [err, data] = await this.api.delete(`/v1/teachers/${id}`, params);
    return [err, data];
  }
  async updateTeacher(id, params = {}) {
    let [err, data] = await this.api.put(`/v1/teachers/${id}`, params);
    return [err, data];
  }

  async addSchool(params = {}) {
    let [err, data] = await this.api.post(`/v1/schools`, params);
    return [err, data];
  }

  async getStudents(params = {}) {
    let [err, data] = await this.api.get("/v1/students/classes", params);
    return [err, data];
  }

  async addStudent(params = {}) {
    let [err, data] = await this.api.post(`/v1/students`, params);
    return [err, data];
  }

  async deleteStudent(id, params = {}) {
    let [err, data] = await this.api.delete(`/v1/hocsinh/${id}`, params);
    return [err, data];
  }

  async updateStudent(Id, params = {}) {
    let [err, data] = await this.api.put(`/v1/students/${Id}`, params);
    return [err, data];
  }
  async deleteDepartments(params = {}) {
    let [err, data] = await this.api.delete("/v1/departments", params);
    return [err, data];
  }
  async updateDepartments(id, params = {}) {
    let [err, data] = await this.api.put(`/v1/departments/${id}`, params);
    return [err, data];
  }
  async getDepartments(params = {}) {
    let [err, data] = await this.api.get("/v1/departments", params);
    return [err, data];
  }
  async addDepartments(params = {}) {
    let [err, data] = await this.api.post(`/v1/departments`, params);
    return [err, data];
  }

  async addTaiKhoanNguoiDung(params = {}) {
    let [err, data] = await this.api.post(`/v1/manager`, params);
    return [err, data];
  }

  async getAdmins(params = {}) {
    let [err, data] = await this.api.get("/v1/users", params);
    return [err, data];
  }

  async deleteAdmins(id, params = {}) {
    let [err, data] = await this.api.post(`/v1/users/${id}`, params);
    return [err, data];
  }
  async updateAdmins(id, params = {}) {
    let [err, data] = await this.api.patch(`/v1/user/${id}`, params);
    return [err, data];
  }

  async getSchedules(params = {}) {
    let [err, data] = await this.api.get("/v1/schedules", params);
    return [err, data];
  }

  async addSchedules(params = {}) {
    let [err, data] = await this.api.post(`/v1/schedules`, params);
    return [err, data];
  }
  // chuyển sang dùng service learning

  async getSubjects(params = {}) {
    let [err, data] = await this.api.get(`/v1/subjects`, params);
    return [err, data];
  }
  async getScoreType(params = {}) {
    let [err, data] = await this.api.get(`/v1/scores/types`, params);
    return [err, data];
  }
  async getScore(params = {}) {
    let [err, data] = await this.api.get(`/v1/scores`, params);
    return [err, data];
  }
  async getGrade(params = {}) {
    let [err, data] = await this.api.get("/v1/grades", params);
    return [err, data];
  }

  getcurrentUser() {
    return JSON.parse(localStorage.getItem("CJuser")) || null;
  }

  // APIs NHOM QUYEN

  async getResources(params = {}) {
    let [err, data] = await this.api.get("/v1/role/resources", params);
    return [err, data];
  }

  async getRoles(params = {}) {
    let [err, data] = await this.api.get("/v1/roles", params);
    return [err, data];
  }

  async postRole(params = {}) {
    let [err, data] = await this.api.post("/v1/role", params);
    return [err, data];
  }

  async deleteRole(id) {
    let [err, data] = await this.api.delete(`/v1/role/${id}`);
    return [err, data];
  }

  async getUserRole(params = {}) {
    let [err, data] = await this.api.get("/v1/user-role", params);
    return [err, data];
  }

  async postUserRole(params = {}) {
    let [err, data] = await this.api.post("/v1/user-role", params);
    return [err, data];
  }
}
