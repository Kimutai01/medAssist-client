import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { selectUser, register } from "../features/userSlice";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();

  const redirect = location.search ? location.search.split("=")[1] : "/";

  const submitHandler = (e) => {
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      e.preventDefault();
      dispatch(register(name, email, password));
    }
  };
  toast.error(message, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    draggable: true,
  });
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  useEffect(() => {
    if (user) {
      navigate("/personalinfo");
    }
  }, [navigate, redirect, user]);
  return (
    <div className="bg-[#fff] pt-28">
      {message && <ToastContainer />}
      <div className="bg-[#f3f8ff] mx-auto w-[85%] md:w-[50%] px-10 rounded-lg pb-10">
        <div className="flex justify-center md:flex-row gap-5 pt-10">
          <div className="flex flex-col w-full">
            <label
              htmlFor="name"
              className="text-[#13182f] mb-3  text-xl font-bold"
            >
              Name
            </label>
            <input
              type="text"
              id="email"
              required
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-[#fff]   h-16  rounded-full p-2 font-medium focus:outline-none"
            />
          </div>
        </div>
        <div className="flex justify-center md:flex-row gap-5 pt-10">
          <div className="flex flex-col w-full">
            <label
              htmlFor="email"
              className="text-[#13182f] mb-3  text-xl font-bold"
            >
              Email Address
            </label>
            <input
              type="text"
              required
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
              required
              name="name"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-[#fff]   h-16  rounded-full p-2 font-medium focus:outline-none"
            />
          </div>
        </div>
        <div className="flex justify-center md:flex-row mt-10 gap-5">
          <div className="flex flex-col w-full">
            <label
              htmlFor="confirmPassword"
              className="text-[#13182f] mb-3  text-xl font-bold"
            >
              Password
            </label>
            <input
              type="password"
              required
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="bg-[#fff]   h-16  rounded-full p-2 font-medium focus:outline-none"
            />
          </div>
        </div>

        <button
          className="w-full mt-10 mb-10 bg-[#3d65ff] text-[#fff] rounded-full py-3 px-5 font-bold h-16 hover:transform hover:scale-105 transition duration-300 ease-in-out"
          onClick={(e) => submitHandler(e)}
          type="submit"
        >
          <h1 className="font-bold">Register</h1>
        </button>
        <div className="flex justify-between">
          <p className="text-[#73729c] text-lg font-medium ">
            Already have an account?{" "}
          </p>
          <Link
            to={redirect ? `/login?redirect=${redirect}` : "/login"}
            className="text-[#3d65ff] font-medium text-xl"
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
