import React, { useState } from 'react';

const DraggableImage = ({ src }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(1); // Manage zoom level
  const [dragging, setDragging] = useState(false);
  const [startDragPos, setStartDragPos] = useState({ x: 0, y: 0 });

  const startDrag = (e) => {
    setDragging(true);
    setStartDragPos({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const onDrag = (e) => {
    if (dragging) {
      setPosition({
        x: e.clientX - startDragPos.x,
        y: e.clientY - startDragPos.y,
      });
    }
  };

  const stopDrag = () => {
    setDragging(false);
  };

  const zoomOut = () => {
    setScale(scale => Math.max(0.5, scale - 0.1)); // Decrease scale by 0.1, minimum scale 0.5
  };

  const zoomIn = () => {
    setScale(scale => Math.min(5, scale + 0.1)); // Increase scale by 0.1, maximum scale 5
  };

  return (
    <div
      style={{
        overflow: 'hidden',
        cursor: dragging ? 'grabbing' : 'grab',
        position: 'relative', // Container for positioning the buttons
      }}
      onMouseDown={startDrag}
      onMouseMove={onDrag}
      onMouseUp={stopDrag}
      onMouseLeave={stopDrag}
    >
      <img
        src={src}
        style={{
          transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
          transformOrigin: 'top left',
          userSelect: 'none',
        }}
        draggable="false"
      />
      <button
        onClick={zoomOut}
        style={{
          position: 'absolute',
          top: 50,
          right: 12,
        }}
      >
        ---
      </button>
      <button
        onClick={zoomIn}
        style={{
          position: 'absolute',
          top: 10,
          right: 12,
        }}
      >
        -|-
      </button>
    </div>
  );
};

export default DraggableImage;
