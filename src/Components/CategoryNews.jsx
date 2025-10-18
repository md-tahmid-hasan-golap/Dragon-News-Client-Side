import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";

const CategoryNews = () => {
  const { id } = useParams();
  const data = useLoaderData();
  // console.log(id, data);
  const [categoryNews, setCategoryNews] = useState([]);

  useEffect(() => {
    if (id == "0") {
      setCategoryNews(data);
      return;
    } else if (id == "1") {
      const fillterNews = data.filter(
        (news) => news.others.is_today_pick == true
      );
      setCategoryNews(fillterNews);
    } else {
      const fillterNews = data.filter((news) => news.category_id == id);
      console.log(fillterNews);
      setCategoryNews(fillterNews);
    }
  }, [id, data]);
  return (
    <div>
      <h2 className="text-2xl font-bold">CategoryNews {categoryNews.length}</h2>
    </div>
  );
};

export default CategoryNews;
