import React from "react";
import MainTabContent from "./Home/MainRoot/MainTabContent";
import { Outlet } from "react-router-dom";
export default function MainRoot() {
  return (
    <div>
      <MainTabContent />
      <Outlet />
    </div>
  );
}
