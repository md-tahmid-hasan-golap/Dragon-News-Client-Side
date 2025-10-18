import React from "react";
import { Outlet } from "react-router";
import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import Navbar from "../Components/Navbar";
import LeftAside from "../Components/LeftAside";
import RightAside from "../Components/RightAside";

const HomeLayouts = () => {
  return (
    <div>
      <header>
        <Header></Header>
        <LatestNews></LatestNews>
        <Navbar></Navbar>
      </header>
      <main className="max-w-6xl mx-auto grid grid-cols-12 gap-6 px-4">
        {/* Left Sidebar */}
        <aside className="col-span-3">
          <div className="sticky top-4">
            <LeftAside />
          </div>
        </aside>

        {/* Main Content */}
        <section className="main col-span-6">
          <Outlet />
        </section>

        {/* Right Sidebar */}
        <aside className="col-span-3">
          <div className="sticky top-4">
            <RightAside />
          </div>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayouts;
