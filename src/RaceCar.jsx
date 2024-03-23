// RaceCar.jsx
import React from 'react';

const RaceCar = ({ position, rotation }) => {
  return (
    <div
      style={{
        width: '50px',
        height: '50px',
        backgroundColor: 'red',
        position: 'absolute',
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: `rotate(${rotation}deg)`, // Apply rotation
        transformOrigin: 'center', // Ensures the car rotates around its center
      }}
    ></div>
  );
};

export default RaceCar;
