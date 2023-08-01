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
    paymentMethod.selectedMedicalInterests || []
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
    <div className="pt-28 bg-[#ffffff]">
      <ProfileSteps step1 step2 step3 />
      <div className="bg-[#f3f8ff] mx-auto w-[60%] mt-10 px-10 rounded-lg pb-10">
        <h1 className="text-[#3d65ff] text-2xl font-bold pt-10 pb-5 text-center">
          Personal Interests
        </h1>
        <div className="items-center">
          <label
            className="text-[#13182f] mb-3  text-xl font-bold"
            htmlFor="method"
          >
            Select Preferred Language
          </label>
          <select
            name="method"
            id="method"
            className="bg-[#fff] ml-4  text-[#000] border-[grey] border-[1px] rounded-lg p-2 font-medium focus:outline-none focus:border-[#3d65ff]"
            value={preferredLanguage}
            onChange={(e) => setPreferredLanguage(e.target.value)}
          >
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
            <option value="German">German</option>
            <option value="Swahili">Swahili</option>
          </select>
        </div>

        <div className="flex flex-col w-full">
          <label
            htmlFor="medicalInterests"
            className="text-[#13182f] mb-3 mt-8  text-xl font-bold"
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
                className="form-checkbox h-5 w-5 text-[#3d65ff]"
              />
              <span className="text-[#000]">{interest}</span>
            </label>
          ))}
        </div>
        <div className="flex justify-center md:flex-row gap-5 pt-10">
          <button
            className="w-full mt-10 mb-10 bg-[#3d65ff] text-[#fff] rounded-full py-3 px-5 font-bold h-16 hover:transform hover:scale-105 transition duration-300 ease-in-out"
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
