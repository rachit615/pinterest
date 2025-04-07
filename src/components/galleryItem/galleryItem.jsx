import React from "react";
import "./galleryItem.css";
import { Link } from "react-router";

const GalleryItem = ({ item }) => {
  const { width, height, media } = item;
  return (
    <div
      className="galleryItem"
      style={{
        gridRowEnd: `span ${Math.ceil(height / 100)}`,
      }}
    >
      <img src={media} alt="pinterest image" />
      <Link to={`/pin/${item.id}`} className="overlay" />
      <button className="saveButton">Save</button>
      <div className="overlayIcons">
        <button>
          <img src="/general/share.svg" alt="" />
        </button>
        <button>
          <img src="/general/more.svg" alt="" />
        </button>
      </div>
    </div>
  );
};

export default GalleryItem;
