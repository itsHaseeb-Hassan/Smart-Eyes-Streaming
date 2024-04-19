import React, { useState,useEffect } from "react";
const LiveStreaming = () => {
  const styles = {
    overflow: "hidden",
  };
  const [gridSize, setGridSize] = useState({ rows: 2, cols: 2 });
  const [gridItems, setGridItems] = useState([]);

  useEffect(() => {
    handleButtonClick(2, 2);
  }, []);
  const handleButtonClick = (rows, cols) => {
    setGridSize({ rows, cols });
    generateBoxes(rows, cols);
  };

  const generateBoxes = (rows, cols) => {
    const newGridItems = [];
    const itemHeight = calculateItemHeight(rows, cols);
    for (let i = 0; i < rows * cols; i++) {
      newGridItems.push(
        <div
          key={i}
          className="grid-item"
          style={{ height: itemHeight, overflowY: "hidden" }}
        >
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/l4PYceQwFJ8?list=RDl4PYceQwFJ8"
            title="Kadi AA Mil Sanwal Yaar Ve | OST Raqs-e-Bismil | Original Full Video Song | sJANi STUDIO | SUBSCRIBE"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      );
    }
    setGridItems(newGridItems);
  };
  const calculateItemHeight = (rows, cols) => {
    // Set different heights based on grid size
    if (rows === 2 && cols === 2) {
      return "320px";
    } else if (rows === 3 && cols === 3) {
      return "210px";
    } else if (rows === 4 && cols === 4) {
      return "155px";
    }
    // Default height if none of the conditions match
    return "100px"; // Change to your desired default height
  };
  return (
    <>
      <div>
        <div className="button-container ms-5 d-flex justify-content-end me-5">
          <button className="btn" onClick={() => handleButtonClick(2, 2)}>
            2x2
          </button>
          <button className="btn" onClick={() => handleButtonClick(3, 3)}>
            3x3
          </button>
          <button className="btn" onClick={() => handleButtonClick(4, 4)}>
            4x4
          </button>
        </div>
        <div
          className="grid-container ms-5 me-5"
          style={{ gridTemplateColumns: `repeat(${gridSize.cols}, 1fr)` }}
        >
          {gridItems}
        </div>
      </div>
    </>
  );
};

export default LiveStreaming;
