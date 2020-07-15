
const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
}

/**
 * 
A value of cell 1 means Source.
A value of cell 2 means Destination.
A value of cell 3 means Cell.
A value of cell 0 means Brick.
 */
const generateMaze = (start, end, brickDensity = 2, columns = 5, rows = 6) => {
  const maze = Array.from(Array(rows), () => (Array.from(Array(columns), () => 3)));
  maze[start[0]][start[1]] = 1;
  maze[end[0]][end[1]] = 2;

  let bricks = 0;
  do {
    const i = getRandomInt(rows - 1);
    const j = getRandomInt(columns - 1);
    if (maze[i][j] === 3) {
      maze[i][j] = 0;
      bricks++;
    }
  } while (bricks <= brickDensity);
  return maze;
}

export default generateMaze;
