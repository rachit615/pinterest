import React from "react";
import "./galleryItem.css";

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
    </div>
  );
};

export default GalleryItem;
