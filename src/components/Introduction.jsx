import React from "react";
import SymptomSteps from "./SymptomSteps";
import { useNavigate } from "react-router-dom";

const Introduction = () => {
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/patients");
  };
  return (
    <div className="pt-20">
      <SymptomSteps step1 />
      <div className="flex flex-wrap md:flex-nowrap gap-10 items-center mt-10 px-4 md:px-20">
        <div className="w-[100%] md:w-[50%]">
          <h1 className="text-4xl font-bold ">
            Get information about sickle cell
          </h1>

          <p className="text-[#73729c] text-lg font-medium mt-10">
            This chatbot is designed to provide you with information about
            sickle cell disease.
          </p>
          <button
            className="bg-[#3d65ff] text-[#ffffff] font-medium text-lg py-3 px-10 rounded-md mt-10"
            onClick={submitHandler}
          >
            Next
          </button>
        </div>
        <div class="hidden md:flex">
          <img src="https://media.istockphoto.com/id/1468514852/vector/male-doctor-in-white-coats-with-stethoscopes-senior-middle-aged-veterans-who-is-fed-up-with.jpg?s=612x612&w=0&k=20&c=K2ESgXfx4jU5_FvzKIkPAZEdH1gSD8y5G-EimRo8FnU=" />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
