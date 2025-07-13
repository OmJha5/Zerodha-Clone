import React from "react";
import TopBar from "./TopBar";
import { Outlet } from "react-router-dom";
import useCheckUser from "../hooks/useCheckUser";

export default function Home() {
  useCheckUser();
  return (
    <div className="home-layout">
      <TopBar />
      <Outlet /> {/* This is where the Dashboard will render */}
    </div>
  );
}
