import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { selectCartItemsCount } from "../../features/cartSlice";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { selectUser } from "../../features/userSlice";
import { logoutUser } from "../../features/userSlice";
import { CiUser } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
import { RiMenu5Line } from "react-icons/ri";
import { HiShoppingCart } from "react-icons/hi";
import "./Navbar.css";
import { BsChevronDown } from "react-icons/bs";

import { motion } from "framer-motion";
const NavBar = () => {
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");

  useEffect(() => {
    if (location.pathname === "/blogs") {
      setNavBg("#131830");
      setLinkColor("#ffffff");
    } else {
      setNavBg("#ffffff");
      setLinkColor("#1f2937");
    }
  }, [location.pathname]);
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };

    window.addEventListener("scroll", handleShadow);
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };

  const [showServicesDetails, setShowServicesDetails] = useState(false);
  const [showStoreDetails, setShowStoreDetails] = useState(false);

  const handleServicesClick = () => {
    setShowServicesDetails(!showServicesDetails);
  };
  const handleStoreClick = () => {
    setShowStoreDetails(!showStoreDetails);
  };

  const cartItemsCount = useSelector(selectCartItemsCount);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logoutUser());

    toast.success("Logged out successfully", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
    });
    navigate("/");
  };

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={" w-full   md:px-24"}
    >
      <div className="flex justify-between items-center w-full h-full md:px-4 py-4 px-2 2xl:px-16 rounded">
        <div className="">
          <Link
            className={`text-[#000] font-bold text-3xl ${
              location.pathname === "/blogs" ? "text-white" : linkColor
            }`}
            to="/"
          >
            <span className="text-[#3d65ff]">Med</span>Assist
          </Link>
        </div>
        <div>
          <ul
            className={`flex items-center gap-5 ${
              location.pathname === "/blogs" ? "text-white" : linkColor
            }`}
          >
            <li className="hidden md:flex">
              <Link
                to="/blogs"
                className=" font-medium text-xl hover:text-[#3d65ff] hover:scale-105 transition-all duration-all hover:border-y-black"
              >
                Blogs
              </Link>
            </li>
            <li className="hidden md:flex">
              <Link
                to="/introduction"
                className=" font-medium text-xl hover:text-[#3d65ff] hover:scale-105 transition-all duration-all hover:border-y-black"
              >
                Chatbot
              </Link>
            </li>

            {user && (
              <>
                <li className="hidden md:flex">
                  <Link
                    to="/documents"
                    className=" font-medium text-xl hover:text-[#3d65ff] hover:scale-105 transition-all duration-all hover:border-y-black"
                  >
                    Documents
                  </Link>
                </li>
              </>
            )}
          </ul>
          <ul className="hidden md:flex" style={{ color: `${linkColor}` }}>
            {user && user.isAdmin && (
              <div className="group ml-10">
                <li className="font-medium  text-xl hover:text-[#3d65ff] hover:scale-105 transition-all duration-all hover:border-y-black ">
                  Admin
                  <div className="opacity-0 group-hover:opacity-100 w-[200px] absolute left-0 top-full bg-[#000] pt-10 py-2 rounded-lg shadow-lg">
                    <ul className="p-2 flex flex-col">
                      <Link
                        to="/admin/userlist"
                        className="text-white py-1 px-2 relative hover:text-[#3d65ff] hover:scale-105 transition-all duration-all hover:border-y-black"
                      >
                        Users
                      </Link>
                      <Link to="/admin/products">
                        <div className="text-[#fff] py-1 px-2 hover:text-[#3d65ff] hover:scale-105 transition-all duration-all hover:border-y-black">
                          Products
                        </div>
                      </Link>

                      <Link to="/admin/orderlist">
                        <div className="text-[#fff] py-1 px-2 hover:text-[#3d65ff] hover:scale-105 transition-all duration-all hover:border-y-black">
                          Orders
                        </div>
                      </Link>
                    </ul>
                  </div>
                </li>
              </div>
            )}
          </ul>
          <div
            className="md:hidden flex justify-between items-center w-full h-full"
            onClick={handleNav}
            style={{ color: `${linkColor}` }}
          >
            <RiMenu5Line
              size={40}
              className="text-[#000] text-center align-middle items-center justify-center"
            />
            {user ? (
              <div className="group ml-10">
                <li className="font-medium  text-xl hover:text-[#3d65ff] hover:scale-105 transition-all duration-all hover:border-y-black ">
                  {user.name}
                  <div className="opacity-0 group-hover:opacity-100 w-[200px] absolute left-0 top-full bg-[#000] pt-10 py-2 rounded-lg shadow-lg">
                    <ul className="p-2 flex flex-col">
                      <Link
                        to="/profile"
                        className="text-white py-1 px-2 relative hover:text-[#3d65ff] hover:scale-105 transition-all duration-all hover:border-y-black"
                      >
                        Profile
                      </Link>
                      <div
                        className="text-[#fff] py-1 px-2 hover:text-[#3d65ff] hover:scale-105 transition-all duration-all hover:border-y-black"
                        onClick={logoutHandler}
                      >
                        Logout
                      </div>
                    </ul>
                  </div>
                </li>
              </div>
            ) : (
              <Link to="/login">
                <CiUser size={40} className="text-[#000] cursor-pointer" />
              </Link>
            )}
          </div>
        </div>
        <div className="hidden md:flex">
          <div className="flex">
            {user ? (
              <div className="group ml-10">
                <li
                  className={`font-medium  text-xl  mt-[10px] hover:text-[#3d65ff] hover:scale-105 transition-all duration-all hover:border-y-black list-none ${
                    location.pathname === "/blogs"
                      ? "text-[#fff]"
                      : "text-[#000]"
                  }`}
                >
                  {user.name}
                  <div className="opacity-0 group-hover:opacity-100 w-[200px] absolute left-0 top-full bg-[#000] pt-10 py-2 rounded-lg shadow-lg">
                    <ul className="p-2 flex flex-col">
                      <Link
                        to="/profile"
                        className="text-white py-1 px-2 relative hover:text-[#3d65ff] hover:scale-105 transition-all duration-all hover:border-y-black"
                      >
                        Profile
                      </Link>
                      <div
                        className="text-[#fff] py-1 px-2 hover:text-[#3d65ff] hover:scale-105 transition-all duration-all hover:border-y-black cursor-pointer"
                        onClick={logoutHandler}
                      >
                        Logout
                      </div>
                    </ul>
                  </div>
                </li>
              </div>
            ) : (
              <Link to="/login">
                <CiUser
                  size={40}
                  className="text-gray-600 mt-1 z-50  cursor-pointer"
                />
              </Link>
            )}
          </div>
        </div>
      </div>

      <div
        className={
          nav ? "md:hiddden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%]  h-screen bg-[#000] text-white p-2 ease-in duration-500"
              : "fixed left-[-100%] top-0  p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex justify-between items-center w-full mt-3 px-3">
              <Link className="font-bold text-4xl uppercase animate-pulse">
                MedAssist
              </Link>
              <div
                onClick={handleNav}
                className="cursor-pointer text-[#ff4d23]"
              >
                <AiOutlineClose size={35} />
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col  py-4">
              <ul>
                <Link to="/" onClick={handleNav}>
                  <li className="ml-3 text-xl">Home</li>
                </Link>
                <Link to="/blogs" onClick={handleNav}>
                  <li className="ml-3 text-xl">Blogs</li>
                </Link>
                <Link to="/introduction" onClick={handleNav}>
                  <li className="ml-3 text-xl">Chatbot</li>
                </Link>
                <li className="relative">
                  <div
                    className="flex items-center justify-between px-3 py-4 cursor-pointer"
                    onClick={handleServicesClick}
                  >
                    <div className="text-xl">Services</div>
                    <div>
                      <BsChevronDown size={25} className={``} />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
