// Core
import { handleActions } from 'redux-actions';

import actions from 'actions';

import getMaze from 'utils/maze';
import getPath from 'utils/path';

const initialState = {
  width: 400,
  height: 500,
  start: '00',
  end: '04',
  brickDensity: 5,
  maze: undefined,
  path: undefined,
  rows: 6,
  columns: 5,
};

const showMaze = (state, { payload: { width, height, start, end, brickDensity } }) => {
  const maze = getMaze(start, end, brickDensity);
  return {
    ...state,
    width,
    height,
    start: [parseInt(start[0]), parseInt(start[1])],
    end: [parseInt(end[0]), parseInt(end[1])],
    brickDensity,
    maze,
    path: getPath(maze, state.columns, state.rows)
  }
};

export default handleActions(
  {
    [actions.showMaze]: showMaze,
  },
  initialState,
);
