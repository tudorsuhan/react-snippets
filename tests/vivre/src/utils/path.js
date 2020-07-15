const getPath = (matrix, columns = 5, rows = 6) => {
  // Defining visited array to keep 
  // track of already visited indexes 
  const visited = Array.from(Array(rows), () => []);
  const path = [];

  // Flag to indicate whether the 
  // path exists or not 
  let flag = false;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      // if matrix[i][j] is source 
      // and it is not visited 
      if (
        matrix[i][j] === 1 && !visited[i][j])

        // Starting from i, j and 
        // then finding the path 
        if (checkPath(matrix, i, j, visited, path)) {
          // if path exists 
          flag = true;
          break;
        }
    }
  }
  return flag ? path : undefined;
}

// Method for checking boundries 
const isSafe = (i, j, matrix) => {
  return i >= 0 && i < matrix.length && j >= 0 && j < matrix[0].length;
}

// Returns true if there is a 
// path from a source (a 
// cell with value 1) to a 
// destination (a cell with 
// value 2) 
const checkPath = (matrix, i, j, visited, path) => {

  // Checking the boundries, walls and 
  // whether the cell is unvisited 
  if (isSafe(i, j, matrix) && matrix[i][j] !== 0 && !visited[i][j]) {
    // Make the cell visited 
    visited[i][j] = true;

    // if the cell is the required 
    // destination then return true 
    if (matrix[i][j] === 2) {
      path.unshift([i, j]);
      return true;
    }

    // traverse up 
    const up = checkPath(matrix, i - 1, j, visited, path);

    // if path is found in up 
    // direction return true 
    if (up) {
      path.unshift([i, j]);
      return true;
    }

    // traverse left 
    const left = checkPath(matrix, i, j - 1, visited, path);

    // if path is found in left 
    // direction return true 
    if (left) {
      path.unshift([i, j]);
      return true;
    }

    // traverse down 
    const down = checkPath(matrix, i + 1, j, visited, path);

    // if path is found in down 
    // direction return true 
    if (down) {
      path.unshift([i, j]);
      return true;
    }

    // traverse right 
    const right = checkPath(matrix, i, j + 1, visited, path);

    // if path is found in right 
    // direction return true 
    if (right) {
      path.unshift([i, j]);
      return true;
    }
  }
  // no path has been found 
  return false;
}

export default getPath;
