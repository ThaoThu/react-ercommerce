import React from "react";
const Category = React.lazy(() => import("../views/Pages/Category"));

// const BaoCao = React.lazy(() => import("../views/Pages/BaoCao"));
// const TruongTrucThuocSo = React.lazy(() => import("../views/Pages/TruongTrucThuocSo"));
// const PhongBanSoGD = React.lazy(() => import("../views/Pages/PhongBanSoGD"));

// const ChuyenLop = React.lazy(() => import("../views/Pages/ChuyenLop"));
// const News = React.lazy(() => import("../views/Pages/News"));
// const Event = React.lazy(() => import("../views/Pages/Event"));
// const TimeTable = React.lazy(() => import("../views/Pages/TimeTable"));
// const ThoiKhoaBieuGiaoVien = React.lazy(() =>
//   import("../views/Pages/ThoiKhoaBieuGiaoVien")
// );

// const Student = React.lazy(() => import("../views/Pages/Student"));
// const DangKySoLL = React.lazy(()=> import("../views/Pages/DangKySLL"))
// const Class = React.lazy(() => import("../views/Pages/Class"));

// const Schools = React.lazy(() => import("../views/Pages/School"));
// const SoGhiDiemTongHop = React.lazy(() => import("../views/Pages/SoGhiDiemTongHop"))
// const SystemManagement = React.lazy(() => import("../views/Pages/SystemManagement"));
// const EnterScore = React.lazy(() => import("../views/Pages/EnterScore"));
// const DuyetDiem = React.lazy(() => import("../views/Pages/DuyetDiem"));
// const StudyResult = React.lazy(() => import("../views/Pages/StudyResult"));
// const HealthBook = React.lazy(() => import("../views/Pages/HealthBook"));
// const CategorySystem = React.lazy(() =>
//   import("../views/Pages/CategorySystem")
// );
// const SchoolProfile = React.lazy(() => import("../views/Pages/SchoolProfile"));
// const LienLac = React.lazy(() => import("../views/Pages/LienLac"));
// const Thongbao = React.lazy(() => import("../views/Pages/Thongbao"));
// const HocBa = React.lazy(() => import("../views/Pages/HocBa"));
// const SoSucKhoe = React.lazy(() => import("../views/Pages/SoSucKhoe"));
// const DanhgiaDinhky = React.lazy(() => import("../views/Pages/DanhgiaDinhky"));
// const PhongGD = React.lazy(() => import("../views/Pages/PhongGD"));
// const HoSoCaNhan = React.lazy(() => import("../views/Pages/HoSoCaNhan"));
// const SoLienLac = React.lazy(() => import("../views/Pages/SoLienLac"));

// const Bachoc = React.lazy(() => import("../views/Categorys/Bachoc"));
// const Dantoc = React.lazy(() => import("../views/Categorys/Dantoc"));
// const Khoilop = React.lazy(() => import("../views/Categorys/Khoilop"));
// const Monhoc = React.lazy(() => import("../views/Categorys/Monhoc"));
// const Phuongxa = React.lazy(() => import("../views/Categorys/Phuongxa"));
// const Quanhuyen = React.lazy(() => import("../views/Categorys/Quanhuyen"));
// const Quocgia = React.lazy(() => import("../views/Categorys/Quocgia"));

// const Chuyenmon = React.lazy(() =>
//   import("../views/Categorys/Chuyenmongiaovien")
// );
// const Hanhkiem = React.lazy(() => import("../views/Categorys/Hanhkiem"));
// const Dienchinhsach = React.lazy(() =>
//   import("../views/Categorys/Dienchinhsach")
// );
// const Hocluc = React.lazy(() => import("../views/Categorys/Hocluc"));
// const Nhomcanbo = React.lazy(() => import("../views/Categorys/Loaicanbo"));
// const Lydonghihoc = React.lazy(() => import("../views/Categorys/Lydonghihoc"));
// const Trangthaihocsinh = React.lazy(() =>
//   import("../views/Categorys/Trangthaihocsinh")
// );
// const Trangthaicanbo = React.lazy(() =>
//   import("../views/Categorys/Trangthaicanbo")
// );
// const Bacluong = React.lazy(() => import("../views/Categorys/Bacluong"));
// const Hopdong = React.lazy(() => import("../views/Categorys/Hopdong"));
// const Kiemnhiem = React.lazy(() => import("../views/Categorys/Kiemnhiem"));
// const Ngach = React.lazy(() => import("../views/Categorys/Ngach"));

