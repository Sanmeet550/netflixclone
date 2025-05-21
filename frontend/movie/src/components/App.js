import React from "react";
import { Outlet } from "react-router";
import Footer from "./Footer";
import Header from "./Header";

export default function App() {
  return (
    <div className="bg-dark">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
