import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./SideBar";

function MainLayout({ children }) {
  return (
    <>
      <Header />
      <section className="bg-white dark:bg-gray-900 min-h-screen">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
            From the blog
          </h1>
          <div className="flex gap-10">
            {children}
            <Sidebar />
          </div>
          <div className="mt-12"></div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default MainLayout;
