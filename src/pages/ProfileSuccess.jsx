import React from "react";

const ProfileSuccess = () => {
  return (
    <div className="flex items-center">
      <div className="">
        <h1 className="text-[#000] text-2xl font-bold pt-10 pb-5 ">
          Let's get started!
        </h1>
        <button className="bg-[#ff4d24] text-white rounded-lg px-5 py-2">
          Check the latest news
        </button>
        <button className="bg-[#ff4d24] text-white rounded-lg px-5 py-2">
          Use the symptom checker
        </button>
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
