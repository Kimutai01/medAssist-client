import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";

const NewsDetail = () => {
  const { id } = useParams();

  return (
    <div className="bg-[#fff]">
      <div className="flex gap-10 justify-center items-center pt-20">
        <p className="bg-[#f3f8ff] font-medium text-[#3d65ff] py-4 px-6 rounded-full">
          Articles
        </p>
        <p className="text-lg font-medium">July 20, 2023</p>
      </div>
      <h1 className="text-[#13182f] mt-10 font-extrabold text-6xl text-center mx-auto w-[65%]">
        3 simple and easy steps to jump-start your heart health
      </h1>
      <p className="text-[#666e82] font-medium text-lg mx-auto text-center w-[65%] mt-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptatum, quibusdam, quia, quod voluptates voluptate voluptatibus quos
        doloribus quas voluptatem quidem.
      </p>

      <div className="ml-16 mt-10 mb-10 rounded-l-3xl overflow-hidden ">
        <img
          src="https://images.unsplash.com/photo-1576765974277-be5f035d4604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWZyaWNhbiUyMGRvY3RvciUyMHRyZWF0aW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
          alt="doctor"
          className="w-full  object-cover"
        />
      </div>
      <div className="flex flex-col px-5 pb-10 md:flex-row-reverse bg-[#fff] gap-10 pt-36 pr-10">
        <div className="bg-[#fff] md:w-[70%]">
          <h1 className="text-[#13182f] text-4xl font-bold">
            Research different options to find the right pediatrician
          </h1>
          <p className=" text-[#666e82] font-medium text-lg mt-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
            accusantium ex, ab velit et incidunt nihil minus consequatur odit
            reprehenderit enim consectetur doloremque officiis eius aliquid
            omnis laboriosam dolorum officia! Molestias ipsa officia maxime
            quis? Quos repellendus placeat nam officia, maxime consequuntur
            molestias, nisi doloremque possimus autem dignissimos pariatur vero?
          </p>

          <ul className="list-decimal ml-5 list-inside text-[#666e82] font-medium text-lg mt-5">
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
          </ul>
          <h1 className="text-[#13182f] text-2xl font-bold pt-10">
            Check credentials and licensing
          </h1>
          <p className=" text-[#666e82] font-medium text-lg mt-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
            accusantium ex, ab velit et incidunt nihil minus consequatur odit
            reprehenderit enim consectetur doloremque officiis eius aliquid
            omnis laboriosam dolorum officia! Molestias ipsa officia maxime
            quis? Quos repellendus placeat nam officia, maxime consequuntur
            molestias, nisi doloremque possimus autem dignissimos pariatur vero?
          </p>
          <p className=" text-[#666e82] font-medium text-lg mt-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
            accusantium ex, ab velit et incidunt nihil minus consequatur odit
            reprehenderit enim consectetur doloremque officiis eius aliquid
            omnis laboriosam dolorum officia! Molestias ipsa officia maxime
            quis? Quos repellendus placeat nam officia, maxime consequuntur
            molestias, nisi doloremque possimus autem dignissimos pariatur vero?
          </p>
          <img
            src="https://images.unsplash.com/photo-1632054229892-21103035a686?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWZyaWNhbiUyMGRvY3RvcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
            alt=""
            className="w-full  pt-10 rounded-3xl"
          />
          <h1 className="text-[#13182f] text-2xl font-bold pt-10">
            Ask friends and family for recommendations
          </h1>
          <p className=" text-[#666e82] font-medium text-lg mt-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
            accusantium ex, ab velit et incidunt nihil minus consequatur odit
            reprehenderit enim consectetur doloremque officiis eius aliquid
          </p>
          <p className="text-lg text-[grey] pt-10">
            <p className=" text-[#666e82] font-medium text-lg mt-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
              accusantium ex, ab velit et incidunt nihil minus consequatur odit
              reprehenderit enim consectetur doloremque officiis eius aliquid
            </p>
          </p>
          <h1 className="text-[#13182f] text-2xl font-bold pt-10">
            Look for experience in treating your child's age
          </h1>
          <p className=" text-[#666e82] font-medium text-lg mt-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
            accusantium ex, ab velit et incidunt nihil minus consequatur odit
            reprehenderit enim consectetur doloremque officiis eius aliquid
            omnis laboriosam dolorum officia! Molestias ipsa officia maxime
            quis? Quos repellendus placeat nam officia, maxime consequuntur
            molestias, nisi doloremque possimus autem dignissimos pariatur vero?
          </p>

          <ul className="list-disc ml-5 list-inside text-[#666e82] font-medium text-lg mt-5">
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
          </ul>
          <div className="bg-[#13182e] mt-10 rounded-3xl p-24">
            <p className="text-[#fff] text-center text-xl font-bold">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit enim
              accusantium exercitationem sint iusto animi excepturi saepe
              perspiciatis ratione illo!
            </p>
          </div>

          <h1 className="text-[#13182f] text-xl font-bold pt-10">
            Look for experience in treating your child's age
          </h1>
          <p className=" text-[#666e82] font-medium text-lg mt-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
            accusantium ex, ab velit et incidunt nihil minus consequatur odit
            reprehenderit enim consectetur doloremque officiis eius aliquid
            omnis laboriosam dolorum officia! Molestias ipsa officia maxime
            quis? Quos repellendus placeat nam officia, maxime consequuntur
            molestias, nisi doloremque possimus autem dignissimos pariatur vero?
          </p>
        </div>
        <div className="md:w-[40%] md:sticky md:top-16 md:h-screen">
          <div className="bg-[#fff]  rounded-lg p-8">
            <h1 className="text-[#13182f] text-2xl font-bold">Popular posts</h1>
            <div className="flex mt-5">
              <img
                src="https://assets.website-files.com/644bde7533aab926a0e2c31f/645919b3701bcf1bddb24b0b_heart-health-thumbnail-v2-image-doctr-x-webflow-template-p-500.jpg"
                alt=""
                className="w-32 h-32 rounded-3xl "
              />
              <div className="ml-5">
                <h1 className="text-[#13182f] text-xl font-extrabold">
                  Sickle cell disease all you need to know
                </h1>
                <p className="mt-3">
                  <span className="text-[#666e82] font-medium  text-lg">
                    12 Oct 2021
                  </span>
                </p>
              </div>
            </div>
            <div className="flex mt-5">
              <img
                src="https://assets.website-files.com/644bde7533aab926a0e2c31f/645b21ef5319f3a128024cb0_vaccines-protecting-thumbnail-v2-image-doctr-x-webflow-template-p-500.jpg"
                alt=""
                className="w-32 h-32 rounded-3xl "
              />
              <div className="ml-5">
                <h1 className="text-[#13182f] text-xl font-extrabold">
                  Sickle cell disease all you need to know
                </h1>
                <p className="mt-3">
                  <span className="text-[#666e82] font-medium  text-lg">
                    12 Oct 2021
                  </span>
                </p>
              </div>
            </div>
            <div className="flex mt-5">
              <img
                src="https://assets.website-files.com/644bde7533aab926a0e2c31f/645b21fe7889fc4f5bddd3de_pediatrician-appointment-thumbnail-v2-image-doctr-x-webflow-template-p-500.jpg"
                alt=""
                className="w-32 h-32 rounded-3xl "
              />
              <div className="ml-5">
                <h1 className="text-[#13182f] text-xl font-extrabold">
                  Sickle cell disease all you need to know
                </h1>
                <p className="mt-3">
                  <span className="text-[#666e82] font-medium  text-lg">
                    12 Oct 2021
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
