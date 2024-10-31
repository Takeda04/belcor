import React, { useState, useEffect } from 'react';
import { useMediaQuery } from '@mui/material';
import { BsFileArrowUpFill } from 'react-icons/bs';

interface CellGridProps {
  baseRows?: number;
  baseColumns?: number;
  directions: string[];
  delay: number;
  onMovementComplete: () => void;
}

const CellGrid: React.FC<CellGridProps> = ({ baseRows = 10, baseColumns = 10, directions, delay, onMovementComplete }) => {
  const isSmallScreen = useMediaQuery('(max-width: 600px)');
  const isMediumScreen = useMediaQuery('(min-width: 601px) and (max-width: 960px)');
  const cellSize = isSmallScreen ? 20 : isMediumScreen ? 30 : 40;
  const rows = isSmallScreen ? baseRows - 2 : isMediumScreen ? baseRows - 1 : baseRows;
  const columns = isSmallScreen ? baseColumns - 2 : isMediumScreen ? baseColumns - 1 : baseColumns;

  const [visitedCells, setVisitedCells] = useState<{ row: number; col: number }[]>([{ row: 0, col: 0 }]);
  const [rotation, setRotation] = useState(0);
  const [isMoving, setIsMoving] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const moveArrow = (direction: string) => {
    setVisitedCells((prevVisitedCells) => {
      const currentPos = prevVisitedCells[prevVisitedCells.length - 1] || { row: 0, col: 0 };
      let { row, col } = currentPos;
      let newRotation = rotation;

      if (direction === 'R' && col < columns - 1) {
        col += 1;
        newRotation = 90;
      } else if (direction === 'L' && col > 0) {
        col -= 1;
        newRotation = 270;
      } else if (direction === 'D' && row < rows - 1) {
        row += 1;
        newRotation = 180;
      } else if (direction === 'U' && row > 0) {
        row -= 1;
        newRotation = 0;
      }

      setRotation(newRotation);
      return [...prevVisitedCells, { row, col }];
    });
  };

  useEffect(() => {
    if (isMoving && currentStep < directions.length) {
      const timer = setTimeout(() => {
        moveArrow(directions[currentStep]);
        setCurrentStep((prevStep) => prevStep + 1);
      }, delay);

      return () => clearTimeout(timer);
    } else if (currentStep >= directions.length && isMoving) {
      setIsMoving(false);
      onMovementComplete(); // Trigger movement complete callback
    }
  }, [isMoving, currentStep, directions, delay]);

  useEffect(() => {
    if (directions.length > 0) {
      setVisitedCells([{ row: 0, col: 0 }]);
      setRotation(0);
      setCurrentStep(0);
      setIsMoving(true);
    }
  }, [directions]);

  const cellStyle = (isVisited: boolean) => ({
    width: `${cellSize}px`,
    height: `${cellSize}px`,
    border: '1px solid black',
    backgroundColor: isVisited ? '#ffffff2d' : 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  });

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: `repeat(${columns}, ${cellSize}px)`,
    gridTemplateRows: `repeat(${rows}, ${cellSize}px)`,
    gap: '2px',
    justifyContent: 'center',
    marginTop: '20px',
  };

  return (
    <>
      <div style={gridStyle}>
        {[...Array(rows * columns)].map((_, index) => {
          const cellRow = Math.floor(index / columns);
          const cellCol = index % columns;
          const isVisited = visitedCells.some((cell) => cell.row === cellRow && cell.col === cellCol);

          return (
            <div key={index} style={cellStyle(isVisited)}>
              {isVisited && cellRow === visitedCells[visitedCells.length - 1].row &&
               cellCol === visitedCells[visitedCells.length - 1].col && (
                <BsFileArrowUpFill
                  size={cellSize / 2}
                  color="yellowgreen"
                  style={{ transform: `rotate(${rotation}deg)` }}
                />
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CellGrid;