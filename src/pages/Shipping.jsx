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
    <div className="bg-[#000] pt-28">
      <ProfileSteps step1 step2 />
      <ToastContainer />
      <div className="bg-[#161616] mx-auto w-[30%] px-10 rounded-lg pb-10">
        <h1 className="text-white text-2xl font-bold pt-10 pb-5 text-center">
          Personal Information
        </h1>
        <div className="flex justify-center md:flex-row gap-5 pt-10">
          <div className="flex flex-col w-full">
            <label
              htmlFor="address"
              className="text-white mb-3 uppercase font-bold"
              type="text"
            >
              Full name
              <input
                type="text"
                id="address"
                required
                name="address"
                value={name || ""}
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
              htmlFor="clinic"
              className="text-white mb-3 uppercase font-bold"
            >
              Clinic
              <input
                type="text"
                required
                id="city"
                name="city"
                value={clinic || ""}
                onChange={(e) => setClicic(e.target.value)}
                placeholder="Your city.."
                className="bg-[#161616] text-white border-[grey] border-[1px] rounded-lg p-2 font-medium focus:outline-none focus:border-[#ff4d24]"
              />
            </label>
          </div>
        </div>
        <div className="flex justify-center md:flex-row mt-10 gap-5">
          <div className="flex flex-col w-full">
            <label
              htmlFor="medicalSpecialty"
              className="text-white mb-3 uppercase font-bold"
            >
              Medical Specialty
              <select
                id="medicalSpecialty"
                name="medicalSpecialty"
                value={medicalSpecialty}
                onChange={handleMedicalSpecialtyChange}
                className="bg-[#161616] text-white border-[grey] border-[1px] rounded-lg p-2 font-medium focus:outline-none focus:border-[#ff4d24]"
                required
              >
                <option value="">Select a medical specialty</option>
                {medicalSpecialties.map((specialty) => (
                  <option key={specialty} value={specialty}>
                    {specialty}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>
        <div className="flex justify-center md:flex-row mt-10 gap-5">
          <div className="flex flex-col w-full">
            <label
              htmlFor="country"
              className="text-white mb-3 uppercase font-bold"
            >
              Country
              <input
                type="text"
                required
                id="country"
                name="country"
                value={country || ""}
                onChange={(e) => setCountry(e.target.value)}
                placeholder="Your country.."
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
          <h1 className="font-bold">Continue</h1>
        </button>
      </div>
    </div>
  );
};

export default PersonalInfo;
