import React from "react";
import { Tabs, TabList, Tab } from "react-tabs";
import { NavLink } from "react-router-dom";
import styles from "./BrowserTabNavigation.module.css";

const BrowserTabNavigation = () => {
  return (
    <Tabs>
      <TabList className={styles.list}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? styles.active : undefined)}
          end
        >
          <Tab>Main Course</Tab>
        </NavLink>
        <NavLink
          to="/supplement"
          className={({ isActive }) => (isActive ? styles.active : undefined)}
          end
        >
          <Tab>Supplement</Tab>
        </NavLink>
      </TabList>
      
    </Tabs>
  );
};

export default BrowserTabNavigation;
