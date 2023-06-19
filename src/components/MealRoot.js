import React from "react";
import { Outlet,useNavigation } from "react-router-dom";
import BrowserTabNavigation from "./MealNavigation/BrowserTabNavigation";
export default function MealRoot() {
    const navigation = useNavigation();

  return (
    <div>
      <BrowserTabNavigation />
      {navigation.state === "loading" && (
        <p style={{ textAlign: "center" }}>loading</p>
      )}

      <Outlet />
    </div>
  );
}
