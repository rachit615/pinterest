import React from "react";
import "./galleryItem.css";
import { Link } from "react-router";
import Image from "../Image/Image";

const GalleryItem = ({ item }) => {
  const { width, height, media } = item;
  const optimizedImageHeight = (372 / width) * height;

  return (
    <div
      className="galleryItem"
      style={{
        gridRowEnd: `span ${Math.ceil(height / 100)}`,
      }}
    >
      <Image src={media} w={372} h={optimizedImageHeight} />
      <Link to={`/pin/${item.id}`} className="overlay" />
      <button className="saveButton">Save</button>
      <div className="overlayIcons">
        <button>
          <Image src="/general/share.svg" alt="" />
        </button>
        <button>
          <Image src="/general/more.svg" alt="" />
        </button>
      </div>
    </div>
  );
};

export default GalleryItem;
