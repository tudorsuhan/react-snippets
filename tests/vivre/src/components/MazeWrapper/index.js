// Core
import React, { useState, useEffect } from 'react';

// Components
import Cell from 'components/Cell';
import Brick from 'components/Brick';

// Styles
import styles from './index.module.scss';

const Maze = ({ width, height, maze, rows, columns, start, end, path }) => {
  const itemWidth = width / columns - 4;
  const itemHeigth = height / rows - 4;

  const [activePath, setActivePath] = useState(1);

  useEffect(() => {
    if (!path) return undefined;
    const interval = setInterval(() => setActivePath(cell => cell + 1), 400);
    return () => clearInterval(interval);
  }, [path, activePath]);

  return (
    <div className={styles.maze} style={{ width, height }}> {
      maze.map((row, i) => row.map((col, j) => {
        const pathStyle = path && path.slice(0, activePath).some(item => item[0] === i && item[1] === j) ? styles.pathItem : '';
        const startStyle = start && start[0] === i && start[1] === j ? styles.startItem : '';
        const endStyle = end && end[0] === i && end[1] === j ? styles.endItem : '';
        return <div
          className={`${styles.mazeItem} ${pathStyle} ${startStyle} ${endStyle}`}
          style={{ width: itemWidth, height: itemHeigth }}
          key={`${i}${j}`}>
          {col ? <Cell block={!path} /> : <Brick />}
        </div>
      }))
    }
    </div >
  );
}

export default Maze;
