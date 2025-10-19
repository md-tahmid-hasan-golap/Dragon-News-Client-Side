import React from "react";
import { Outlet } from "react-router";
import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import Navbar from "../Components/Navbar";
import LeftAside from "../Components/LeftAside";
import RightAside from "../Components/RightAside";

const HomeLayouts = () => {
  return (
    <div className="bg-gray-50 dark:bg-slate-900 min-h-screen">
      {/* Header Section */}
      <header>
        <Header />
        <LatestNews />
        <Navbar />
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6 px-4 sm:px-6">
        {/* Left Sidebar */}
        <aside className="hidden lg:block lg:col-span-3 sticky top-20 h-fit">
          <LeftAside />
        </aside>

        {/* Main Outlet */}
        <section className="col-span-1 lg:col-span-6">
          <Outlet />
        </section>

        {/* Right Sidebar */}
        <aside className="hidden lg:block lg:col-span-3 sticky top-20 h-fit">
          <RightAside />
        </aside>
      </main>
    </div>
  );
};

export default HomeLayouts;
