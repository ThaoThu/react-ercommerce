export const navigation = {
  items: [
    {
      name: "Sở giáo dục",
      url: "/so-giao-duc",
      children: [
        {
          name: "Hồ sơ sở",
          url: "/so-giao-duc/ho-so",
          attributes: { disabled: false, hidden: false },
          children: [],
        },
        {
          name: "Phòng ban",
          url: "/so-giao-duc/phong-ban",
          attributes: { disabled: false, hidden: false },
          children: [],
        },
        {
          name: "Hồ sơ cán bộ, nhân viên",
          url: "/so-giao-duc/canbo",
          attributes: { disabled: false, hidden: false },
          children: [],
        },
        {
          name: "Danh sách phòng giáo dục",
          url: "/so-giao-duc/phong-giao-duc",
          attributes: { disabled: false, hidden: false },
          children: [],
        },
        {
          name: "Danh sách trường trực thuộc",
          url: "/so-giao-duc/truong-truc-thuoc",
          attributes: { disabled: false, hidden: false },
          children: [],
        },
        {
          name: "Thông báo, liên lạc",
          url: "/so-giao-duc/thong-bao",
          module: "so-giao-duc_thong-bao",
          attributes: { disabled: false, hidden: false },
          children: [],
        },
      ],
    },
    {
      name: "Phòng giáo dục",
      url: "/phong-giao-duc",
      children: [
        {
          name: "Hồ sơ phòng",
          url: "/phong-giao-duc/ho-so",
          attributes: { disabled: false, hidden: false },
          children: [],
        },
        {
          name: "Phòng ban",
          url: "/phong-giao-duc/phong-ban",
          attributes: { disabled: false, hidden: false },
          children: [],
        },
        {
          name: "Hồ sơ cán bộ, nhân viên",
          url: "/phong-giao-duc/can-bo",
          attributes: { disabled: false, hidden: false },
          children: [],
        },
        {
          name: "Danh sách trường học",
          url: "/phong-giao-duc/truong-hoc",
          attributes: { disabled: false, hidden: false },
          children: [],
        },
      ],
    },
    {
      name: "Trường học",
      url: "/truonghoc",
      children: [
        {
          name: "Hồ sơ trường",
          url: "/truonghoc/hoso",
          module: "truonghoc_hoso",
          attributes: { disabled: false, hidden: false },
          children: [],
        },
        {
          name: "Hồ sơ cán bộ, giáo viên",
          url: "/truonghoc/nhan-su",
          module: "truonghoc_nhan-su",
          attributes: { disabled: false, hidden: false },
          children: [],
        },
        {
          name: "Bảng tin trường",
          url: "/truonghoc/tintuc",
          module: "truonghoc_tintuc",
          attributes: { disabled: false, hidden: false },
          children: [],
        },
      ],
    },
    {
      name: "Quản lý đào tạo",
      url: "/daotao",
      children: [
        {
          name: "Thời khoá biểu học sinh",
          url: "/daotao/thoi-khoa-bieu",
          module: "daotao_thoi-khoa-bieu",
          attributes: { disabled: false, hidden: false },
          children: [],
        },
        {
          name: "Hồ sơ lớp học",
          url: "/daotao/ho-so-lop-hoc",
          module: "daotao_ho-so-lop-hoc",
          attributes: { disabled: false, hidden: false },
          children: [],
        },
        {
          name: "Quản lý điểm",
          url: "/daotao/diem",
          module: "daotao_diem",
          attributes: { disabled: false, hidden: false },
          children: [
            {
              name: "Nhập điểm",
              url: "/daotao/nhapdiem",
              module: "daotao_nhapdiem",
              attributes: { disabled: false, hidden: false },
            },
            {
              name: "Duyệt điểm",
              url: "/daotao/duyetdiem",
              module: "daotao_duyetdiem",
              attributes: { disabled: false, hidden: false },
            },
            {
              name: "Sổ ghi điểm tổng hợp",
              url: "/daotao/soghidiem",
              attributes: { disabled: false, hidden: false },
            },
          ],
        },
        {
          name: "Nhận xét, đánh giá",
          url: "/daotao/danh-gia",
          module: "daotao_danh-gia",
          attributes: { disabled: false, hidden: false },
          children: [
            {
              name: "Đánh giá định kỳ",
              url: "/daotao/danhgia-dinhky",
              module: "daotao_danhgia-dinhky",
              attributes: { disabled: false, hidden: false },
            },
            {
              name: "Tổng hợp đánh giá",
              url: "/daotao/danhgia-tonghop",
              module: "daotao_danhgia-tonghop",
              attributes: { disabled: false, hidden: false },
            },
          ],
        },
      ],
    },
    {
      name: "Học sinh",
      url: "/hocsinh",
      children: [
        {
          name: "Danh sách học sinh",
          url: "/hocsinh/danh-sach",
          module: "hocsinh_danh-sach",
          attributes: { disabled: false, hidden: false },
          children: [],
        },
        {
          name: "Quản lý biến động",
          url: "/hocsinh/bien-dong",
          module: "hocsinh_bien-dong",
          attributes: { disabled: true, hidden: false },
          children: [],
        },
        {
          name: "Quản lý sức khoẻ",
          url: "/hocsinh/suc-khoe",
          module: "hocsinh_suc-khoe",
          attributes: { disabled: false, hidden: false },
          children: [],
        },
        {
          name: "Quản lý thực đơn",
          url: "/hocsinh/thuc-don",
          module: "hocsinh_thuc-don",
          attributes: { disabled: false, hidden: false },
          children: [],
        },
        {
          name: "Chuyển lớp, lên lớp",
          url: "/hocsinh/chuyen-lop",
          module: "hocsinh_chuyen-lop",
          attributes: { disabled: false, hidden: false },
          children: [],
        },
        {
          name: "Thông báo, liên lạc",
          url: "/hocsinh/thong-bao",
          module: "hocsinh_thong-bao",
          attributes: { disabled: false, hidden: false },
          children: [],
        },
      ],
    },
    {
      name: "Cá nhân",
      url: "/canhan",
      children: [
        {
          name: "Lịch giảng dạy",
          url: "/canhan/lichgiangday",
          module: "canhan_lichgiangday",
          attributes: { disabled: false, hidden: false },
          children: [],
        },
        {
          name: "Hồ sơ cá nhân",
          url: "/canhan/ho-so",
          module: "canhan_ho-so",
          attributes: { disabled: false, hidden: false },
          children: [],
        },
      ],
    },
    {
      name: "Báo cáo, thống kê",
      url: "/baocao-thongke",
      attributes: { disabled: false, hidden: false },
      children: [
        {
          name: "Thống kê",
          url: "/thongke",
          attributes: { disabled: false, hidden: false },
          children: [
              {
                name: "Thống kê học sinh",
                url: "/thongke/hocsinh",
                attributes: { disabled: false, hidden: false },
                children: [],
              },
              {
                name: "Thống kê giáo viên",
                url: "/thongke/giaovien",
                attributes: { disabled: false, hidden: false },
                children: [],
              },
          //     {
          //       name: "Thống kê học sinh theo trường",
          //       url: "/thongke/hocsinh/truong",
          //       attributes: { disabled: false, hidden: false },
          //       children: []
          //     },
          //     {
          //       name: "Thống kê theo giới tính",
          //       url: "/thongke/gioitinh",
          //       attributes: { disabled: false, hidden: false },
          //       children: [],
          //     },
              {
                name: "Thống kê đánh giá định kỳ môn học",
                url: "/thongke/dinhky-monhoc",
                attributes: { disabled: false, hidden: false },
                children: [],
              },
          //     {
          //       name: "Thống kê tình trạng sức khỏe học sinh",
          //       url: "/thongke/suckhoe-hocsinh",
          //       attributes: { disabled: false, hidden: false },
          //       children: [],
          //     },
            ]

        },
        {
              name: "Báo cáo",
              url: "/baocao",
              attributes: { disabled: false, hidden: false },
              children: [],
            },
      ]
    },
    // {
    //   name: "Thống kê",
    //   url: "/thongke",
    //   children: [
    //     {
    //       name: "Thống kê học sinh",
    //       url: "/thongke/hocsinh",
    //       attributes: { disabled: false, hidden: false },
    //       children: [],
    //     },
    //     {
    //       name: "Thống kê giáo viên",
    //       url: "/thongke/giaovien",
    //       attributes: { disabled: false, hidden: false },
    //       children: [],
    //     },
    //     {
    //       name: "Thống kê học sinh theo trường",
    //       url: "/thongke/hocsinh/truong",
    //       attributes: { disabled: false, hidden: false },
    //       children: []
    //     },
    //     {
    //       name: "Thống kê theo giới tính",
    //       url: "/thongke/gioitinh",
    //       attributes: { disabled: false, hidden: false },
    //       children: [],
    //     },
    //     {
    //       name: "Thống kê đánh giá định kỳ môn học",
    //       url: "/thongke/dinhky-monhoc",
    //       attributes: { disabled: false, hidden: false },
    //       children: [],
    //     },
    //     {
    //       name: "Thống kê tình trạng sức khỏe học sinh",
    //       url: "/thongke/suckhoe-hocsinh",
    //       attributes: { disabled: false, hidden: false },
    //       children: [],
    //     },
    //   ],
    // },
    // {
    //   name: "Báo cáo",
    //   url: "/report",
    //   children: [
    //     {
    //       name: "Báo cáo EMIS",
    //       url: "/report/bao-cao-emis",
    //       module: "bao-cao-emis",
    //       attributes: { disabled: false, hidden: false },
    //       children: [
    //         {
    //           name: "Báo cáo EMIS đầu năm",
    //           url: "/report/bao-cao-emis-dau-nam",
    //           module: "bao-cao-emis-dau-nam",
    //           attributes: { disabled: false, hidden: false },
    //           children: [],
    //         },
    //         {
    //           name: "Báo cáo EMIS giữa năm",
    //           url: "/report/bao-cao-emis-giua-nam",
    //           module: "bao-cao-emis-giua-nam",
    //           attributes: { disabled: false, hidden: false },
    //           children: [],
    //         },
    //         {
    //           name: "Báo cáo EMIS cuối năm",
    //           url: "/report/bao-cao-emis-cuoi-nam",
    //           module: "bao-cao-emis-cuoi-nam",
    //           attributes: { disabled: false, hidden: false },
    //           children: [],
    //         },
    //       ],
    //     },
    //     {
    //       name: "Báo cáo EQMS",
    //       url: "/report/bao-cao-eqms",
    //       module: "bao-cao-eqms",
    //       attributes: { disabled: false, hidden: false },
    //       children: [
    //         {
    //           name: "Báo cáo EQMS đầu năm",
    //           url: "/report/bao-cao-eqms-dau-nam",
    //           module: "bao-cao-eqms-dau-nam",
    //           attributes: { disabled: false, hidden: false },
    //           children: [],
    //         },
    //         {
    //           name: "Báo cáo EQMS giữa năm",
    //           url: "/report/bao-cao-eqms-giua-nam",
    //           module: "bao-cao-eqms-giua-nam",
    //           attributes: { disabled: false, hidden: false },
    //           children: [],
    //         },
    //         {
    //           name: "Báo cáo EQMS cuối năm",
    //           url: "/report/bao-cao-eqms-cuoi-nam",
    //           module: "bao-cao-eqms-cuoi-nam",
    //           attributes: { disabled: false, hidden: false },
    //           children: [],
    //         },
    //       ],
    //     },
    //   ]
    // },
    {
      name: "Hệ thống",
      url: "/hethong",
      children: [
        {
          name: "Tài khoản người dùng",
          url: "/hethong/nguoi-dung",
          module: "hethong-nguoi-dung",
          attributes: { disabled: false, hidden: false },
          children: [],
        },
        {
          name: "Đăng ký sổ liên lạc",
          url: "/hethong/dangky-so-lienlac",
          attributes: { disabled: false, hidden: false },
          children: [],
          
        },
        {
          name: "Nhóm quyền",
          url: "/hethong/nhomquyen",
          module: "hethong-nguoi-dung",
          attributes: { disabled: false, hidden: false },
          children: [],
        },
        {
          name: "Danh mục hệ thống",
          url: "/hethong/danh-muc",
          module: "hethong_danh-muc",
          attributes: { disabled: false, hidden: false },
          children: [],
        },
      ],
    }
  ],
};
