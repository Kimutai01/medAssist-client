import React from "react";
import { Link } from "react-router-dom";

const SymptomSteps = ({ step1, step2, step3, step4 }) => {
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
            Patient
          </Link>
        ) : (
          <span className="text-gray-500 text-lg font-bold">Patient</span>
        )}
      </div>

      <div>
        {step3 ? (
          <Link to="/symptoms" className="text-[#000] text-lg font-bold">
            Symptoms
          </Link>
        ) : (
          <span className="text-gray-500 text-lg font-bold">Symptoms</span>
        )}
      </div>

      <div>
        {step4 ? (
          <Link to="/results" className="text-[#000] text-lg font-bold">
            Results
          </Link>
        ) : (
          <span className="text-gray-500 text-lg font-bold">Results</span>
        )}
      </div>
    </div>
  );
};

export default SymptomSteps;
