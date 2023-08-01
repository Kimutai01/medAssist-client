import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import {
  selectShippingAddress,
  saveShippingAddress,
} from "../features/cartSlice";
import ProfileSteps from "../components/ProfileSteps";

const PersonalInfo = () => {
  const dispatch = useDispatch();
  const shippingAddress = useSelector(selectShippingAddress);
  const [name, setName] = useState(shippingAddress.name);
  const [clinic, setClicic] = useState(shippingAddress.clinic);
  const [medicalSpecialty, setMedicalSpecialty] = useState(
    shippingAddress.medicalSpecialty
  );
  const [country, setCountry] = useState(shippingAddress.country);

  const handleMedicalSpecialtyChange = (e) => {
    setMedicalSpecialty(e.target.value);
  };

  const medicalSpecialties = [
    "General Practitioner",
    "Cardiologist",
    "Pediatrician",
    // Add more medical specialties as needed
  ];

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      saveShippingAddress({
        name,
        clinic,
        medicalSpecialty,
        country,
      })
    );
    toast.success("Personal information  Saved", {
      position: "top-center",
      autoClose: 2000,
    });

    navigate("/interests");
  };
  return (
    <div className="bg-[#fff] pt-28">
      <ProfileSteps step1 step2 />
      <ToastContainer />
      <div className="bg-[#f3f8ff] mx-auto w-[50%] px-10 rounded-lg mt-10 pb-10">
        <h1 className="text-[#3d65ff] text-2xl font-bold pt-10 pb-5 text-center">
          Personal Information
        </h1>
        <div className="flex justify-center md:flex-row gap-5 pt-10">
          <div className="flex flex-col w-full">
            <label
              htmlFor="address"
              className="text-[#13182f] mb-3  text-xl font-bold"
              type="text"
            >
              Full name
            </label>
            <input
              type="text"
              id="address"
              required
              name="address"
              value={name || ""}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name.."
              className="bg-[#fff]   h-16  rounded-full p-2 font-medium focus:outline-none"
            />
          </div>
        </div>
        <div className="flex justify-center md:flex-row gap-5 pt-10">
          <div className="flex flex-col w-full">
            <label
              htmlFor="clinic"
              className="text-[#13182f] mb-3  text-xl font-bold"
            >
              Clinic
            </label>
            <input
              type="text"
              required
              id="city"
              name="city"
              value={clinic || ""}
              onChange={(e) => setClicic(e.target.value)}
              placeholder="Your city.."
              className="bg-[#fff]   h-16  rounded-full p-2 font-medium focus:outline-none"
            />
          </div>
        </div>
        <div className="flex justify-center md:flex-row mt-10 gap-5">
          <div className="flex flex-col w-full">
            <label
              htmlFor="medicalSpecialty"
              className="text-[#13182f] mb-3  text-xl font-bold"
            >
              Medical Specialty
            </label>
            <select
              id="medicalSpecialty"
              name="medicalSpecialty"
              value={medicalSpecialty}
              onChange={handleMedicalSpecialtyChange}
              className="bg-[#fff]   h-16  rounded-full p-2 font-medium focus:outline-none"
              required
            >
              <option value="">Select a medical specialty</option>
              {medicalSpecialties.map((specialty) => (
                <option key={specialty} value={specialty}>
                  {specialty}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex justify-center md:flex-row mt-10 gap-5">
          <div className="flex flex-col w-full">
            <label
              htmlFor="country"
              className="text-[#13182f] mb-3  text-xl font-bold"
            >
              Country
            </label>
            <input
              type="text"
              required
              id="country"
              name="country"
              value={country || ""}
              onChange={(e) => setCountry(e.target.value)}
              placeholder="Your country.."
              className="bg-[#fff]   h-16  rounded-full p-2 font-medium focus:outline-none"
            />
          </div>
        </div>

        <button
          className="w-full mt-10 mb-10 bg-[#3d65ff] text-[#fff] rounded-full py-3 px-5 font-bold h-16 hover:transform hover:scale-105 transition duration-300 ease-in-out"
          type="submit"
          onClick={(e) => submitHandler(e)}
        >
          <h1 className="font-bold">Continue</h1>
        </button>
      </div>
    </div>
  );
};

export default PersonalInfo;
