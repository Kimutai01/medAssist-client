import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { BsArrowRightShort } from "react-icons/bs";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import All from "../components/All";
import Articles from "../components/Articles";
import News from "../components/News";

const Blog = () => {
  const [activeComponent, setActiveComponent] = useState("all");
  const swipe = () => {
    const swiper = document.querySelector(".swiper-container").swiper;
    swiper.slideNext();
  };

  const swipeBack = () => {
    const swiper = document.querySelector(".swiper-container").swiper;
    swiper.slidePrev();
  };
  return (
    <>
      <div className="bg-[#131830] pt-10">
        <h1 className="text-[#3d65ff] text-center uppercase font-bold text-lg">
          Our Blog
        </h1>

        <h1 className="text-[#fff] text-center font-extrabold text-7xl mt-5">
          News & articles
        </h1>

        <div className="px-5 mt-20 pb-20">
          <Swiper
            slidesPerView={2}
            spaceBetween={30}
            modules={[Pagination, Navigation]}
            className="swiper-container"
          >
            <SwiperSlide className="bg-[#ffffff] rounded-3xl group overflow-hidden">
              <img
                src="https://assets.website-files.com/644bde7533aab926a0e2c31f/645b21ea2e6d6fd577f55154_vaccines-protecting-featured-image-doctr-x-webflow-template-p-1080.jpg"
                alt="doctor"
                className="rounded-t-3xl transform-gpu transition-transform scale-100 group-hover:scale-110"
              />
              <div className="p-8">
                <h1 className="text-[#13182f] font-bold text-2xl group-hover:text-[#3d65ff]">
                  3 simple and easy steps to jump-start your heart health
                </h1>
                <p className="text-[#666e82] font-medium text-lg mt-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam voluptatum, quibusdam, quia, quod voluptates
                  voluptate voluptatibus quos doloribus quas voluptatem quidem.
                </p>
                <div className="flex items-center justify-between mt-5">
                  <p className="bg-[#f3f8ff] font-medium text-[#3d65ff] py-4 px-6 rounded-full">
                    News
                  </p>
                  <p className="text-lg font-medium">July 20, 2023</p>
                  <div className="flex items-center font-medium">
                    <p className="group-hover:text-[#3d65ff]">Read more</p>
                    <BsArrowRightShort
                      className="transform translate-x-0 group-hover:translate-x-2 group-hover:text-[#3d65ff] transition-transform"
                      size={30}
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="bg-[#ffffff] rounded-xl group overflow-hidden">
              <img
                src="https://assets.website-files.com/644bde7533aab926a0e2c31f/645b21ea2e6d6fd577f55154_vaccines-protecting-featured-image-doctr-x-webflow-template-p-1080.jpg"
                alt="doctor"
                className="rounded-t-xl transform-gpu transition-transform scale-100 group-hover:scale-110"
              />
              <div className="p-8">
                <h1 className="text-[#13182f] font-bold text-2xl group-hover:text-[#3d65ff]">
                  3 simple and easy steps to jump-start your heart health
                </h1>
                <p className="text-[#666e82] font-medium text-lg mt-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam voluptatum, quibusdam, quia, quod voluptates
                  voluptate voluptatibus quos doloribus quas voluptatem quidem.
                </p>
                <div className="flex items-center justify-between mt-5">
                  <p className="bg-[#f3f8ff] font-medium text-[#3d65ff] py-4 px-6 rounded-full">
                    News
                  </p>
                  <p className="text-lg font-medium">July 20, 2023</p>
                  <div className="flex items-center font-medium">
                    <p className="group-hover:text-[#3d65ff]">Read more</p>
                    <BsArrowRightShort
                      className="transform translate-x-0 group-hover:translate-x-2 group-hover:text-[#3d65ff] transition-transform"
                      size={30}
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="bg-[#ffffff] rounded-xl group overflow-hidden">
              <img
                src="https://assets.website-files.com/644bde7533aab926a0e2c31f/645b21ea2e6d6fd577f55154_vaccines-protecting-featured-image-doctr-x-webflow-template-p-1080.jpg"
                alt="doctor"
                className="rounded-t-xl transform-gpu transition-transform scale-100 group-hover:scale-110"
              />
              <div className="p-8">
                <h1 className="text-[#13182f] font-bold text-2xl group-hover:text-[#3d65ff]">
                  3 simple and easy steps to jump-start your heart health
                </h1>
                <p className="text-[#666e82] font-medium text-lg mt-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam voluptatum, quibusdam, quia, quod voluptates
                  voluptate voluptatibus quos doloribus quas voluptatem quidem.
                </p>
                <div className="flex items-center justify-between mt-5">
                  <p className="bg-[#f3f8ff] font-medium text-[#3d65ff] py-4 px-6 rounded-full">
                    News
                  </p>
                  <p className="text-lg font-medium">July 20, 2023</p>
                  <div className="flex items-center font-medium">
                    <p className="group-hover:text-[#3d65ff]">Read more</p>
                    <BsArrowRightShort
                      className="transform translate-x-0 group-hover:translate-x-2 group-hover:text-[#3d65ff] transition-transform"
                      size={30}
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="bg-[#ffffff] rounded-xl group overflow-hidden">
              <img
                src="https://assets.website-files.com/644bde7533aab926a0e2c31f/645b21ea2e6d6fd577f55154_vaccines-protecting-featured-image-doctr-x-webflow-template-p-1080.jpg"
                alt="doctor"
                className="rounded-t-xl transform-gpu transition-transform scale-100 group-hover:scale-110"
              />
              <div className="p-8">
                <h1 className="text-[#13182f] font-bold text-2xl group-hover:text-[#3d65ff]">
                  3 simple and easy steps to jump-start your heart health
                </h1>
                <p className="text-[#666e82] font-medium text-lg mt-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam voluptatum, quibusdam, quia, quod voluptates
                  voluptate voluptatibus quos doloribus quas voluptatem quidem.
                </p>
                <div className="flex items-center justify-between mt-5">
                  <p className="bg-[#f3f8ff] font-medium text-[#3d65ff] py-4 px-6 rounded-full">
                    News
                  </p>
                  <p className="text-lg font-medium">July 20, 2023</p>
                  <div className="flex items-center font-medium">
                    <p className="group-hover:text-[#3d65ff]">Read more</p>
                    <BsArrowRightShort
                      className="transform translate-x-0 group-hover:translate-x-2 group-hover:text-[#3d65ff] transition-transform"
                      size={30}
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="flex justify-center mt-4">
            <div
              className="bg-blue-500 text-white rounded-full p-2 cursor-pointer mx-2"
              onClick={swipeBack}
            >
              <BsArrowLeft size={30} />
            </div>
            <div
              className="bg-blue-500 text-white rounded-full p-2 cursor-pointer mx-2"
              onClick={swipe}
            >
              <BsArrowRight size={30} />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#ffffff] py-20 px-20">
        <div className="flex justify-between">
          <h1 className="text-[#13182f] font-bold text-4xl">Latest articles</h1>
          <div className="flex gap-5">
            {/* <p className="bg-[#f3f8ff] font-medium text-[#3d65ff] py-4 px-6 rounded-full">
              All
            </p> */}
            <div onClick={() => setActiveComponent("all")}>
              {activeComponent === "all" ? (
                <h1 className="bg-[#f3f8ff] font-medium text-[#3d65ff] py-4 px-6 rounded-full">
                  All
                </h1>
              ) : (
                <h1 className="font-medium text-[#666e82] py-4 px-6 rounded-full">
                  All
                </h1>
              )}
            </div>
            {/* <p className="bg-[#f3f8ff] font-medium text-[#3d65ff] py-4 px-6 rounded-full">
              Articles
            </p> */}
            <div onClick={() => setActiveComponent("articles")}>
              {activeComponent === "articles" ? (
                <h1 className="bg-[#f3f8ff] font-medium text-[#3d65ff] py-4 px-6 rounded-full">
                  Articles
                </h1>
              ) : (
                <h1 className="font-medium text-[#666e82] py-4 px-6 rounded-full">
                  Articles
                </h1>
              )}
            </div>

            <div onClick={() => setActiveComponent("news")}>
              {activeComponent === "news" ? (
                <h1 className="bg-[#f3f8ff] font-medium text-[#3d65ff] py-4 px-6 rounded-full">
                  News
                </h1>
              ) : (
                <h1 className="font-medium text-[#666e82] py-4 px-6 rounded-full">
                  News
                </h1>
              )}
            </div>
          </div>
        </div>
        <div>
          {activeComponent === "all" && <All />}
          {activeComponent === "articles" && <Articles />}
          {activeComponent === "news" && <News />}
        </div>
      </div>
    </>
  );
};

export default Blog;
