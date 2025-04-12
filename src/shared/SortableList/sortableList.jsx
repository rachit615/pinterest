import { useState } from "react";
import "./sortableList.css";

export default function SortableList({ data = [] }) {
  const [list, setList] = useState(data);
  const [startIndex, setStartIndex] = useState(-1);
  const [dropIndex, setDropIndex] = useState(-1);

  const reset = () => {
    setStartIndex(-1);
    setDropIndex(-1);
  };

  const handleDragStart = (e, idx) => {
    setStartIndex(idx);
    // clone the original element

    const original = e.currentTarget;
    const dragImage = original.cloneNode(true);
    dragImage.style.pointerEvents = "none";
    dragImage.style.position = "absolute";
    dragImage.style.opacity = "0.8";
    dragImage.style.backgroundColor = "red";
    dragImage.style.transform = "scale(1.2)";
    dragImage.style.width = "200px";

    dragImage.style.top = "-2000px";
    dragImage.style.left = "-2000px";

    document.body.appendChild(dragImage);

    e.dataTransfer.setDragImage(dragImage, 100, 10);
  };

  const handleDragEnd = (e) => {
    reset();
  };

  const handleDragOver = (e, idx) => {
    e.preventDefault(); // Crucial to allow dropping
    setDropIndex(idx);
  };

  function swapListElements(startIndex, dropIndex, arr) {
    const newArr = [...arr];

    const [element] = newArr.splice(startIndex, 1);
    newArr.splice(dropIndex, 0, element);

    return newArr;
  }

  const handleDrop = (e, idx) => {
    e.preventDefault();
    const dropIndex = idx;
    const newArray = [...list];

    setList(swapListElements(startIndex, dropIndex, newArray));
    reset();
  };

  return (
    <div className="sortableList">
      {list.map((item, idx) => {
        let cls = "row-x";
        if (idx === startIndex) {
          cls += " grabbing";
        }

        if (idx === dropIndex) {
          cls += " drop-zone";
        }
        return (
          <div
            key={idx}
            className={cls}
            draggable={true}
            onDragStart={(e) => handleDragStart(e, idx)}
            onDragEnd={(e) => handleDragEnd(e, idx)}
            onDragOver={(e) => handleDragOver(e, idx)}
            onDrop={(e) => handleDrop(e, idx)}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
}
