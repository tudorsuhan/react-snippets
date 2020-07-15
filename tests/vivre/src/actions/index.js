// Core
import { createAction } from 'redux-actions';

const showMaze = createAction('SHOW_MAZE', ({ width, height, start, end, brickDensity }) => ({ width, height, start, end, brickDensity }));

export default {
  showMaze,
};
