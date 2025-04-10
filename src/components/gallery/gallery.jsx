import React from "react";

import "./gallery.css";
import GalleryItem from "../galleryItem/galleryItem";
import InfiniteScroll from "react-infinite-scroll-component";

import axios from "axios";

import { useInfiniteQuery } from "@tanstack/react-query";
const Gallery = () => {
  const fetchPins = async (pageParam) => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_ENDPOINT}/pins?cursor=${pageParam}`
      );
      return res.data;
    } catch (error) {
      console.error("Failed to fetch pins:", error);
      throw new Error("Unable to fetch pins. Please try again later.");
    }
  };

  const { data, error, fetchNextPage, hasNextPage, status } = useInfiniteQuery({
    queryKey: ["pins"],
    queryFn: ({ pageParam }) => fetchPins(pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });

  if (status === "pending") return "Loading...";
  if (status === "error") return "An error has occurred: " + error.message;

  const allPins = data.pages.flatMap((page) => page.pins) || [];

  return (
    <InfiniteScroll
      dataLength={allPins.length}
      next={fetchNextPage}
      hasMore={hasNextPage}
      loader={
        <h4
          style={{
            textAlign: "center",
            marginTop: "50px",
            marginBottom: "50px",
          }}
        >
          Loading...
        </h4>
      }
      endMessage={<h4>All posts visiting done</h4>}
    >
      <div className="gallery">
        {allPins.map((i) => (
          <GalleryItem key={i.id} item={i} />
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default Gallery;
