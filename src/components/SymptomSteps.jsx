import React from "react";
import { Link } from "react-router-dom";

const SymptomSteps = ({ step1, step2 }) => {
  return (
    <div className="flex flex-row gap-10 justify-center">
      <div>
        {step1 ? (
          <Link to="/introduction" className="text-[#000] text-lg font-bold">
            Introduction
          </Link>
        ) : (
          <span className="text-gray-500 text-lg font-bold">Introduction</span>
        )}
      </div>
      <div>
        {step2 ? (
          <Link to="/patients" className="text-[#000] text-lg font-bold">
            Chatbot
          </Link>
        ) : (
          <span className="text-gray-500 text-lg font-bold">Chatbot</span>
        )}
      </div>
    </div>
  );
};

export default SymptomSteps;
