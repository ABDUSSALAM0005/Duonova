// src/layout/Layout.jsx
import React from "react";
import Header from "./components/Header";
import AppRoutes from "./routes";
import { Router } from "react-router-dom";
// import Footer from "../components/Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
    <Header/>
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
