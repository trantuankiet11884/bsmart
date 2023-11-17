import React from "react";
import "./styles.css";
import { Avatar, Card, Carousel } from "antd";
import CardCourse from "../../components/Card/index";
import { dataFast, mentor } from "../../data";
import logodh1 from "../../assets/logo-dai-hoc-01.png";
import logodh2 from "../../assets/logo-dai-hoc-02.png";
import logodh3 from "../../assets/logo-dai-hoc-03.png";
import logodh4 from "../../assets/logo-dai-hoc-04.png";
import logodh5 from "../../assets/logo-dai-hoc-05.png";
import logodh6 from "../../assets/logo-dai-hoc-06.png";
import logodh7 from "../../assets/logo-dai-hoc-07.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <section className="banner">
        <div className="container">
          <div className="caption-content text-center">
            <h4>Khởi đầu sự nghiệp của bạn</h4>
            <h2>Trở thành lập trình viên chuyên nghiệp tại BSMART</h2>
            <p>
              Với đội ngũ Mentor có nhiều năm kinh nghiệm giảng dạy cùng các
              khóa học chất lượng. BSMART sẽ giúp các bạn có định hướng về nghề
              nghiệp và phát triển bản thân trên con đường trở thành lập trình
              viên chuyên nghiệp
            </p>
            <div className="mt-5 banner-control">
              <Link to="/courses" className="btn btn-primary-custom-select">
                Xem khoá học
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="aboutus">
        <div className="container-fluid">
          <div className="aboutus-content">
            <h2 className="text-center section-heading section-heading-home">
              Về chúng tôi
            </h2>
            <div className="row btn-aboutus-home-page">
              <div className="col-md-6 col-sm-12 container-select-course-mobile">
                <p className="about-description text-[20px]">
                  BSMART được thành lập với mục tiêu trở thành nền tảng tin cậy
                  về đào tạo lập trình viên, kết nối Mentor và Mentee. Với đội
                  ngũ Mentor giàu kinh nghiệm và chuyên môn, BSMART cam kết mang
                  đến các khóa học lập trình chất lượng nhất. Hệ thống khóa học
                  đa dạng và linh hoạt, từ cơ bản đến nâng cao, giúp học viên có
                  thể lựa chọn các khóa học phù hợp với nhu cầu và khả năng của
                  mình. BSMART cập nhật và áp dụng những công nghệ mới, giúp học
                  viên và Mentor được tiếp cận với những kiến thức và kỹ năng
                  mới nhất trong lập trình. Bên cạnh đó, BSMART luôn đặt sự quan
                  tâm, hỗ trợ học viên trong quá trình học tập và phát triển sự
                  nghiệp sau khi tốt nghiệp.
                </p>
                <div className="d-flex mt-3 justify-content-center">
                  <Link
                    to="/courses"
                    className="btn btn-primary-custom-select btn-primary-custom-select-mobile"
                  >
                    Xem khoá học
                  </Link>
                  <a href="https://www.facebook.com/bsmart.edu.vn">
                    <button className="btn btn-outline-secondary-custom btn-outline-secondary-custom-laptop ms-3">
                      Hỗ trợ tư vấn
                    </button>
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
                <div className="banner-aboutus">
                  <img
                    src="/src/assets/banner-2.png"
                    alt="BSmart cùng đội ngũ hỗ trợ và giảng viên chuyên nghiệp mong muốn kết nối đến Mentee, trở thành nền tảng giáo dục đào tạo lập trình viên chuyên nghiệp"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="advantages">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4 col-xs-12 col-sm-12">
              <div className="service-card">
                <div className="flex items-center pt-2 pb-2 mb-3">
                  <div className="service-card-icon me-2">
                    <i className="fa fa-check-circle-o"></i>
                  </div>
                  <h4 className="service-card-title">
                    Học theo lộ trình, có định hướng
                  </h4>
                </div>
                <div className="service-card-content">
                  BSmart sẽ định hướng và đưa ra các lộ trình học lập trình nhằm
                  phát triển năng lực và niềm đam mê lập trình của bạn để có
                  việc ngay sau khi học.
                </div>
              </div>
            </div>
            <div className="col-md-4 col-xs-12 col-sm-12">
              <div className="service-card">
                <div className="flex items-center pt-2 pb-2">
                  <div className="service-card-icon me-2">
                    <i className="fa fa-cogs"></i>
                  </div>
                  <h4 className="service-card-title">
                    Nền tảng cốt lõi trong lập trình
                  </h4>
                </div>
                <div className="service-card-content">
                  BSmart cung cấp những nền tảng, giá trị tư duy cốt lõi nhất
                  trong lập trình. Bạn sẽ tự tin trước sự thay đổi của công nghệ
                  và môi trường làm việc.
                </div>
              </div>
            </div>
            <div className="col-md-4 col-xs-12 col-sm-12">
              <div className="service-card">
                <div className="d-flex align-items-center pt-2 pb-2">
                  <div className="service-card-icon me-2">
                    <i className="fa fa-fire"></i>
                  </div>
                  <h4 className="service-card-title">
                    Mài giũa bạn qua thực tế
                  </h4>
                </div>
                <div className="service-card-content">
                  Đội ngũ Mentor là những người dày dặn kinh nghiệm qua các dự
                  án thực tế tại các công ty lớn sẽ truyền đạt những kinh nghiệm
                  "máu lửa" cho bạn.
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-xs-12 col-sm-12">
              <div className="service-card">
                <div className="d-flex align-items-center pt-2 pb-2">
                  <div className="service-card-icon me-2">
                    <i className="fa fa-users"></i>
                  </div>
                  <h4 className="service-card-title">Mentor tận tâm</h4>
                </div>
                <div className="service-card-content">
                  Bạn sẽ được giao dự án và Teamwork ngay từ ngày đầu tiên. Đóng
                  vai trò một thành viên trong quy trình Scrum, Agile. Được
                  Mentor hỗ trợ tận tâm, nhiệt tình.
                </div>
              </div>
            </div>
            <div className="col-md-4 col-xs-12 col-sm-12">
              <div className="service-card">
                <div className="d-flex align-items-center pt-2 pb-2">
                  <div className="service-card-icon me-2">
                    <i className="fa fa-qrcode"></i>
                  </div>
                  <h4 className="service-card-title">Công nghệ mới, thực tế</h4>
                </div>
                <div className="service-card-content">
                  Bạn được học và trải nghiệm các công nghệ lập trình mới nhất,
                  chuyên sâu, bám sát nhu cầu tuyển dụng thực tế từ doanh
                  nghiệp.
                </div>
              </div>
            </div>
            <div className="col-md-4 col-xs-12 col-sm-12">
              <div className="service-card">
                <div className="d-flex align-items-center pt-2 pb-2">
                  <div className="service-card-icon me-2">
                    <i className="fa fa-trophy"></i>
                  </div>
                  <h4 className="service-card-title">
                    Trao tay chìa khóa thành công
                  </h4>
                </div>
                <div className="service-card-content">
                  Hướng dẫn viết CV, phỏng vấn. Kết nối, gặp gỡ, phỏng vấn cùng
                  doanh nghiệp ngay sau khi tốt nghiệp.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="learning-path">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 col-sm-12 p-0 image-mobile-home-page">
              <div className="left-section left-section-mobile">
                <div className="left-section-content">
                  <h2 className="text-center">Trái ngành</h2>
                  <p className="text-center">From Zero to Hero</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 p-0 image-mobile-home-page">
              <div className="right-section right-section-mobile">
                <div className="right-section-content">
                  <h2 className="text-center">Đã biết lập trình</h2>
                  <p className="text-center">
                    Đã có kiến thức tư duy lập trình và OOP
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="courses-section courses-section-mobile-home-page">
        <div className="container-fluid">
          <div className="courses-content">
            <h2 className="section-heading section-heading-course-title text-center">
              Khoá học tiêu biểu
            </h2>
          </div>
          <div className="container-fluid ">
            <div className="">
              <CardCourse />
            </div>
          </div>
        </div>
      </section>
      <section classname="courses-section courses-section-mobile-home-page">
        <div className="container-fluid">
          <div className="courses-content">
            <h2 className="section-heading section-heading-course-title text-center">
              Khoá học cấp tốc
            </h2>
          </div>
          <div className="container-fluid">
            <Carousel autoplay dots={true} slidesToShow={3}>
              {dataFast.map((item) => (
                <Card
                  style={{
                    width: "200px",
                  }}
                  cover={<img alt="example" src={item.thumbnail} />}
                  key={item.id}
                >
                  <div className="relative ">
                    <p className="absolute top-[-25%] left-[-5%]">
                      <div className="flex justify-between">
                        <Avatar shape="square" size={64} src={item.img} />
                      </div>
                    </p>
                    <div className="flex flex-col">
                      <div className="">
                        <img
                          src={item.icon}
                          className="icon-title-course top-[-30px] right-[-30px]"
                          alt="Cấp độ khóa học của BSmart"
                        />
                      </div>
                      <h1 className="card-title capitalize">{item.title}</h1>
                    </div>
                    <div className="flex">
                      <p className="sub-title" style={{ color: "#999" }}>
                        Mentor &nbsp;
                      </p>
                      <p className="sub-title" style={{ color: "#ff630e " }}>
                        {item.author}
                      </p>
                    </div>
                    <span className="flex items-center mr-2">
                      <i className="fa fa-user"></i>
                      <i className="cl-icon-user font-medium text-[14px]">
                        &nbsp; {`${item.count} Học viên`}
                      </i>
                    </span>
                    <div className="content">
                      <p className="content-card">{item.content}</p>
                    </div>
                    <div className="ratings">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa-solid fa-star-half-stroke"></i>
                    </div>
                  </div>
                  <div className="flex items-center  gap-2">
                    <span className="price">{`${item.price} VND`}</span>
                    <span className="flex items-center">
                      <i className="fa fa-calendar text-lg"></i>
                      <i className="text-sm font-medium">
                        &nbsp; {item.lesson} Buổi học
                      </i>
                    </span>
                  </div>
                  <div>
                    <button className="btn-invite-course mt-2">
                      XEM CHI TIẾT
                    </button>
                  </div>
                </Card>
              ))}
            </Carousel>
          </div>
        </div>
      </section>
      <section className="courses-section courses-section-mobile-home-page">
        <div className="container-fluid">
          <div className="courses-content">
            <h2 className="section-heading section-heading-course-title text-center">
              Mentor tiêu biểu
            </h2>
          </div>
          <div className="container-fluid ">
            <div className="mentor">
              <Carousel autoplay dots={true} slidesToShow={3}>
                {mentor.map((item) => (
                  <Card
                    style={{ width: "200px" }}
                    cover={<img src={item.thumbnail} alt="mentor" />}
                    key={item.id}
                  >
                    <div className="mentor_card-title">
                      <h1 className="">{item.name}</h1>
                    </div>
                    <div className="mentor_card-content">{item.desc}</div>
                  </Card>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </section>
      <section className="advantages-2">
        <div className="container">
          <div className="advantages-2-content">
            <h4 className="text-center">
              Định hướng và Chuẩn hoá lộ trình học tập
            </h4>
            <h2 className="text-center">
              Học Thật, Dự Án Thật, Mentor Tận Tâm
            </h2>
            <div className="flex justify-center">
              <a
                href="/course"
                className="btn btn-primary-custom-select btn-primary-custom-select-mobile"
              >
                Xem khoá học
              </a>
              <a href="https://www.facebook.com/bsmart.edu.vn">
                <button className="btn btn-outline-secondary-custom btn-outline-secondary-custom-laptop ms-3">
                  Hỗ trợ tư vấn
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="logo-slide-1">
        <div className="infomation">
          <div className="container">
            <div className="row">
              <div className="introduction">
                <h5>Nhận được sự tin tưởng của các đối tác</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="logo-section">
          <div className="container">
            <Carousel autoplay dots={true} slidesToShow={4}>
              <div>
                <img src={logodh1} className="logo-section-img" alt="logo" />
              </div>
              <div>
                <img src={logodh2} className="logo-section-img" alt="logo1" />
              </div>
              <div>
                <img src={logodh3} className="logo-section-img" alt="logo2" />
              </div>
              <div>
                <img src={logodh4} className="logo-section-img" alt="logo3" />
              </div>
              <div>
                <img src={logodh5} className="logo-section-img" alt="logo4" />
              </div>
              <div>
                <img src={logodh6} className="logo-section-img" alt="logo5" />
              </div>
              <div>
                <img src={logodh7} className="logo-section-img" alt="logo6" />
              </div>
            </Carousel>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
