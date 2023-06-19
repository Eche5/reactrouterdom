import React from "react";
import { Outlet,json } from "react-router-dom";
import MainNavigation from "./Navigations/MainNavigation";
export default function RootLayout() {
  return (
    <div>
      <MainNavigation />
      <Outlet />
    </div>
  );
}

