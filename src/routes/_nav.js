export const navigation = {
  items: [
    // {
    //   name: "Trang chủ",
    //   url: "/",
    //   icon: "icon-speed",
    //   roles: ["admin", "manager"],
    // },
    {
      name: "Quản lý danh mục",
      url: "/manage",
      icon: "icon-menu1",
      roles: ["admin", "manager"],

      children: [
        {
          name: "Quản trị hệ thống",
          url: "/manage/system",
          icon: "icon-dot",
          roles: ["admin"],
        },
        {
          name: "Giáo viên",
          url: "/manage/teachers",
          icon: "icon-dot",
          roles: ["admin"],
        },
        {
          name: "Học sinh",
          url: "/manage/students",
          icon: "icon-dot",
          roles: ["manager"],
        },
        {
          name: "Phụ huynh",
          url: "/manage/parents",
          icon: "icon-dot",
          roles: ["admin", "manager"],
        },
        {
          name: "Môn học",
          url: "/manage/subjects",
          icon: "icon-dot",
          roles: ["admin", "manager"],
        },
        {
          name: "Lớp học",
          url: "/manage/classes",
          icon: "icon-dot",
          roles: ["admin", "manager"],
        },
        {
          name: "Nhà trường",
          url: "/manage/schools",
          icon: "icon-dot",
          roles: ["admin", "manager"],
        },
        {
          name: "Phòng GD",
          url: "/manage/edu-departments",
          icon: "icon-dot",
          roles: ["admin", "manager"],
        },
      ],
    },
    {
      name: "Quản lý học tập",
      url: "/study",
      icon: "icon-cap",
      roles: ["admin", "manager"],

      children: [
        // {
        //   name: "Thời khóa biểu",
        //   url: "/study/time-table",

        //   icon: "icon-dot",
        //   roles: ["admin", "manager"],
        // },
        // {
        //   name: "Nhận xét",
        //   url: "/",
        //   icon: "icon-dot",
        //   roles: ["admin", "manager"],
        // },
        {
          name: "Tổng kết - đánh giá",
          url: "/study/sum-up",
          icon: "icon-dot",
          roles: ["admin", "manager"],
        },
        // {
        //   name: "Điểm danh",
        //   url: "/",
        //   icon: "icon-dot",
        //   roles: ["admin", "manager"],
        // },
        {
          name: "Sự kiện",
          url: "/study/event",
          icon: "icon-dot",
          roles: ["admin", "manager"],
        },
      ],
    },
    {
      name: "Quản lý tin tức",
      url: "/news",
      icon: "icon-news",
      roles: ["admin", "manager"],

      children: [
        {
          name: "Bảng tin nhà trường",
          url: "/news/school",
          icon: "icon-dot",
          roles: ["admin", "manager"],
        },
        // {
        //   name: "Tin tức theo lớp",
        //   url: "/news/class",
        //   icon: "icon-dot",
        //   roles: ["admin", "manager"],
        // },
      ],
    },
    {
      name: "Hồ sơ học sinh",
      url: "/theme/typography",
      icon: "icon-student",
      roles: ["admin", "manager"],

      // children: [
      //   {
      //     name: "Quá trình học tập",
      //     url: "/",
      //     icon: "icon-dot",
      //     roles: ["admin", "manager"],
      //   },
      //   {
      //     name: "Sổ theo dõi sức khỏe",
      //     url: "/",
      //     icon: "icon-dot",
      //     roles: ["admin", "manager"],
      //   },
      // ],
    },

    {
      name: "Dịch vụ giáo dục",
      url: "/base",
      icon: "icon-home1",
      roles: ["admin", "manager"],
      // children: [
      //   {
      //     name: "Nhà cung cấp",
      //     url: "/",
      //     icon: "icon-dot",
      //     roles: ["admin", "manager"],
      //   },
      //   {
      //     name: "Sản phẩm",
      //     url: "/",
      //     icon: "icon-dot",
      //     roles: ["admin", "manager"],
      //   },
      //   {
      //     name: "Đơn hàng",
      //     url: "/",
      //     icon: "icon-dot",
      //     roles: ["admin", "manager"],
      //   },
      //   {
      //     name: "Báo cáo thống kê",
      //     url: "/",
      //     icon: "icon-dot",
      //     roles: ["admin", "manager"],
      //   },
      // ],
    },
    {
      name: "Liên lạc",
      url: "/communicate",
      icon: "icon-mail",
      roles: ["admin", "manager"],

      // children: [
      //   {
      //     name: "Thông báo",
      //     url: "/communicate/announcement",
      //     icon: "icon-dot",
      //     roles: ["admin", "manager"],
      //   },
      //   {
      //     name: "Tin nhắn",
      //     url: "/",
      //     icon: "icon-dot",
      //     roles: ["admin", "manager"],
      //   },
      // ],
    },
  ],
};
