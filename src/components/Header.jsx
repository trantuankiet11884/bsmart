import React, { useEffect, useState } from "react";
import { Badge, Input } from "antd";
import iconMail from "../assets/icon-gmail.png";
import iconPhone from "../assets/icon-phone.png";
import iconLogo from "../assets/icon-logo.png";
import iconCart from "../assets/icon-shopping-cart.png";

import { Menu } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
const { Search } = Input;

const items = [
  {
    label: "Trang Chủ",
    key: "home",
    path: "/",
  },
  {
    label: "Về Chúng Tôi",
    key: "aboutus",
    children: [
      {
        type: "option 1",
        label: "Câu chuyện Founder",
      },
      {
        type: "option 2",
        label: "Nền tảng LMS",
      },
    ],
  },
  {
    label: "Khóa Học STEM",
    key: "course",
  },
  {
    label: "Khóa Học",
    key: "courses",
    path: "/courses",
    children: [
      {
        type: "course1",
        label: "Back-End",
        path: "/courses/backend",
      },
      {
        type: "course2",
        label: "Frontend",
        path: "/courses/frontend",
      },
      {
        type: "course3",
        label: "Database",
        path: "/courses/database",
      },
      {
        type: "course4",
        label: "Cấp tốc",
        path: "/courses/fast",
      },
      {
        type: "course5",
        label: "Other",
        path: "/courses/other",
      },
      {
        type: "course6",
        label: "STEM",
        path: "/courses/stem",
      },
    ],
  },
  {
    label: "Mentor",
    key: "mentor",
  },
  {
    label: "Blog",
    key: "blog",
    children: [
      {
        type: "blog1 ",
        label: "Công nghệ",
      },
      {
        type: "blog2 ",
        label: "Khuyến mãi",
      },
      {
        type: "blog3 ",
        label: "Giáo dục",
      },
    ],
  },
];

const Header = () => {
  const [current, setCurrent] = useState("home");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Extract the pathname from the location
    const path = location.pathname;
    // Find the matching key from the items array
    const selectedItem = items.find((item) => item.path === path);
    if (selectedItem) {
      setCurrent(selectedItem.key);
    }
  }, [location.pathname]);

  const onClick = (e) => {
    setCurrent(e.key);
    const selectedItem = items.find((item) => item.key === e.key);
    if (selectedItem && selectedItem.path) {
      navigate(selectedItem.path);
    }
  };

  const onSearch = () => {
    console.log(123);
  };
  return (
    <div className="bg-main">
      <div className=" top-header h-16 py-4 opacity-100 transition-opacity">
        <div className="container-fluid">
          <div className="px-4 h-10 flex items-center justify-between text-white">
            <div className="text-left">
              <ul className="flex items-center gap-4">
                <li>
                  <i className="fa-brands fa-facebook-f"></i>
                </li>
                <li>
                  <i className="fa-brands fa-linkedin-in"></i>
                </li>
                <li>
                  <i className="fa-brands fa-youtube"></i>
                </li>
              </ul>
            </div>
            <div>
              <ul className="flex items-center">
                <li className="me-4 flex items-center">
                  <img
                    src={iconMail}
                    className="w-8 h-8 object-cover"
                    alt="Liên hệ với BSmart thông qua Gmail"
                  />
                  admin@bsmart.edu.vn
                </li>
                <li className="flex items-center">
                  <img
                    src={iconPhone}
                    className="w-8 h-8 object-cover"
                    alt="Liên hệ với BSmart thông qua số điện thoại"
                  />
                  028 9999 79 39
                </li>
              </ul>
            </div>
            <div className="w-[25%] flex justify-center h-10">
              <Search placeholder="input search text" onSearch={onSearch} />
            </div>
            <div className="flex justify-end">
              <ul className="flex gap-1">
                <li>Đăng nhập</li>
                <li>
                  <small>|</small>
                </li>
                <li>Đăng ký</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[99%] bg-white py-4 sticky top-0 left-0 right-0 bottom-0 z-10 transition-opacity">
        <div className="container-fluid">
          <div className="flex items-center justify-between">
            <div>
              <img
                src={iconLogo}
                className="h-[75px] w-[190px] object-cover"
                alt="Logo BSmart"
              />
            </div>
            <div className="w-container">
              <Menu
                breakpoint="lg"
                collapsedWidth="0"
                onClick={onClick}
                selectedKeys={[current]}
                mode="horizontal"
                items={items}
                className="text-[17px] text-main"
              />
            </div>
            <div>
              <Badge count={5}>
                <img
                  src={iconCart}
                  className="w-[62px] h-[62px] object-cover"
                  alt="Giỏ hàng của bạn tại BSmart"
                />
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
