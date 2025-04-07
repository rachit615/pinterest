import React from "react";
import "./topBar.css";
import UserButton from "../userButton/userButton";

const TopBar = () => {
  return (
    <div className="topBar">
      <div className="searchBar">
        <img src="/general/search.svg" alt="" />
        <input type="text" placeholder="Search" />
      </div>

      {/* User button */}
      <UserButton />
    </div>
  );
};

export default TopBar;
