import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-router-dom";

const Articles = () => {
  return (
    <div className="grid md:grid-cols-2 gap-5 pt-10 grid-cols-1">
      <Link to="/news/1">
        <div className="bg-[#ffffff] rounded-3xl group overflow-hidden shadow-md">
          <img
            src="https://assets.website-files.com/644bde7533aab926a0e2c31f/645b21ea2e6d6fd577f55154_vaccines-protecting-featured-image-doctr-x-webflow-template-p-1080.jpg"
            alt="doctor"
            className="rounded-t-3xl transform-gpu transition-transform scale-100 group-hover:scale-110"
          />
          <div className="p-8">
            <h1 className="text-[#13182f] font-bold text-2xl group-hover:text-[#3d65ff]">
              The rise of telehealth: how it’s shaping the future of healthcare
            </h1>
            <p className="text-[#666e82] font-medium text-lg mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatum, quibusdam, quia, quod voluptates voluptate
              voluptatibus quos doloribus quas voluptatem quidem.
            </p>
            <div className="flex items-center justify-between mt-5">
              <p className="bg-[#f3f8ff] font-medium text-[#3d65ff] py-4 px-6 rounded-full">
                Articles
              </p>
              <p className="text-lg font-medium">July 20, 2023</p>
              <div className="flex items-center font-medium">
                <p className="group-hover:text-[#3d65ff]">Read more</p>
                <BsArrowRightShort
                  className="transform translate-x-0 group-hover:translate-x-2 group-hover:text-[#3d65ff] transition-transform"
                  size={30}
                />
              </div>
            </div>
          </div>
        </div>
      </Link>
      <Link to="/news/2">
        <div className="bg-[#ffffff] rounded-3xl group overflow-hidden shadow-md">
          <img
            src="https://assets.website-files.com/644bde7533aab926a0e2c31f/645b21ea2e6d6fd577f55154_vaccines-protecting-featured-image-doctr-x-webflow-template-p-1080.jpg"
            alt="doctor"
            className="rounded-t-3xl transform-gpu transition-transform scale-100 group-hover:scale-110"
          />
          <div className="p-8">
            <h1 className="text-[#13182f] font-bold text-2xl group-hover:text-[#3d65ff]">
              Sickle cell disease: what you need to know
            </h1>
            <p className="text-[#666e82] font-medium text-lg mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatum, quibusdam, quia, quod voluptates voluptate
              voluptatibus quos doloribus quas voluptatem quidem.
            </p>
            <div className="flex items-center justify-between mt-5">
              <p className="bg-[#f3f8ff] font-medium text-[#3d65ff] py-4 px-6 rounded-full">
                Articles
              </p>
              <p className="text-lg font-medium">July 20, 2023</p>
              <div className="flex items-center font-medium">
                <p className="group-hover:text-[#3d65ff]">Read more</p>
                <BsArrowRightShort
                  className="transform translate-x-0 group-hover:translate-x-2 group-hover:text-[#3d65ff] transition-transform"
                  size={30}
                />
              </div>
            </div>
          </div>
        </div>
      </Link>

      <Link to="/news/3">
        <div className="bg-[#ffffff] rounded-3xl group overflow-hidden shadow-md">
          <img
            src="https://assets.website-files.com/644bde7533aab926a0e2c31f/645b21ea2e6d6fd577f55154_vaccines-protecting-featured-image-doctr-x-webflow-template-p-1080.jpg"
            alt="doctor"
            className="rounded-t-3xl transform-gpu transition-transform scale-100 group-hover:scale-110"
          />
          <div className="p-8">
            <h1 className="text-[#13182f] font-bold text-2xl group-hover:text-[#3d65ff]">
              3 simple and easy steps to jump-start your heart health
            </h1>
            <p className="text-[#666e82] font-medium text-lg mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatum, quibusdam, quia, quod voluptates voluptate
              voluptatibus quos doloribus quas voluptatem quidem.
            </p>
            <div className="flex items-center justify-between mt-5">
              <p className="bg-[#f3f8ff] font-medium text-[#3d65ff] py-4 px-6 rounded-full">
                Articles
              </p>
              <p className="text-lg font-medium">July 20, 2023</p>
              <div className="flex items-center font-medium">
                <p className="group-hover:text-[#3d65ff]">Read more</p>
                <BsArrowRightShort
                  className="transform translate-x-0 group-hover:translate-x-2 group-hover:text-[#3d65ff] transition-transform"
                  size={30}
                />
              </div>
            </div>
          </div>
        </div>
      </Link>
      <Link to="/news/4">
        <div className="bg-[#ffffff] rounded-3xl group overflow-hidden shadow-md">
          <img
            src="https://assets.website-files.com/644bde7533aab926a0e2c31f/645b21ea2e6d6fd577f55154_vaccines-protecting-featured-image-doctr-x-webflow-template-p-1080.jpg"
            alt="doctor"
            className="rounded-t-3xl transform-gpu transition-transform scale-100 group-hover:scale-110"
          />
          <div className="p-8">
            <h1 className="text-[#13182f] font-bold text-2xl group-hover:text-[#3d65ff]">
              3 simple and easy steps to jump-start your heart health
            </h1>
            <p className="text-[#666e82] font-medium text-lg mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatum, quibusdam, quia, quod voluptates voluptate
              voluptatibus quos doloribus quas voluptatem quidem.
            </p>
            <div className="flex items-center justify-between mt-5">
              <p className="bg-[#f3f8ff] font-medium text-[#3d65ff] py-4 px-6 rounded-full">
                Articles
              </p>
              <p className="text-lg font-medium">July 20, 2023</p>
              <div className="flex items-center font-medium">
                <p className="group-hover:text-[#3d65ff]">Read more</p>
                <BsArrowRightShort
                  className="transform translate-x-0 group-hover:translate-x-2 group-hover:text-[#3d65ff] transition-transform"
                  size={30}
                />
              </div>
            </div>
          </div>
        </div>
      </Link>

      <Link to="/news/5">
        <div className="bg-[#ffffff] rounded-3xl group overflow-hidden shadow-md">
          <img
            src="https://assets.website-files.com/644bde7533aab926a0e2c31f/645b21ea2e6d6fd577f55154_vaccines-protecting-featured-image-doctr-x-webflow-template-p-1080.jpg"
            alt="doctor"
            className="rounded-t-3xl transform-gpu transition-transform scale-100 group-hover:scale-110"
          />
          <div className="p-8">
            <h1 className="text-[#13182f] font-bold text-2xl group-hover:text-[#3d65ff]">
              3 simple and easy steps to jump-start your heart health
            </h1>
            <p className="text-[#666e82] font-medium text-lg mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatum, quibusdam, quia, quod voluptates voluptate
              voluptatibus quos doloribus quas voluptatem quidem.
            </p>
            <div className="flex items-center justify-between mt-5">
              <p className="bg-[#f3f8ff] font-medium text-[#3d65ff] py-4 px-6 rounded-full">
                Articles
              </p>
              <p className="text-lg font-medium">July 20, 2023</p>
              <div className="flex items-center font-medium">
                <p className="group-hover:text-[#3d65ff]">Read more</p>
                <BsArrowRightShort
                  className="transform translate-x-0 group-hover:translate-x-2 group-hover:text-[#3d65ff] transition-transform"
                  size={30}
                />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Articles;
