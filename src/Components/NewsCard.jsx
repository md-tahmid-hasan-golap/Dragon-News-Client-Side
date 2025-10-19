import React from "react";
import { FaRegBookmark, FaShareAlt, FaStar, FaRegStar } from "react-icons/fa";

const NewsCard = ({ category }) => {
  if (!category) return null;

  const { title, thumbnail_url, author, total_view, rating, details } =
    category;

  const authorName = author?.name || "Unknown";
  const published = author?.published_date
    ? new Date(author.published_date)
    : null;
  const formatDate = (d) =>
    d
      ? d.toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        })
      : "No date";

  const ratingNumber = rating?.number ?? 0;
  const fullStars = Math.floor(ratingNumber);
  const showRating = ratingNumber ? ratingNumber.toFixed(1) : "0.0";

  return (
    <article className="max-w-2xl mx-auto bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden transition hover:shadow-lg">
      {/* author row */}
      <div className="flex flex-wrap items-center justify-between px-4 py-3 border-b border-gray-100 dark:border-slate-700 gap-2">
        <div className="flex items-center gap-3">
          <img
            src={author?.img}
            alt={authorName}
            className="w-10 h-10 rounded-full object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://via.placeholder.com/80?text=User";
            }}
          />
          <div className="text-sm">
            <div className="font-medium text-slate-900 dark:text-slate-100">
              {authorName}
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400">
              {formatDate(published)}
            </div>
          </div>
        </div>

        {/* bookmark + share */}
        <div className="flex items-center gap-3 text-slate-500 dark:text-slate-300">
          <button
            aria-label="bookmark"
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-700 transition"
          >
            <FaRegBookmark size={16} />
          </button>
          <button
            aria-label="share"
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-700 transition"
          >
            <FaShareAlt size={16} />
          </button>
        </div>
      </div>

      {/* title */}
      <h2 className="px-4 pt-5 text-lg sm:text-xl md:text-2xl font-semibold text-slate-900 dark:text-slate-100 leading-snug">
        {title}
      </h2>

      {/* image */}
      <div className="px-4 pt-4">
        <div className="w-full rounded-md overflow-hidden">
          <img
            src={thumbnail_url}
            alt={title}
            className="w-full h-52 sm:h-64 md:h-72 object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://via.placeholder.com/800x450?text=No+Image";
            }}
          />
        </div>
      </div>

      {/* excerpt + read more */}
      <div className="px-4 py-4">
        {details && (
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-3 line-clamp-4">
            {details}
          </p>
        )}

        <div className="flex flex-wrap items-center justify-between gap-3">
          <a
            href="#"
            className="text-amber-600 hover:underline text-sm sm:text-base font-medium"
          >
            Read More
          </a>

          <div className="flex items-center gap-3">
            {/* star rating */}
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) =>
                i < fullStars ? (
                  <FaStar key={i} className="text-amber-400 w-4 h-4" />
                ) : (
                  <FaRegStar key={i} className="text-gray-300 w-4 h-4" />
                )
              )}
              <span className="text-sm text-slate-700 dark:text-slate-200 ml-2">
                {showRating}
              </span>
            </div>

            {/* circular icon */}
            <button className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-slate-700 dark:text-slate-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5s8.268 2.943 9.542 7c-1.274 4.057-5.065 7-9.542 7s-8.268-2.943-9.542-7z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default NewsCard;
