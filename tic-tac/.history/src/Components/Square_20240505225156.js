import React from 'react';
import xImage from '../Components/Assets/mark-x.png';  // Update path to where your images are stored
import oImage from '../Components/Assets/mark-o.png';  // Update path to where your images are stored
//Put the iamges in Componets under "Assets" to use for the OnClick when the player selects the square the choose to pick


//Function for the Square component to use in the App.js
function Square({ value, onSquareClick }) {

  //Function to get the image.png from the correct folder
  const getImageUrl = (value) => {
    
    if (value === 'X') return xImage;   //Player X
    if (value === 'O') return oImage;   //Player O
    return null;
  };

  //Return 
  return (
    <button className="square" onClick={onSquareClick}>
      {value && <img src={getImageUrl(value)} alt={value} style={{ maxWidth: '100%', maxHeight: '100%' }} />}
    </button>
  );
}

export default Square
