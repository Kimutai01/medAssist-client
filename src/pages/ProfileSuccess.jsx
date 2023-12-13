import React from "react";
import { Link } from "react-router-dom";

const ProfileSuccess = () => {
  return (
    <div className="flex justify-center items-center px-20">
      <div className="">
        <h1 className="text-[#13182f] font-extrabold text-5xl  pt-10 pb-5 ">
          Let's get started!
        </h1>
        <p className="text-[#73729c] text-lg font-medium ">
          You can ask anything about Sickle Cell Disease.
        </p>
        <div className="flex gap-10 mt-10">
          <button className="bg-[#3d65ff] text-white rounded-full px-5 py-2">
            <Link to="/blogs">Check the latest news</Link>
          </button>
          <button className="bg-[#3d65ff] text-white rounded-full px-5 py-2">
            <Link to="/symptoms">Chatbot</Link>
          </button>
        </div>
      </div>
      <div>
        <img
          src="https://media.istockphoto.com/id/1287310070/vector/doctor-medical-emergency-hurrying-to-help-the-patient-ambulance-concept.jpg?s=612x612&w=0&k=20&c=2ZXBw-2xE3bxDzL4FF0Zjg_OC4nBnFUrokLfF2seIL0="
          alt="doctor"
        />
      </div>
    </div>
  );
};

export default ProfileSuccess;
