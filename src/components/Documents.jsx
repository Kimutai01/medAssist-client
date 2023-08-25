import React, { useState } from "react";
import gif from "../assets/doc.svg";

const Documents = () => {
  const [team1Photo, setTeam1Photo] = useState("");
  const uploadTeam1Photo = (files) => {
    const formData = new FormData();

    formData.append("file", files[0]);
    formData.append("upload_preset", "e2e6z2lx");
    fetch("https://api.cloudinary.com/v1_1/dakiak4mc/image/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setTeam1Photo(data.secure_url);
      });
  };
  return (
    <div>
      <h1 className="font-bold text-3xl text-center mt-10">
        Upload medical literature or research papers
      </h1>
      <div className="bg-[#f3f8ff] mt-10 mx-auto w-[85%] md:w-[50%] px-10 rounded-lg pb-10">
        <div className="flex justify-center md:flex-row gap-5 pt-10">
          <div className="flex flex-col w-full">
            <label
              htmlFor="file"
              className="text-[#13182f] mb-3  text-xl font-bold"
            >
              Upload document
            </label>
            <input
              type="file"
              id="file"
              required
              name="name"
              value={uploadTeam1Photo}
              onChange={(e) => uploadTeam1Photo(e.target.files)}
              className="bg-[#fff]   h-16  rounded-full p-2 font-medium focus:outline-none"
            />
          </div>
        </div>

        <img
          src={team1Photo ? team1Photo : gif}
          className="h-[200px] w-[200px] object-cover rounded-full pt-5"
          alt="photo"
        />
      </div>
    </div>
  );
};

export default Documents;
