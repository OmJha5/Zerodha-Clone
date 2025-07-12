import React from "react";
import TopBar from "./TopBar";
import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-layout">
      <TopBar />
      <Outlet /> {/* This is where the Dashboard will render */}
    </div>
  );
}
