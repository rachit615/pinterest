import React from "react";
import "./leftBar.css";
import Image from "../Image/Image";

const LeftBar = () => {
  return (
    <div className="leftBar">
      <div className="menuIcons">
        <a href="" className="menuIcon">
          <Image path="/general/logo.png" alt="" />
        </a>
        <a href="" className="menuIcon">
          <Image path="/general/home.svg" alt="" />
        </a>
        <a href="" className="menuIcon">
          <Image path="/general/create.svg" alt="" />
        </a>
        <a href="" className="menuIcon">
          <Image path="/general/updates.svg" alt="" />
        </a>
        <a href="" className="menuIcon">
          <Image path="/general/messages.svg" alt="" />
        </a>
      </div>
      <a href="" className="menuIcon">
        <Image path="/general/settings.svg" alt="" />
      </a>
    </div>
  );
};

export default LeftBar;