// const Tinhthanhpho = React.lazy(() =>
//   import("../views/Categorys/Tinhthanhpho")
// );
// const Tongiao = React.lazy(() => import("../views/Categorys/Tongiao"));
// const NhanSu = React.lazy(() => import("../views/Pages/NhanSu"));
// const NhanSuPhongGD = React.lazy(() => import("../views/Pages/NhanSuPhongGD"));
// const NhanSuSoGD = React.lazy(() => import("../views/Pages/NhanSuSoGD"));
// const DanhGiaNangLuc = React.lazy(() =>import("../views/Pages/DanhGiaNangLuc"));
// const DanhGiaTongHop = React.lazy(() => import("../views/Pages/DanhGiaTongHop") );

// /* Thống kê */
// const ThongKeHocSinh = React.lazy(() => import("../views/ThongKe/ThongKeHocSinh"));
// const ThongKeGiaoVien = React.lazy(() => import("../views/ThongKe/ThongKeGiaoVien"));

// /* Profile */
// const HoSoSGD = React.lazy(() => import("../views/Pages/HoSoSGD"));
// const HoSoPGD = React.lazy(() => import("../views/Pages/HoSoPGD"));

// const Dashboard = React.lazy(() => import("../views/Pages/Dashboard"));
// const NhomQuyen = React.lazy(() => import("../views/Pages/NhomQuyen"));
// const HealthChart =  React.lazy(() => import("../views/Pages/HealthChart"));

// const ThucDon = React.lazy( () => import("../views/Pages/ThucDon"))

