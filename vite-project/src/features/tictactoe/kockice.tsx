import React from 'react';

interface SquareProps {
  value: string | null;
  onClick: () => void;
}

const Square: React.FC<SquareProps> = ({ value, onClick }) => {
  return (
    <button
        className={`square ${value === 'X' ? 'x' : value === 'O' ? 'o' : ''}`}
        onClick={onClick}
        >
        {value}
    </button>
  );
};

export default Square;