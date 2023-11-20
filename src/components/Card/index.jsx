import React from "react";
import { Avatar, Button, Card, Carousel } from "antd";
import { data } from "../../data";

const CardCourse = () => {
  let carouselRef = null;

  const goToPrev = () => {
    carouselRef?.prev();
  };

  const goToNext = () => {
    carouselRef?.next();
  };
  return (
    <div className="w-full h-full">
      <Carousel
        autoplay
        dots={true}
        slidesToShow={3}
        ref={(ref) => (carouselRef = ref)}
      >
        {data.map((item) => (
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
              <button className="btn-invite-course mt-2">XEM CHI TIẾT</button>
            </div>
          </Card>
        ))}
      </Carousel>
      <div>
        <span className="cursor-pointer btn-prev" onClick={goToPrev}>
          <i className="fa fa-chevron-left text-[32px] text-[#ccc]"></i>
        </span>
        <span className="cursor-pointer btn-next" onClick={goToNext}>
          <i className="fa fa-chevron-right text-[32px] text-[#ccc]"></i>
        </span>
      </div>
    </div>
  );
};

export default CardCourse;
