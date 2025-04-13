import React, { useEffect, useState } from "react";

const config = [
  [1, 1, 0],
  [0, 1, 1],
  [1, 0, 1],
];

const GridLights = () => {
  const [clickedSquares, setClickedSquares] = useState(
    config.map((row) => [...row])
  );

  const [squaresOrder, setSquaresOrder] = useState([]);

  const countOnes = (grid) => {
    let count = 0;
    for (const row of grid) {
      for (const cell of row) {
        if (cell === 1) {
          count++;
        }
      }
    }
    return count;
  };

  const toggle = () => {
    const firstElement = squaresOrder.shift();
    const [rowIdx, colIdx] = firstElement;
    const newArr = [...clickedSquares];
    newArr[rowIdx][colIdx] = 1;
    setClickedSquares([...newArr]);
  };

  const handleSquareClick = (i, rowIdx, colIdx) => {
    if (i === 0) {
      return;
    }
    if (i === 1) {
      const newArr = [...clickedSquares];
      newArr[rowIdx][colIdx] = 2;
      setClickedSquares([...newArr]);
      setSquaresOrder((prev) => [...prev, [rowIdx, colIdx]]);
    }
  };

  const getSquareColor = (i) => {
    if (i === 2) {
      return "purple";
    }
    if (i === 1) {
      return "red";
    }

    if (i === 0) {
      return "orange";
    }
  };

  const renderSquareRow = (row, rowIdx) => {
    return (
      <div key={rowIdx} className="grid-row">
        {row.map((i, colIdx) => {
          let cls = "square";
          const color = getSquareColor(i);

          return (
            <div
              key={`${rowIdx} ${colIdx}`}
              className={`${cls} ${color}`}
              onClick={() => handleSquareClick(i, rowIdx, colIdx)}
            >
              {i}
            </div>
          );
        })}
      </div>
    );
  };

  useEffect(() => {
    if (squaresOrder?.length === countOnes(config)) {
      const intervalId = setInterval(() => {
        toggle();
        if (squaresOrder.length === 0) {
          clearInterval(intervalId);
        }
      }, 1000);
    }
  }, [squaresOrder.length]);

  return (
    <div>
      {clickedSquares.map((i, rowIdx) => {
        const row = i;
        return renderSquareRow(row, rowIdx);
      })}
    </div>
  );
};

export default GridLights;
