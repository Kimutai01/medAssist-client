import React from "react";
import respo from "../../assets/respo.svg";
import acces from "../../assets/acces.svg";
import care from "../../assets/care.svg";

const Guiding = () => {
  return (
    <div class="pt-20 px-20">
      <h2 class="text-2xl text-[#4b81fb] font-bold mb-4 uppercase">
        Our Mission
      </h2>
      <h2 class="text-3xl font-extrabold text-[#201e62] w-[50%]">
        Empowering Healthcare with Compassion and Innovation
      </h2>
      <div class="flex flex-wrap md:grid md:grid-cols-2 gap-10 mt-10">
        <div class="flex gap-5 shadow-lg p-5 rounded-lg bg-image-container-left">
          <img src={care} alt="" />
          <div>
            <div class="border-b border-gray-400 w-[90%] mt-5">
              <h3 class="font-bold text-3xl text-[#201e62] p-3">Empathy</h3>
            </div>
            <p class="mt-5 text-[#73729c] text-lg font-medium">
              At MedAssist, we believe in fostering empathy throughout the
              healthcare journey. We understand the challenges faced by both
              patients and healthcare professionals and strive to create a
              platform that reflects our genuine care for their well-being.
              Empathy forms the core of our values, guiding us to deliver
              solutions that truly make a positive impact on lives.
            </p>
          </div>
        </div>
        <div class="flex gap-5 shadow-lg p-5 rounded-lg bg-image-container-middle">
          <img src={respo} alt="" />
          <div>
            <div class="border-b border-gray-400 w-[90%] mt-5">
              <h3 class="font-bold text-3xl text-[#201e62] p-3">
                Responsibility
              </h3>
            </div>
            <p class="mt-5 text-[#73729c] text-lg font-medium">
              We take our responsibility to the healthcare community seriously.
              MedAssist is built on a foundation of trust and reliability. We
              hold ourselves accountable for providing doctors with accurate
              diagnostic assistance and supporting them in their pursuit of
              better patient outcomes. Our commitment to responsibility drives
              us to constantly improve and deliver solutions that meet the
              highest standards of quality and ethics.
            </p>
          </div>
        </div>
        <div class="flex gap-5 shadow-lg p-5 rounded-lg bg-image-container-middle">
          <img src={acces} alt="" />
          <div>
            <div class="border-b border-gray-400 w-[90%] mt-5">
              <h3 class="font-bold text-3xl text-[#201e62] p-3">
                Care and Services
              </h3>
            </div>
            <p class="mt-5 text-[#73729c] text-lg font-medium">
              Our dedication to care is evident in every aspect of MedAssist. We
              are committed to offering healthcare professionals a seamless and
              intuitive platform that enriches their practice. MedAssist is
              designed with attention to detail, ensuring a user-friendly
              experience for doctors and patients alike. With a focus on
              exceptional service, we prioritize the needs of our users,
              providing them with the best tools to deliver top-notch medical
              care.
            </p>
          </div>
        </div>
        <div class="flex gap-5 shadow-lg p-5 rounded-lg bg-image-container-right">
          <img src={respo} alt="" />
          <div>
            <div class="border-b border-gray-400 w-[90%] mt-5">
              <h3 class="font-bold text-3xl text-[#201e62] p-3">
                Accessibility
              </h3>
            </div>
            <p class="mt-5 text-[#73729c] text-lg font-medium">
              We believe that cutting-edge healthcare technology should be
              accessible to all. MedAssist is designed to seamlessly integrate
              into existing medical workflows, ensuring that doctors can easily
              adopt and benefit from our app. Our commitment to accessibility
              extends beyond technology to support and guidance for users at
              every step. Together, we strive to create a healthcare landscape
              that is inclusive, efficient, and accessible to all.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guiding;
