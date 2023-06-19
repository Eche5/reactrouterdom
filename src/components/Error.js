import React from "react";
import MainNavigation from "./Navigations/MainNavigation";
import BrowserTabNavigation from "./MealNavigation/BrowserTabNavigation";
import PageContent from "./PageContent";
import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  let title = "An error occured";
  let message = "Something went wrong";
  if (error.status === 500) {
    message = error.data.message;
  }
  if (error.status === 404) {
    title = "Page not found";
    message = "Could not find resources or page";
  }
  return (
    <div>
      <MainNavigation />
      <BrowserTabNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </div>
  );
}
