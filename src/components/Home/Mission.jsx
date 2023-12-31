import React from "react";
import doc from "../../assets/doc.svg";

const Mission = () => {
  return (
    <div class="flex flex-wrap md:flex-nowrap flex-row-reverse gap-10 pt-20 pr-4 md:pr-20 items-center bg-[#f7faff]">
      <div class="w-[90%] md:w-[50%] bg-image-container-right">
        <h2 class="text-2xl text-[#4b81fb] font-bold mb-4 uppercase">
          Our Mission
        </h2>
        <h2 class="text-xl md:text-5xl font-bold text-[#201e62]">
          Our mission is to empower comunity health workers with information about sickle cell disease in Africa
        </h2>
        <p class="mt-10 text-[#73729c] text-lg font-medium">
          Our mission is simple yet ambitious: to provide community health workers with an
          indispensable tool that empowers them to make faster, more accurate
          decisions, leading to better patient care and treatment.
        </p>

        <p class="mt-10 mb-10 text-[#73729c] text-lg font-medium">
          From the very beginning, innovation has been at the heart of
          MedAssist. We invested countless hours in research, development, and
          collaboration with medical experts to craft an app that seamlessly
          integrates into the lives of community health workers. Leveraging cutting-edge
          technology, including artificial intelligence and machine learning, we
          built a platform that constantly evolves and adapts to meet the
          dynamic needs of the medical community.
        </p>
      </div>
      <div>
        <img src={doc} alt="" />
      </div>
    </div>
  );
};

export default Mission;
