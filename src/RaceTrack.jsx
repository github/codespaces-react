import React from 'react';

const RaceTrack = ({ children }) => {
  return (
    <div style={{ width: '800px', height: '600px', backgroundColor: 'gray', position: 'relative' }}>
      {children}
    </div>
  );
};

export default RaceTrack;
