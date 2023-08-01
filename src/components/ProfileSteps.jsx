import React from "react";
import { Link } from "react-router-dom";

const ProfileSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <div className="flex flex-row gap-10 justify-center">
      <div>
        {step1 ? (
          <Link to="/register" className="text-[#000] text-lg font-bold">
            Register
          </Link>
        ) : (
          <span className="text-gray-500 text-lg font-bold">Register</span>
        )}
      </div>
      <div>
        {step2 ? (
          <Link to="/personalinfo" className="text-[#000] text-lg font-bold">
            Personal Info
          </Link>
        ) : (
          <span className="text-gray-500 text-lg font-bold">Personal Info</span>
        )}
      </div>

      <div>
        {step3 ? (
          <Link to="/interests" className="text-[#000] text-lg font-bold">
            Interests
          </Link>
        ) : (
          <span className="text-gray-500 text-lg font-bold">Interests</span>
        )}
      </div>

      <div>
        {step4 ? (
          <Link to="/profile" className="text-white text-lg font-bold">
            Profile
          </Link>
        ) : (
          <span className="text-gray-500 text-lg font-bold">Profile</span>
        )}
      </div>
    </div>
  );
};

export default ProfileSteps;
