import React from "react";
import iconLogoFooter from "../assets/icon-logo-footer.png";
import iconLocation from "../assets/icon-location.png";
import iconMail from "../assets/icon-gmail.png";
import iconPhone from "../assets/icon-phone.png";

const Footer = () => {
  return (
    <footer className=" text-center text-lg-start bg-main">
      <section className="">
        <div className="w-container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <img
                src={iconLogoFooter}
                class="object-cover"
                style={{
                  width: "200px",
                  height: "75px",
                }}
                alt="Logo BSmart"
              />

              <p className="text-white">
                Chúng tôi cung cấp các khoá học chất lượng cao để cải thiện các
                kỹ năng lập trình của bạn. Tất cả các mentor của chúng tôi đều
                có nhiều kinh nghiệm trong thực tế và giảng dạy.
              </p>
              <p className="text-white font-bold">Theo dõi chúng tôi tại:</p>
              <ul className="flex items-center gap-4 text-white">
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

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 text-white">
              <h6 className=" fw-bold my-4  text-tgreen text-2xl">Menu</h6>
              <p>
                <a href="/" className="text-reset">
                  Trang chủ
                </a>
              </p>
              <p>
                <a href="/" className="text-reset">
                  Về chúng tôi
                </a>
              </p>
              <p>
                <a href="/" className="text-reset">
                  Nền tảng LMS
                </a>
              </p>
              <p>
                <a href="/" className="text-reset">
                  Khóa học STEM
                </a>
              </p>
              <p>
                <a href="/" className="text-reset">
                  Khóa học
                </a>
              </p>
              <p>
                <a href="/" className="text-reset">
                  Mentor
                </a>
              </p>
              <p>
                <a href="/" className="text-reset">
                  Blog
                </a>
              </p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 text-white">
              <h6 className=" fw-bold my-4 text-tgreen text-2xl">Điều khoản</h6>
              <ul className="flex flex-col gap-4">
                <li>Chính sách bảo mật</li>
                <li>Điều khoản dịch vụ</li>
              </ul>
              <h6 className=" fw-bold my-2 text-tgreen text-2xl">
                Cộng tác viên
              </h6>
              <ul className="flex flex-col gap-4">
                <li>Đăng ký Cộng tác viên</li>
                <li>Đăng ký Mentor</li>
              </ul>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 text-white">
              <h6 className=" fw-bold my-4 text-tgreen text-2xl">
                Liên hệ với chúng tôi
              </h6>
              <ul className="flex flex-col gap-4">
                <li className="me-4 flex items-center">
                  <img
                    src={iconLocation}
                    className="w-12 h-12 object-cover"
                    alt="Liên hệ với BSmart thông qua Gmail"
                  />
                  Tòa S9.02A, Vinhomes Grand Park, TP.Thủ Đức
                </li>
                <li className="me-4 flex items-center">
                  <img
                    src={iconMail}
                    className="w-12 h-12 object-cover"
                    alt="Liên hệ với BSmart thông qua Gmail"
                  />
                  admin@bsmart.edu.vn
                </li>
                <li className="flex items-center">
                  <img
                    src={iconPhone}
                    className="w-12 h-12 object-cover"
                    alt="Liên hệ với BSmart thông qua số điện thoại"
                  />
                  028 9999 79 39
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
