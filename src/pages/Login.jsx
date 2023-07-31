import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { selectUser, login } from "../features/userSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const location = useLocation();
  const navigate = useNavigate();

  const redirect = location.search ? location.search.split("=")[1] : "/";

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  useEffect(() => {
    if (user) {
      navigate(redirect);
    }
  }, [navigate, redirect, user]);

  return (
    <div className="bg-[#ffffff] pt-28">
      <ToastContainer />
      <div className="bg-[#f3f8ff] mx-auto w-[85%] md:w-[50%] px-10 rounded-lg pb-10">
        <h1 className="font-bold text-4xl text-[#13182f] pt-8">Log in</h1>

        <p class="mt-10 text-[#73729c] text-lg font-medium">
          Welcome back! Log in to your account to view today&apos;s latest news
          and updates or to use the tools we offer.
        </p>

        <div className="flex justify-center md:flex-row gap-5 pt-10">
          <div className="flex flex-col w-full">
            <label
              htmlFor="email"
              className="text-[#13182f] mb-3  text-xl font-bold"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-[#fff]   h-16  rounded-full p-2 font-medium focus:outline-none"
            />
          </div>
        </div>
        <div className="flex justify-center md:flex-row mt-10 gap-5">
          <div className="flex flex-col w-full">
            <label
              htmlFor="password"
              className="text-[#13182f] mb-3  text-xl font-bold"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="name"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-[#fff]   h-16  rounded-full p-2 font-medium focus:outline-none"
            />
          </div>
        </div>

        <button
          className="w-full mt-10 mb-10 bg-[#3d65ff] text-[#fff] rounded-full py-3 px-5 font-bold h-16 hover:transform hover:scale-105 transition duration-300 ease-in-out"
          type="submit"
          onClick={(e) => submitHandler(e)}
        >
          <h1 className="font-bold text-xl">Log in</h1>
        </button>
        <div className="flex justify-between">
          <p className="text-[#73729c] text-lg font-medium ">
            Don&apos;t have an account?{" "}
          </p>
          <Link
            to={redirect ? `/register?redirect=${redirect}` : "/register"}
            className="text-[#3d65ff] font-medium text-xl"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
