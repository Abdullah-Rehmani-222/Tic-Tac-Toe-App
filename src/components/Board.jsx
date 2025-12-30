import { useState } from "react";
import Square from "./Square";

function Board() {
  const [isxnext, setIsxnext] = useState(true);
  const [squares, setSquare] = useState(Array(9).fill(null));

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const newSquare = [...squares];
    if (isxnext) {
      newSquare[i] = "X";
    } else {
      newSquare[i] = "O";
    }
    setSquare(newSquare);
    setIsxnext(!isxnext);
  }
  const winner = calculateWinner(squares);

  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next Player: ${isxnext ? "X" : "O"}`;
  }

//! This below "handleButtonClick" logic is created by me.
  function handleButtonClick() {
    const newSquare = [...squares];
    for (let i = 0; i < newSquare.length; i++) {
      newSquare[i] = null 
      setSquare(newSquare)
    }
  }

  return ( 
    <>
      <h1 className="text-yellow-300 text-3xl text-center mb-2">{status}</h1>
      <div>
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div>
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div>
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>

      <div className="text-center">

      <button className="rounded-lg mt-5 cursor-pointer text-white bg-green-950 p-3" onClick={handleButtonClick}>RESET GAME</button>
      </div>
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
export default Board;
