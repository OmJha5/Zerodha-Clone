import React from "react";
import WatchList from "./WatchList";
import { Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <WatchList />
      <div className="content">
        <Outlet /> {/* Nested dashboard routes */}
      </div>
    </div>
  );
}
