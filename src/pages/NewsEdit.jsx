import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";
import { selectUser } from "../features/userSlice";
import {
  // fetchNews,
  fetchNewsById,
  // selectAllNews,
  selectSingleNews,
  updateNewsById,
} from "../features/newsSlice";

const NewsEdit = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [uploading, setUploading] = useState(false);
  const navigate = useNavigate();

  const newsById = useSelector(selectSingleNews);
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(
      updateNewsById({
        _id: newsById._id,
        title,
        image,
        category,
        description,
      })
    );

    toast.success("News Updated Successfully", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
    });

    navigate("/admin/news");
  };
  const user = useSelector(selectUser);

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    formData.append("news_id", id);

    try {
      setUploading(true);

      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${user.token}`,
        },
      };

      const { data } = await axios.post(
        "http://127.0.0.1:9000//api/news/upload/",
        formData,
        config
      );

      setImage(data);

      setUploading(false);
    } catch (error) {
      setUploading(false);
    }
  };

  useEffect(() => {
    dispatch(fetchNewsById(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (newsById) {
      setTitle(newsById.title);
      setImage(newsById.image);
      setDescription(newsById.description);
      setCategory(newsById.category);
    }
  }, [newsById]);
  return (
    <div className="bg-[#000] pt-28">
      <Link to="/admin/news">
        <button className="why-btn ml-40  mt-10 mb-10 " type="button">
          <h1 className="font-bold">Go Back</h1>
        </button>
      </Link>

      <ToastContainer />
      <div className="bg-[#161616] mx-auto w-[30%] px-10 rounded-lg pb-10">
        <h1 className="text-[#fff] text-center font-bold text-2xl pt-10">
          Edit News
        </h1>
        <div className="flex justify-center md:flex-row gap-5 pt-10">
          <div className="flex flex-col w-full">
            <label
              htmlFor="title"
              className="text-white mb-3 uppercase font-bold"
            >
              title
              <input
                type="text"
                id="title"
                name="name"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter title"
                className="bg-[#161616] text-white border-[grey] border-[1px] rounded-lg p-2 font-medium focus:outline-none focus:border-[#ff4d24]"
              />
            </label>
          </div>
        </div>

        <div className="flex justify-center md:flex-row mt-10 gap-5">
          <div className="flex flex-col w-full">
            <img
              src={`http://127.0.0.1:9000//${image}`}
              alt=""
              className="h-20 w-20"
            />
            <label
              htmlFor="image"
              className="text-white mb-3 uppercase font-bold"
            >
              Image
              <input
                type="text"
                id="image"
                name="image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                className="bg-[#161616] text-white border-[grey] border-[1px] rounded-lg p-2 font-medium focus:outline-none focus:border-[#ff4d24]"
              />
            </label>

            <input
              type="file"
              id="image-file"
              name="image-file"
              onChange={uploadFileHandler}
              className="mt-4 bg-[#161616] text-white border-[grey] border-[1px] rounded-lg p-2 font-medium focus:outline-none focus:border-[#ff4d24]"
            />
            {uploading && (
              <div className="flex justify-center items-center pt-28 bg-black">
                <div className="w-20 h-20 rounded-full animate-spin border-2 border-solid border-[red] border-t-transparent" />
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-center md:flex-row mt-10 gap-5">
          <div className="flex flex-col w-full">
            <label
              htmlFor="category"
              className="text-white mb-3 uppercase font-bold"
            >
              Category
              <input
                type="text"
                id="category"
                name="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="bg-[#161616] text-white border-[grey] border-[1px] rounded-lg p-2 font-medium focus:outline-none focus:border-[#ff4d24]"
              />
            </label>
          </div>
        </div>

        <div className="flex justify-center md:flex-row mt-10 gap-5">
          <div className="flex flex-col w-full">
            <label
              htmlFor="description"
              className="text-white mb-3 uppercase font-bold"
            >
              Description
              <textarea
                type="text"
                id="description"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="bg-[#161616] text-white border-[grey] border-[1px] rounded-lg p-2 font-medium focus:outline-none focus:border-[#ff4d24]"
              />
            </label>
          </div>
        </div>

        <button
          className="why-btn  w-full mt-10 mb-10 "
          onClick={(e) => submitHandler(e)}
          type="submit"
        >
          <h1 className="font-bold">Update</h1>
        </button>
      </div>
    </div>
  );
};

export default NewsEdit;