// const PhongBanPGD = React.lazy( () => import("../views/Pages/PhongBanPhongGD"))
// const ThongKeDinhkyMon = React.lazy( () => import("../views/ThongKe/ThongkeDinhKyMonHoc"))
const Mainroutes = [
  { path: "/category", exact: true, component: Category },
  //   { path: "/dashboard", exact: true, component: Dashboard },
  //   /** Trường học */
  //   { path: "/", exact: true, component: Dashboard },
  //   { path: "/study/time-table", exact: true, component: TimeTable },
  //   { path: "/study/event", exact: true, component: Event },
  //   { path: "/truonghoc/tintuc", exact: true, component: News },
  //   { path: "/manage/students", exact: true, component: Student },
  //   { path: "/hethong/nhomquyen", exact: true, component: NhomQuyen },
  //   { path: "/study/study-result", exact: true, component: StudyResult },
  //   { path: "/profile/health-book", exact: true, component: HealthBook },
  //   /** Sở giáo dục */
  //   { path: "/so-giao-duc/phong-giao-duc", exact: true, component: PhongGD },
  //   { path: "/so-giao-duc/ho-so", exact: true, component: HoSoSGD },
  //   { path: "/so-giao-duc/canbo", exact: true, component: NhanSuSoGD },
  //   { path: "/so-giao-duc/phong-ban", exact: true, component: PhongBanSoGD },
  //   { path: "/so-giao-duc/thong-bao", exact: true, component:  Thongbao},
  //   { path: "/so-giao-duc/truong-truc-thuoc", exact: true, component:  TruongTrucThuocSo},
  //   /** Phòng giáo dục */
  //   { path: "/phong-giao-duc/ho-so", exact: true, component: HoSoPGD },
  //   { path: "/phong-giao-duc/can-bo", exact: true, component: NhanSuPhongGD },
  //   { path: "/phong-giao-duc/phong-ban", exact: true, component: PhongBanPGD },
  //   { path: "/phong-giao-duc/truong-hoc", exact: true, component: Schools },
  //   /** Quản lý đào tạo */
  //   { path : '/hethong/dangky-so-lienlac', exact : true, component : DangKySoLL},
  //   { path: "/hethong/danh-muc", exact: true, component: CategorySystem },
  //   { path: "/hethong/nguoi-dung", exact: true, component: SystemManagement },
  //   { path: "/hethong/nhomquyen", exact: true, component: NhomQuyen },
  //   { path: "/truonghoc/nhan-su", exact: true, component: NhanSu },
  //   { path: "/truonghoc/hoso", exact: true, component: SchoolProfile },
  //   { path: "/canhan/lichgiangday",exact: true,component: ThoiKhoaBieuGiaoVien},
  //   { path: "/canhan/ho-so", exact: true, component: HoSoCaNhan },
  //   { path: "/hocsinh/suc-khoe", exact: true, component: HealthBook },
  //   { path: "/daotao/thoi-khoa-bieu", exact: true, component: TimeTable },
  //   { path: "/daotao/ho-so-lop-hoc", exact: true, component: Class },
  //   { path: "/daotao/danhgia-dinhky", exact: true, component: DanhgiaDinhky },
  //   { path: "/daotao/danhgia-nangluc", exact: true, component: DanhGiaNangLuc },
  //   { path: "/daotao/danhgia-tonghop", exact: true, component: DanhGiaTongHop },
  //   { path: "/daotao/nhapdiem", exact: true, component: EnterScore },
  //   { path: "/daotao/duyetdiem", exact: true, component: DuyetDiem },
  //   { path: "/daotao/soghidiem", exact: true, component:   SoGhiDiemTongHop },
  //   { path: "/hocsinh/ho-so", exact: true, component: Student },
  //   { path: "/hocsinh/danh-sach", exact: true, component: Student },
  //   { path: "/hocsinh/lien-lac", exact: true, component: LienLac },
  //   { path: "/hocsinh/thong-bao", exact: true, component: Thongbao },
  //   { path: "/hocsinh/so-suc-khoe/:id", exact: true, component: SoSucKhoe },
  //   { path: "/hocsinh/hoc-ba/:id", exact: true, component: HocBa },
  //   { path: "/hocsinh/so-lien-lac/:id", exact: true, component: SoLienLac },
  //   { path: "/ho-so-ca-nhan", exact: true, component: HoSoCaNhan },
  //   { path: "/hocsinh/chuyen-lop", exact: true, component: ChuyenLop },
  //   /** Học sinh */
  //   { path: "/danhmuc/bachoc", exact: true, component: Bachoc },
  //   { path: "/danhmuc/Dantoc", exact: true, component: Dantoc },
  //   { path: "/danhmuc/Khoilop", exact: true, component: Khoilop },
  //   { path: "/danhmuc/Monhoc", exact: true, component: Monhoc },
  //   { path: "/danhmuc/phuong-xa", exact: true, component: Phuongxa },
  //   { path: "/danhmuc/quan-huyen", exact: true, component: Quanhuyen },
  //   { path: "/danhmuc/Quocgia", exact: true, component: Quocgia },
  //   { path: "/danhmuc/tinh-thanhpho", exact: true, component: Tinhthanhpho },
  //   { path: "/danhmuc/Tongiao", exact: true, component: Tongiao },
  //   /** Cá nhân */
  //   { path: "/danhmuc/chuyen-mon", exact: true, component: Chuyenmon },
  //   { path: "/danhmuc/dien-chinh-sach", exact: true, component: Dienchinhsach },
  //   { path: "/danhmuc/hanh-kiem", exact: true, component: Hanhkiem },
  //   { path: "/danhmuc/hoc-luc", exact: true, component: Hocluc },
  //   { path: "/danhmuc/nhom-can-bo", exact: true, component: Nhomcanbo },
  //   { path: "/danhmuc/ly-do-nghi-học", exact: true, component: Lydonghihoc },
  //   {
  //     path: "/danhmuc/trang-thai-hoc-sinh",
  //     exact: true,
  //     component: Trangthaihocsinh,
  //   },
  //   {
  //     path: "/danhmuc/trang-thai-can-bo",
  //     exact: true,
  //     component: Trangthaicanbo,
  //   },
  //   { path: "/danhmuc/bac-luong", exact: true, component: Bacluong },
  //   { path: "/danhmuc/hop-dong", exact: true, component: Hopdong },
  //   { path: "/danhmuc/kiem-nhiem", exact: true, component: Kiemnhiem },
  //   { path: "/danhmuc/ngach", exact: true, component: Ngach },
  //   /** Hệ thống */
  //   /** Thống kê*/
  //   { path: "/thongke/hocsinh", exact: true, component: ThongKeHocSinh },
  //   { path: "/thongke/giaovien", exact: true, component: ThongKeGiaoVien },
  //   { path: "/thongke/dinhky-monhoc" , exact: true, component: ThongKeDinhkyMon},
  //   /*Thuc don*/
  //   {path:  "/hocsinh/thuc-don" , exact: true, component: ThucDon},
  //   /*Bao cao*/
  //   {path:  "/baocao" , exact: true, component: BaoCao},
];
export default Mainroutes;
