import { toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import { AiOutlineCalendar } from "react-icons/ai";

import { useSelector, useDispatch } from "react-redux";

import React, { useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

import Product from "../components/Product";
import {
  fetchProducts,
  selectAllProducts,
  getProductsError,
  getProductsStatus,
} from "../features/productsSlice";

const HomeShop = () => {
  const dispatch = useDispatch();

  const products = useSelector(selectAllProducts);
  const error = useSelector(getProductsError);
  const status = useSelector(getProductsStatus);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }

    if (status === "failed") {
      toast.error(error, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
      });
    }
  }, [status, dispatch]);

  return (
    <>
      <div className="">
        <ToastContainer />
        {status === "loading" && (
          <div className="flex justify-center items-center pt-28 bg-black">
            <div className="w-20 h-20 rounded-full animate-spin border-2 border-solid border-[red] border-t-transparent" />
          </div>
        )}
        <div className="bg-[#000] pt-10 px-5 md:pt-28 pb-32 flex flex-col-reverse md:flex-row gap-10 md:px-32">
          <div className="md:w-[70%] grid grid-cols-1 md:grid-cols-2 gap-10">
            {products.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </div>
          <div className="md:w-[30%] md:sticky md:top-20 md:h-screen">
            <div className="bg-[#161616] flex gap-2  rounded-lg p-8">
              <input
                type="text"
                placeholder="Search"
                className="bg-[#161616] border-[1px] rounded-lg border-[grey] w-full py-2 px-2 text-white focus:outline-none"
              />
              <button className="why-btn flex items-center" type="button">
                <h1>Search</h1>
              </button>
            </div>
            <div className="bg-[#161616] mt-10 flex flex-col gap-2  rounded-lg p-8">
              <h1 className="text-white text-xl uppercase font-bold">
                Product categories
              </h1>
              <div className="flex mt-3 flex-wrap gap-2">
                <p className="text-white bg-[#ff4d24] hover:bg-[grey] p-2 rounded-lg">
                  Kits
                </p>
                <p className="text-white bg-[#ff4d24] hover:bg-[grey] p-2 rounded-lg">
                  Details
                </p>
                <p className="text-white bg-[#ff4d24] hover:bg-[grey] p-2 rounded-lg">
                  Oils
                </p>
              </div>
            </div>
            <div className="bg-[#161616] mt-10  rounded-lg p-8">
              <h1 className="uppercase text-white font-bold text-2xl">
                Service hours
              </h1>
              <div className="flex mt-3 gap-7">
                <div className="flex items-center gap-2">
                  <AiOutlineCalendar size={25} color="#ff4d24" />
                  <h1 className="text-[#ff4d24] text-md font-semibold">
                    Monday - Friday
                  </h1>
                </div>
                <div>
                  <h1 className="text-[grey] text-md">8AM - 9PM</h1>
                </div>
              </div>
              <div className="flex mt-5 gap-20">
                <div className="flex items-center gap-2">
                  <AiOutlineCalendar size={25} color="#ff4d24" />
                  <h1 className="text-[#ff4d24] text-md font-semibold">
                    Saturday
                  </h1>
                </div>
                <div>
                  <h1 className="text-[grey] text-md">8AM - 7PM</h1>
                </div>
              </div>
              <div className="flex mt-5 gap-24">
                <div className="flex items-center gap-2">
                  <AiOutlineCalendar size={25} color="#ff4d24" />
                  <h1 className="text-[#ff4d24] text-md font-semibold">
                    Sunday
                  </h1>
                </div>
                <div>
                  <h1 className="text-[grey] text-md">8AM - 2PM</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeShop;
