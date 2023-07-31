import React from "react";
import female from "../../assets/female.svg";

const Waitlist = () => {
  return (
    <div class="mt-10 mx-10">
      <div class="bg-image-container">
        <h2 class="text-2xl text-[#4b81fb] font-bold mb-4 uppercase">
          Join the Waitlist
        </h2>
        <div class="flex gap-20 justify-between items-center">
          <div class="w-[50%]">
            <img src={female} alt="" />
          </div>
          <div class="w-[50%]">
            <form action="" method="POST" class="flex flex-col">
              <div class="flex gap-3">
                <input
                  type="text"
                  placeholder="Enter your first name"
                  name="first_name"
                  class="border-2 border-[#4b81fb] rounded-lg px-5 py-3 w-[100%]"
                />
                <input
                  type="text"
                  placeholder="Enter your last name"
                  name="last_name"
                  class="border-2 border-[#4b81fb] rounded-lg px-5 py-3 w-[100%]"
                />
              </div>
              <div class="w-[100%] flex gap-3">
                <input
                  type="text"
                  placeholder="Enter your email"
                  name="email"
                  class="border-2 border-[#4b81fb] rounded-lg px-5 py-3 mt-5 w-[100%]"
                />
                <input
                  type="text"
                  placeholder="Enter your phone number"
                  name="phone_number"
                  class="border-2 border-[#4b81fb] rounded-lg px-5 py-3 mt-5 w-[100%]"
                />
              </div>

              <select
                class="border-2 border-[#4b81fb] rounded-lg px-5 py-3 mt-5 w-[100%]"
                name="profession"
              >
                <option value="">Select your profession</option>
                <option value="General Practitioner">
                  General Practitioner
                </option>
                <option value="Surgeon">Surgeon</option>
                <option value="Cardiologist">Cardiologist</option>
                <option value="Dermatologist">Dermatologist</option>
                <option value="Pediatrician">Pediatrician</option>
              </select>

              <button
                type="submit"
                class="bg-[#4b81fb] text-white px-8 py-3 rounded-lg mt-10"
              >
                Join the Waitlist
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Waitlist;
