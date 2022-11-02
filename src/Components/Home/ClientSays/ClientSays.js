import React from "react";
import "./ClientSays.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { ClientSaysApi } from "./ClientSaysApi";
import { HiUserCircle } from "react-icons/hi";

function ClientSays() {
  return (
    <div id="clientSays">
      <h1>
        WHAT OUR CLIENTS <span>SAY</span>
      </h1>
      <div className="testi">
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={2}
          spaceBetween={30}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="mySwiper"
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
              slidesPerGroup: 1,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 10,
              slidesPerGroup: 1,
            },
            800: {
              slidesPerView: 2,
              spaceBetween: 10,
              slidesPerGroup: 2,
            },
          }}
        >
          {ClientSaysApi.map((data, index) => (
            <SwiperSlide key={index}>
              <div className="client-det">
                <HiUserCircle className="icon" />
                <div className="ms-4">
                  <h3>{data.name}</h3>
                  <p>{data.role}</p>
                </div>
              </div>
              <p className="mt-3">{data.des}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default ClientSays;
