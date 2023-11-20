import React, { useState } from "react";
import "./styles.css";
import {
  Col,
  Form,
  Row,
  Input,
  Checkbox,
  Pagination,
  Select,
  Card,
  Avatar,
} from "antd";
import { Option } from "antd/lib/mentions";
import antIcon2 from "../../assets/ant-icon-02.png";
import { data } from "../../data";

const sortOptions = [
  { label: "Khóa học mới nhất", value: "new" },
  { label: "Khóa học nhiều người học", value: "almost" },
  { label: "Khóa học sắp bắt đầu", value: "started" },
  { label: "A - Z", value: "apl" },
  { label: "Z - A", value: "unapl" },
];

const Courses = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;
  const [filterOptions, setFilterOptions] = useState({
    online: false,
    offline: false,
    easy: false,
    medium: false,
    hard: false,
    veryHard: false,
    backend: false,
    frontend: false,
    database: false,
    fast: false,
    other: false,
    stem: false,
  });
  const [selectedSortOption, setSelectedSortOption] = useState("");

  const [priceRange, setPriceRange] = useState({ from: 0, to: 10000000 });

  const handlePriceChange = (field, value) => {
    setPriceRange({
      ...priceRange,
      [field]: value,
    });
  };

  const handleCheckboxChange = (option) => {
    setFilterOptions({
      ...filterOptions,
      [option]: !filterOptions[option],
    });
  };

  const handleSortChange = (value) => {
    setSelectedSortOption(value);
    // Đặt logic xử lý dữ liệu theo lựa chọn tại đây
  };

  const filterData = () => {
    let filteredData = data.filter((item) => {
      const itemPrice = parseInt(item.price.replace(/,/g, ""));
      return (
        itemPrice >= priceRange.from &&
        itemPrice <= priceRange.to &&
        (filterOptions.online ? item.FOL === "online" : true) &&
        (filterOptions.offline ? item.FOL === "offline" : true) &&
        (filterOptions.easy ? item.level === "easy" : true) &&
        (filterOptions.medium ? item.level === "medium" : true) &&
        (filterOptions.hard ? item.level === "hard" : true) &&
        (filterOptions.veryHard ? item.level === "veryHard" : true) &&
        (filterOptions.backend ? item.type === "backend" : true) &&
        (filterOptions.frontend ? item.type === "frontend" : true) &&
        (filterOptions.database ? item.type === "database" : true) &&
        (filterOptions.fast ? item.type === "fast" : true) &&
        (filterOptions.other ? item.type === "other" : true) &&
        (filterOptions.stem ? item.type === "stem" : true)
      );
    });
    switch (selectedSortOption) {
      case "new":
        filteredData = filteredData.sort((a, b) => {
          return new Date(b.createdAt) - new Date(a.createdAt);
        });
        break;
      case "almost":
        filteredData = filteredData.sort((a, b) => {
          return b.count - a.count;
        });
        break;
      case "started":
        filteredData = filteredData.sort((a, b) => {
          // Sắp xếp theo ngày bắt đầu
          // Ví dụ: nếu có trường "startDate" thay cho "createdAt"
          return new Date(a.createdAt) - new Date(b.createdAt);
        });
        break;
      case "apl":
        filteredData = filteredData.sort((a, b) => {
          // Sắp xếp theo tên A-Z (ascending)
          return a.title.localeCompare(b.title);
        });
        break;
      case "unapl":
        filteredData = filteredData.sort((a, b) => {
          // Sắp xếp theo tên Z-A (descending)
          return b.title.localeCompare(a.title);
        });
        break;
      default:
        // Mặc định sắp xếp theo một tiêu chí nào đó
        filteredData = filteredData.sort(/* Sắp xếp mặc định */);
        break;
    }
    return filteredData;
  };

  const indexOfLastItem = currentPage * pageSize;
  const indexOfFirstItem = indexOfLastItem - pageSize;
  const currentItems = filterData().slice(indexOfFirstItem, indexOfLastItem);
  return (
    <div>
      <div className="banner__course">
        <div className="content__banner_course">
          <h1>Danh sách khoá học</h1>
          <p>
            <a href="/">Trang chủ</a>
            <span> &gt; </span> Khoá học
          </p>
        </div>
      </div>
      <div className="course-content-container">
        <div className="container-fluid">
          <Row>
            <Col flex={1}>
              <div>
                <h2 className="title-courses uppercase">Khoảng giá</h2>
              </div>
              <div>
                <Form layout="vertical">
                  <Form.Item label="Từ giá">
                    <Input
                      defaultValue={priceRange.from.toString()}
                      className="relative price-input"
                      onChange={(e) =>
                        handlePriceChange("from", parseInt(e.target.value))
                      }
                    />
                    <p className="absolute top-2 left-1/3">VND</p>
                  </Form.Item>
                  <Form.Item label="Đến giá">
                    <Input
                      defaultValue={priceRange.to.toString()}
                      className="relative price-input"
                      onChange={(e) =>
                        handlePriceChange("to", parseInt(e.target.value))
                      }
                    />
                    <p className="absolute top-2 left-1/3">VND</p>
                  </Form.Item>
                  <div>
                    <h2 className="title-courses uppercase">HÌNH THỨC HỌC</h2>
                    <Form.Item>
                      <div className="flex flex-col">
                        <Checkbox
                          onChange={() => handleCheckboxChange("online")}
                          checked={filterOptions.online}
                        >
                          Online
                        </Checkbox>
                        <Checkbox
                          onChange={() => handleCheckboxChange("offline")}
                          checked={filterOptions.offline}
                        >
                          Offline
                        </Checkbox>
                      </div>
                    </Form.Item>
                  </div>
                  <div>
                    <h2 className="title-courses uppercase">TRÌNH ĐỘ</h2>
                    <Form.Item>
                      <div className="flex flex-col">
                        <div className="flex justify-between items-center">
                          <Checkbox
                            onChange={() => handleCheckboxChange("easy")}
                            checked={filterOptions.easy}
                          >
                            Dễ
                          </Checkbox>
                          <img
                            src={antIcon2}
                            alt=""
                            className="w-10 h-10 object-cover"
                          />
                        </div>
                        <div className="flex justify-between items-center">
                          <Checkbox
                            onChange={() => handleCheckboxChange("medium")}
                            checked={filterOptions.medium}
                          >
                            Trung Bình
                          </Checkbox>
                          <img
                            src={antIcon2}
                            alt=""
                            className="w-10 h-10 object-cover"
                          />
                        </div>
                        <div className="flex justify-between items-center">
                          <Checkbox
                            onChange={() => handleCheckboxChange("hard")}
                            checked={filterOptions.hard}
                          >
                            Khó
                          </Checkbox>
                          <img
                            src={antIcon2}
                            alt=""
                            className="w-10 h-10 object-cover"
                          />
                        </div>
                        <div className="flex justify-between items-center">
                          <Checkbox
                            onChange={() => handleCheckboxChange("veryHard")}
                            checked={filterOptions.veryHard}
                          >
                            Cực khó
                          </Checkbox>
                          <img
                            src={antIcon2}
                            alt=""
                            className="w-10 h-10 object-cover"
                          />
                        </div>
                      </div>
                    </Form.Item>
                  </div>
                  <div>
                    <h2 className="title-courses uppercase">Lĩnh vực</h2>
                    <Form.Item>
                      <div className="flex flex-col">
                        <Checkbox
                          onChange={() => handleCheckboxChange("backend")}
                          checked={filterOptions.backend}
                        >
                          Back-End
                        </Checkbox>
                        <Checkbox
                          onChange={() => handleCheckboxChange("frontend")}
                          checked={filterOptions.frontend}
                        >
                          Front-End
                        </Checkbox>
                        <Checkbox
                          onChange={() => handleCheckboxChange("database")}
                          checked={filterOptions.database}
                        >
                          Database
                        </Checkbox>
                        <Checkbox
                          onChange={() => handleCheckboxChange("fast")}
                          checked={filterOptions.fast}
                        >
                          Cấp tốc
                        </Checkbox>
                        <Checkbox
                          onChange={() => handleCheckboxChange("other")}
                          checked={filterOptions.other}
                        >
                          Other
                        </Checkbox>
                        <Checkbox
                          onChange={() => handleCheckboxChange("stem")}
                          checked={filterOptions.stem}
                        >
                          STEM
                        </Checkbox>
                      </div>
                    </Form.Item>
                  </div>
                  <div>
                    <button className="btn-search-course w-full text-center bg-[#ff630e]">
                      Tìm kiếm
                    </button>
                  </div>
                </Form>
              </div>
            </Col>
            <Col flex={500} className="ml-4">
              <div className="flex justify-between">
                <h5 className="font-bold">{data.length} Khóa học</h5>
                <Select
                  value={selectedSortOption}
                  style={{ width: "234.67px" }}
                  onChange={handleSortChange}
                >
                  {sortOptions.map((option) => (
                    <Option key={option.value} value={option.value}>
                      {option.label}
                    </Option>
                  ))}
                </Select>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 mt-3 gap-2">
                {currentItems.map((item) => (
                  <div key={item.id}>
                    <Card
                      style={{
                        width: "300px",
                      }}
                      cover={<img alt="example" src={item.thumbnail} />}
                      className="card-mobile"
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
                          <h1 className="card-title capitalize">
                            {item.title}
                          </h1>
                        </div>
                        <div className="flex">
                          <p className="sub-title" style={{ color: "#999" }}>
                            Mentor &nbsp;
                          </p>
                          <p
                            className="sub-title"
                            style={{ color: "#ff630e " }}
                          >
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
                  </div>
                ))}
              </div>
              <Pagination
                current={currentPage}
                pageSize={pageSize}
                total={data.length}
                onChange={(page) => setCurrentPage(page)}
                style={{ marginTop: "20px", textAlign: "center" }}
              />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Courses;
