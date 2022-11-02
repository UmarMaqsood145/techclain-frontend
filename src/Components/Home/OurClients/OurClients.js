import React from "react";
import "./OurClients.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { OurClientsApi } from "./OurClientsApi";

function OurClients() {
  return (
    <div id="ourClients">
      <h1>
        OUR <span>CLIENTS</span>
      </h1>
      <div className="testi">
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={6}
          spaceBetween={10}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          className="mySwiper"
          breakpoints={{
            0: {
              slidesPerView: 2,
              spaceBetween: 10,
              slidesPerGroup: 2,
            },
            600: {
              slidesPerView: 2,
              spaceBetween: 10,
              slidesPerGroup: 2,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 10,
              slidesPerGroup: 4,
            },
            800: {
              slidesPerView: 6,
              spaceBetween: 30,
              slidesPerGroup: 6,
            },
          }}
        >
          {OurClientsApi.map((data, index) => (
            <SwiperSlide key={index}>
              <div className="client-det">
                <img src={data.pic} alt="" />
                <h5>{data.name}</h5>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default OurClients;
