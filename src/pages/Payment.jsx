import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { useNavigate, redirect } from "react-router-dom";

import {
  selectShippingAddress,
  savePaymentMethod,
} from "../features/cartSlice";

import CheckoutSteps from "../components/CheckoutSteps";
import Profile from "./Profile";
import ProfileSteps from "../components/ProfileSteps";

const Payment = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const shippingAddress = useSelector(selectShippingAddress);
  const paymentMethod = useSelector((state) => state.cart.paymentMethod);
  console.log(shippingAddress);
  const [preferredLanguage, setPreferredLanguage] = useState(
    paymentMethod.preferredLanguage
  );
  const [selectedMedicalInterests, setSelectedMedicalInterests] = useState(
    paymentMethod.selectedMedicalInterests
  );
  console.log(selectedMedicalInterests);

  const medicalInterestsOptions = [
    "Gastroenterology",
    "Oncology",
    "Orthopedics",
    "Obstetrics and Gynecology",
    "Psychiatry",
    "Endocrinology",
    "Rheumatology",
    "Nephrology",
    "Pulmonology",
    "Infectious Diseases",
    "Allergy and Immunology",
    "Hematology",
    "Urology",
    "Ophthalmology",
    "Otolaryngology (ENT)",
    "Emergency Medicine",
    "Radiology",
    "Anesthesiology",
    "Pathology",
    "Physical Medicine and Rehabilitation",
    // Add more medical interests as needed
  ];

  const handleMedicalInterestChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedMedicalInterests((prevInterests) => [...prevInterests, value]);
    } else {
      setSelectedMedicalInterests((prevInterests) =>
        prevInterests.filter((interest) => interest !== value)
      );
    }
  };

  const isChecked = (interest) => medicalInterests.includes(interest);

  if (!shippingAddress.name) {
    redirect("/personalinfo");
  }
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      savePaymentMethod({ preferredLanguage, selectedMedicalInterests })
    );
    navigate("/success");
  };
  return (
    <div className="pt-28 bg-[#000]">
      <ProfileSteps step1 step2 step3 />
      <div className="bg-[#161616] mx-auto w-[40%] px-10 rounded-lg pb-10">
        <h1 className="text-white text-3xl uppercase font-bold pt-10 pb-5 text-center">
          Interests
        </h1>
        <div className="items-center">
          <label
            className="text-white font-bold gap-5 text-2xl "
            htmlFor="method"
          >
            Select Preferred Language
            <select
              name="method"
              id="method"
              className="bg-[#161616] ml-4  text-white border-[grey] border-[1px] rounded-lg p-2 font-medium focus:outline-none focus:border-[#ff4d24]"
              value={preferredLanguage}
              onChange={(e) => setPreferredLanguage(e.target.value)}
            >
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
              <option value="French">French</option>
              <option value="German">German</option>
              <option value="Swahili">Swahili</option>
            </select>
          </label>
        </div>

        <div className="flex flex-col w-full">
          <label
            htmlFor="medicalInterests"
            className="text-white mb-3 uppercase font-bold"
          >
            Areas of Medical Interest (Select up to 5)
          </label>
          {medicalInterestsOptions.map((interest) => (
            <label key={interest} className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="medicalInterests"
                value={interest}
                checked={selectedMedicalInterests.includes(interest)}
                onChange={handleMedicalInterestChange}
                className="form-checkbox h-5 w-5 text-[#ff4d24]"
              />
              <span className="text-white">{interest}</span>
            </label>
          ))}
        </div>
        <div className="flex justify-center md:flex-row gap-5 pt-10">
          <button
            className="why-btn  w-full mt-10 mb-10 "
            type="submit"
            onClick={(e) => submitHandler(e)}
          >
            <h1 className="font-bold">Continue</h1>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
