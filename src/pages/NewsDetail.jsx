import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const NewsDetail = () => {
  const { id } = useParams();
  const [news, setNews] = useState({});

  useEffect(() => {
    const fetchNews = async () => {
      const res = await fetch(`http://127.0.0.1:8000/api/news/${id}`);
      const data = await res.json();
      setNews(data);
    };
    fetchNews();
  }, []);

  console.log(news);
  return (
    <div class="shadow-md">
      <div class="p-6 bg-[#FAE115] font-bold uppercase md:text-3xl text-3xl flex justify-between truncate ...">
        <p>NEWS | {news.title}</p>
      </div>

      <div class="sm:w-[200px] md:w-[60%] lg:max-w-full xl:max-w-full mx-auto mt-[6px]">
        <div>
          <img
            src={`http://127.0.0.1:8000${news.image}`}
            alt=""
            class="object-cover w-full h-[400px]"
          />
          <p class="text-semibold text-white mt-2 absolute top-80 right-100 bg-[#D9D9D9]">
            {news.created_at}
          </p>
        </div>
        <h2 class="text-2xl font-bold mt-4 mr-3 m-4">{news.category}</h2>
        <h3 class="text-xl font-semibold m-4">{news.title}</h3>
        <p class="text-lg mt-2 p-4">{news.description}</p>
      </div>
    </div>
  );
};

export default NewsDetail;
