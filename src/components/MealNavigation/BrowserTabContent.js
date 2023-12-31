import React from "react";
import { TabPanel } from "react-tabs";
import HomePage from "../Home/HomePage";
import Supplementary from "../Supplementary/Supplementary";
import classes from './BrowserTabContent.module.css'
const BrowserTabContent = () => {
  return (
    <div className={classes.tabpanel}>
      <TabPanel className={classes.homepage}>
        <HomePage />
      </TabPanel>
      <TabPanel className={classes.supplementary}>
        <Supplementary />
      </TabPanel>
    </div>
  );
};

export default BrowserTabContent;
