// Core
import { createSelector } from 'reselect';

const getApp = (state) => state.app;

const getMaze = createSelector(
  getApp,
  (app) => app.maze,
);

const getPath = createSelector(
  getApp,
  (app) => app.path,
);

const getWidth = createSelector(
  getApp,
  (app) => app.width,
);

const getHeight = createSelector(
  getApp,
  (app) => app.height,
);

const getStart = createSelector(
  getApp,
  (app) => app.start,
);

const getEnd = createSelector(
  getApp,
  (app) => app.end,
);


const getBrickDensity = createSelector(
  getApp,
  (app) => app.brickDensity,
);

const getRows = createSelector(
  getApp,
  (app) => app.rows,
);

const getColumns = createSelector(
  getApp,
  (app) => app.columns,
);

export default {
  getMaze,
  getPath,
  getWidth,
  getHeight,
  getStart,
  getEnd,
  getBrickDensity,
  getRows,
  getColumns,
};
