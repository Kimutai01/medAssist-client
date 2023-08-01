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
      <div className="flex gap-10 items-center mt-10 px-20">
        <div className="w-[50%]">
          <h1 className="text-4xl font-bold ">Check the patient's symptoms</h1>

          <p className="text-[#73729c] text-lg font-medium mt-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, quibusdam, quia, quod voluptates voluptatem quos
            doloribus quas voluptatem quidem.
          </p>
          <button
            className="bg-[#3d65ff] text-[#ffffff] font-medium text-lg py-3 px-10 rounded-md mt-10"
            onClick={submitHandler}
          >
            Next
          </button>
        </div>
        <div>
          <img src="https://media.istockphoto.com/id/1468514852/vector/male-doctor-in-white-coats-with-stethoscopes-senior-middle-aged-veterans-who-is-fed-up-with.jpg?s=612x612&w=0&k=20&c=K2ESgXfx4jU5_FvzKIkPAZEdH1gSD8y5G-EimRo8FnU=" />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
