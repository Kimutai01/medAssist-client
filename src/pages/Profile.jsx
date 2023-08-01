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
      <div className="bg-[#000] flex flex-col md:flex-row pt-24 px-5 md:px-24 pb-20 gap-10">
        <div className="bg-[#161616] mx-auto w-[30%] px-10 rounded-lg pb-10">
          <div className="flex justify-center md:flex-row gap-5 pt-10">
            <div className="flex flex-col w-full">
              <label
                htmlFor="name"
                className="text-white mb-3 uppercase font-bold"
              >
                Name
                <input
                  type="text"
                  id="email"
                  required
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name.."
                  className="bg-[#161616] text-white border-[grey] border-[1px] rounded-lg p-2 font-medium focus:outline-none focus:border-[#ff4d24]"
                />
              </label>
            </div>
          </div>
          <div className="flex justify-center md:flex-row gap-5 pt-10">
            <div className="flex flex-col w-full">
              <label
                htmlFor="email"
                className="text-white mb-3 uppercase font-bold"
              >
                Email Address
                <input
                  type="text"
                  required
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address.."
                  className="bg-[#161616] text-white border-[grey] border-[1px] rounded-lg p-2 font-medium focus:outline-none focus:border-[#ff4d24]"
                />
              </label>
            </div>
          </div>
          <div className="flex justify-center md:flex-row mt-10 gap-5">
            <div className="flex flex-col w-full">
              <label
                htmlFor="password"
                className="text-white mb-3 uppercase font-bold"
              >
                Password
                <input
                  type="password"
                  id="password"
                  name="name"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Your password.."
                  className="bg-[#161616] text-white border-[grey] border-[1px] rounded-lg p-2 font-medium focus:outline-none focus:border-[#ff4d24]"
                />
              </label>
            </div>
          </div>
          <div className="flex justify-center md:flex-row mt-10 gap-5">
            <div className="flex flex-col w-full">
              <label
                htmlFor="confirmPassword"
                className="text-white mb-3 uppercase font-bold"
              >
                Password
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm your password.."
                  className="bg-[#161616] text-white border-[grey] border-[1px] rounded-lg p-2 font-medium focus:outline-none focus:border-[#ff4d24]"
                />
              </label>
            </div>
          </div>

          <button
            className="why-btn  w-full mt-10 mb-10 "
            type="submit"
            onClick={(e) => submitHandler(e)}
          >
            <h1 className="font-bold">Update profile</h1>
          </button>
          <p className="text-[#fff] font-medium">
            Already have an account?{" "}
            <Link
              to={redirect ? `/login?redirect=${redirect}` : "/login"}
              className="text-[#ff4d24]"
            >
              Sign In
            </Link>
          </p>
        </div>
        <div>
          <h1 className="text-white">{shippingAddress.name}</h1>
          <h1 className="text-white">{shippingAddress.clinic}</h1>
          <h1 className="text-white">{shippingAddress.medicalSpeciality}</h1>
          <h1 className="text-white">{shippingAddress.country}</h1>

          <h1 className="text-white">{paymentMethod.preferredLanguage}</h1>
          <ul className="text-white">
            {paymentMethod.selectedMedicalInterests.map((medicalInterest) => (
              <li key={medicalInterest}>{medicalInterest}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Profile;
