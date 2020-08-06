export const navigation = {
  items: [
    // {
    //   name: "Trang chủ",
    //   url: "/",
    //   icon: "icon-speed",
    //   roles: ["admin", "manager"],
    // },
    {
      name: "Sách",
      url: "/sach",
      icon: "fa fas fa-book",
      roles: ["admin", "manager"],

      children: [
        {
          name: "Sách lớp 1",
          url: "/sach/sach-lop-1",
          roles: ["admin"],
        },
        {
          name: "Sách lớp 2",
          url: "/sach/sach-lop-2",
          roles: ["admin"],
        },
        {
          name: "Sách lớp 3",
          url: "/sach/sach-lop-3",
          roles: ["admin"],
        },
      ],
    },
    {
      name: "Khóa học",
      url: "/khoa-hoc",

      roles: ["admin", "manager"],

      children: [],
    },
  ],
};
