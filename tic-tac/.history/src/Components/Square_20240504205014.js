import React from 'react';
import xImage from '../';  // Update path to where your images are stored
import oImage from '../Assets/mark-o.png';  // Update path to where your images are stored

function Square({ value, onSquareClick }) {
  const getImageUrl = (value) => {
    if (value === 'X') return xImage;
    if (value === 'O') return oImage;
    return null;
  };

  return (
    <button className="square" onClick={onSquareClick}>
      {value && <img src={getImageUrl(value)} alt={value} style={{ maxWidth: '100%', maxHeight: '100%' }} />}
    </button>
  );
}

export default Square
