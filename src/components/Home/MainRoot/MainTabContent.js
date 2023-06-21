import React from "react";
import { TabPanel } from "react-tabs";
import classes from './BrowserTabContent.module.css'
import MainCourseMeals from "../MainCourseMeals";
const MainTabContent = () => {
  return (
    <div className={classes.tabpanel}>
      <TabPanel className={classes.homepage}>
        <MainCourseMeals />
      </TabPanel>
      <TabPanel className={classes.supplementary}>
        <supplementary />
      </TabPanel>
    </div>
  );
};

export default MainTabContent;
