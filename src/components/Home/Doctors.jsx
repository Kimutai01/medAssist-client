import React from "react";
import doctors from "../../assets/dotors.svg";
import female from "../../assets/female.svg";

const Doctors = () => {
  return (
    <>
      <div class="bg-blue-500">
        <div class="flex justify-center">
          <img src={doctors} alt="" class="pt-[20px] md:mt-[-140px]" />
        </div>
      </div>
      <div class="flex flex-wrap md:flex md:flex-nowrap gap-10 pt-20 pl-20 items-center">
        <div class="w-[90%] md:w-[40%]">
          <h2 class="text-2xl text-[#4b81fb] font-bold mb-4 uppercase">
            Our story
          </h2>
          <h2 class="text-3xl md:text-5xl font-bold text-[#201e62]">
            MedAssist started in 2023 with one big mission behind
          </h2>
          <p class="mt-10 text-[#73729c] text-lg font-medium">
            At MedAssist, our journey began with a shared passion for
            revolutionizing healthcare and making a positive impact on the lives
            of patients and healthcare professionals. Our story is one of
            dedication, innovation, and a relentless pursuit of excellence in
            the field of medical diagnostics.
          </p>

          <p class="mt-10 text-[#73729c] text-lg font-medium">
            MedAssist was born from a collective vision to address the
            challenges faced by doctors in their daily practice. We recognized
            the immense potential of technology to transform the diagnostic
            process and improve patient outcomes. Fueled by this insight, a team
            of brilliant minds from diverse backgrounds in medicine, data
            science, and technology came together to create a solution that
            could change the face of healthcare.
          </p>
        </div>
        <div>
          <img src={female} alt="" class="w-[80%] md:w-[80%]" />
        </div>
      </div>
    </>
  );
};

export default Doctors;
