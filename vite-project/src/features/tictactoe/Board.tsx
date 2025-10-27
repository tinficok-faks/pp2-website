import React, { useState } from 'react';
import Square from './kockice.tsx';
import "./Board.css"

const Board: React.FC = () => {
  const [squares, setSquares] = useState<(string | null)[]>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const handleClick = (index: number) => {
    if (calculateWinner(squares) || squares[index]) {
      return;
    }
    const newSquares = squares.slice();
    newSquares[index] = isXNext ? 'X' : 'O';
    setSquares(newSquares);
    setIsXNext(!isXNext);
  };

  const handleRestart = () => {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
  };

  const winner = calculateWinner(squares);
  const status = winner ? `Winner: ${winner}` : `Next player: ${isXNext ? 'X' : 'O'}`;

  return (
    <div className="body-tictactoe">
        <div className="board-container">
            <h1 className="board-title">Tic Tac Toe</h1>
                <div className="status">{status}</div>
                    <div className="board-grid">
                    {squares.map((_, index) => (
                        <Square key={index} value={squares[index]} onClick={() => handleClick(index)} />
                    ))}
                    </div>
                <button className="restart-btn" onClick={handleRestart}>Restart</button>
            </div>
        </div>
    );
};

function calculateWinner(squares: (string | null)[]) {
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