import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { ImCross } from "react-icons/im";

import {
  selectUserDetails,
  updateUserProfile,
  getUserDetails,
} from "../features/profileSlice";
import { selectUser } from "../features/userSlice";
import { listAllOrders, selectOrders } from "../features/orderSlice";
import { selectShippingAddress } from "../features/cartSlice";

const Profile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);

  const shippingAddress = useSelector(selectShippingAddress);
  console.log(shippingAddress);
  const paymentMethod = useSelector((state) => state.cart.paymentMethod);
  console.log(paymentMethod);

  const location = useLocation();
  const navigate = useNavigate();

  const redirect = location.search ? location.search.split("=")[1] : "/";
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const submitHandler = (e) => {
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      e.preventDefault();
      dispatch(
        updateUserProfile({
          id: user._id,
          name,
          email,
          password,
        })
      );
    }
  };
  toast.error(message, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    draggable: true,
  });

  const userDetails = useSelector(selectUserDetails);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    } else if (!userDetails.name || user._id !== userDetails._id) {
      dispatch(getUserDetails("profile"));
    } else {
      setName(userDetails.name);
      setEmail(userDetails.email);
    }
  }, [navigate, user, userDetails, dispatch]);

  useEffect(() => {
    dispatch(listAllOrders());
  }, [dispatch]);

  return (
    <>
      <ToastContainer />
      <div className="bg-[#fff] pt-10 pb-10 ">
        <div className="bg-[#f3f8ff] rounded-3xl justify-between  flex flex-col md:flex-row pt-24 mx-10 md:px-24 pb-20 gap-10">
          <div className=" w-[40%]  px-10 rounded-lg pb-10">
            <h1 className="text-[#13182f] text-2xl font-bold pt-10">
              Update profile
            </h1>
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
                  placeholder="Your name.."
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
                  placeholder="Your email address.."
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
                  placeholder="Your password.."
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
                  id="confirmPassword"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm your password.."
                  className="bg-[#fff]   h-16  rounded-full p-2 font-medium focus:outline-none"
                />
              </div>
            </div>

            <button
              className="w-full mt-10 mb-10 bg-[#3d65ff] text-[#fff] rounded-full py-3 px-5 font-bold h-16 hover:transform hover:scale-105 transition duration-300 ease-in-out"
              type="submit"
              onClick={(e) => submitHandler(e)}
            >
              <h1 className="font-bold">Update profile</h1>
            </button>
          </div>
          <div>
            <h1 className="text-[#13182f] text-2xl font-bold pt-10">
              Personal information
            </h1>
            <p className="text-[#13182f] text-xl font-bold pt-10">
              Full name: {shippingAddress.name}
            </p>
            <p className="text-[#13182f] text-xl font-bold pt-10">
              Clinic: {shippingAddress.clinic}
            </p>
            <p className="text-[#13182f] text-xl font-bold pt-10">
              Medical speciality: {shippingAddress.medicalSpeciality}
            </p>
            <p className="text-[#13182f] text-xl font-bold pt-10">
              Country: {shippingAddress.country}
            </p>
            <p className="text-[#13182f] text-xl font-bold pt-10">
              Preferred language: {paymentMethod.preferredLanguage}
            </p>
          </div>

          <div>
            <h1 className="text-[#13182f] text-2xl font-bold pt-10">
              Medical interests
            </h1>
            <ul className="text-[#13182f] text-xl font-bold pt-10">
              {paymentMethod.selectedMedicalInterests.map((medicalInterest) => (
                <li key={medicalInterest}>{medicalInterest}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
