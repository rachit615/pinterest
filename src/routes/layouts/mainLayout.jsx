import React from "react";
import LeftBar from "../../components/leftBar/leftBar";
import TopBar from "../../components/topBar/topBar";
import Gallery from "../../components/gallery/gallery";

const MainLayout = () => {
  return (
    <div>
      <div className="app">
        <LeftBar />
        <div className="content">
          <TopBar />
          <Gallery />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
