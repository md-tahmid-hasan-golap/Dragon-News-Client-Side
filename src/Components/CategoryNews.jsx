import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "./NewsCard";

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

      setCategoryNews(fillterNews);
    }
  }, [id, data]);
  return (
    <div>
      <h2 className="text-2xl font-bold">CategoryNews {categoryNews.length}</h2>
      <div className="grid grid-cols-1 gap-5">
        {categoryNews.map((category) => (
          <NewsCard key={category.id} category={category}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
