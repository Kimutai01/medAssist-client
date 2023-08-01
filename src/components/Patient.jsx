import React from "react";
import SymptomSteps from "./SymptomSteps";
import { useNavigate } from "react-router-dom";

const Patient = () => {
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/symptoms");
  };
  return (
    <div>
      <SymptomSteps step1 step2 />
      <h1 className="text-4xl font-bold text-center mt-10">
        Enter basic patient information
      </h1>
      <button
        className="bg-[#3d65ff] ml-[450px] text-[#ffffff] font-medium text-lg py-3 px-10 rounded-md mt-10"
        onClick={submitHandler}
      >
        Next
      </button>
    </div>
  );
};

export default Patient;
