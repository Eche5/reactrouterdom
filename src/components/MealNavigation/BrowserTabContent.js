import React from "react";
import { TabPanel } from "react-tabs";
import HomePage from "../Home/HomePage";
import Supplementary from "../Supplementary/Supplementary";

const BrowserTabContent = () => {
  return (
    <div>
      <TabPanel>
        <HomePage />
      </TabPanel>
      <TabPanel>
        <Supplementary />
      </TabPanel>
    </div>
  );
};

export default BrowserTabContent;
