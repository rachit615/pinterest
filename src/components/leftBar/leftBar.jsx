import React from "react";
import "./leftBar.css";
import Image from "../Image/Image";

const LeftBar = () => {
  return (
    <div className="leftBar">
      <div className="menuIcons">
        <a href="" className="menuIcon">
          <Image src="/general/logo.png" alt="" />
        </a>
        <a href="" className="menuIcon">
          <Image src="/general/home.svg" alt="" />
        </a>
        <a href="" className="menuIcon">
          <Image src="/general/create.svg" alt="" />
        </a>
        <a href="" className="menuIcon">
          <Image src="/general/updates.svg" alt="" />
        </a>
        <a href="" className="menuIcon">
          <Image src="/general/messages.svg" alt="" />
        </a>
      </div>
      <a href="" className="menuIcon">
        <Image src="/general/settings.svg" alt="" />
      </a>
    </div>
  );
};

export default LeftBar;
