//Importing React Hooks and styles
import { useState } from 'react';
import './App.css';
import Square from './Components/Square'; //Importing Square.js from Components, this handles the individual square logic


//Did not modify
//This is used from the website from tic tac toe
//https://react.dev/learn/tutorial-tic-tac-toe//

export default function Board() {             //Beginning of the main board component for the game   
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));


  //Handles the clicking for the squares
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();  //Creating the copies of the squares states

    //If statemen
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    setSquares(nextSquares);  //To update the the board with the new board status when the player clicks
    setXIsNext(!xIsNext);
  }

  //Basic reset button after winner is declare
  function resetGame() {
    setSquares(Array(9).fill(null)); // Resets all squares
    setXIsNext(true); // Resets the turn to the first player
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <>
       <h1 className="game-title">Tic-Tac-Toe</h1> {/* Title for the game */}
      <div className="status">{status}</div>

      <div className="board">
        {squares.map((square, index) => (
          <Square key={index} value={square} onSquareClick={() => handleClick(index)} />
        ))}
      </div>
      <button className='reset-button' onClick={resetGame}>Reset Game</button>  {/*Reset Button*/}
    </>
  );
}


function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}