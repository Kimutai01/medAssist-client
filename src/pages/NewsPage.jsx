import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchNews, selectAllNews } from "../features/newsSlice";
import SingleNews from "./SingleNews";

const NewsPage = () => {
  const dispatch = useDispatch();
  const news = useSelector(selectAllNews);
  const newsStatus = useSelector((state) => state.news.status);
  const error = useSelector((state) => state.news.error);

  useEffect(() => {
    if (newsStatus === "idle") {
      dispatch(fetchNews());
    }
  }, [newsStatus, dispatch]);
  return (
    <div>
      <div class="p-6 bg-[#FAE115] font-bold uppercase lg:text-5xl md:text-4xl text-3xl flex justify-between">
        NEWS
      </div>

      <div class="flex-col mt-10 md:ml-10">
        <div class="flex flex-col md:flex-row md:flex md:justify-between">
          <div class="ml-4 sm:w-[300px] md:w-[800px] w-[350px] hover:border-[#FAE115] mb-10">
            {news.map((singleNews) => (
              <SingleNews key={singleNews.id} singleNews={singleNews} />
            ))}
            <div class="flex ml-7 md:ml-60 gap-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
