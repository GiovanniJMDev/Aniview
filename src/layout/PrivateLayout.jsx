// PrivateLayout.js
import React from "react";
import { Outlet } from "react-router-dom";
// import { Header } from "../../components/Header";
import Navbar from "../components/Navbar/Navbar";
const PrivateLayout = () => {
  return (
    <>
      {/* <Header /> */}

      <div className="flex min-h-screen bg-gray-100">
        <div>
          <Navbar />
        </div>
        <div className="flex-grow">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default PrivateLayout;
