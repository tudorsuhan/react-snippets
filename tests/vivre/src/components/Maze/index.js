// Core
import React from 'react';
import { connect } from 'react-redux';

// Components
import MazeForm from 'components/Form';
import MazeWrapper from 'components/MazeWrapper';

// Selectors
import selectors from 'selectors';

// Actions
import actions from 'actions';

// Styles
import styles from './index.module.scss';

const Maze = ({ width, height, start, end, brickDensity, rows, columns, maze, showMaze, path }) => {
  return (
    <div className={styles.app}>
      <MazeForm showMaze={showMaze} width={width} height={height} start={start} end={end} brickDensity={brickDensity} />
      {maze && <MazeWrapper maze={maze} path={path} start={start} end={end} width={width} height={height} rows={rows} columns={columns} />}
    </div>
  );
}

const mapStateToProps = (state) => ({
  maze: selectors.getMaze(state),
  path: selectors.getPath(state),
  width: selectors.getWidth(state),
  height: selectors.getHeight(state),
  start: selectors.getStart(state),
  end: selectors.getEnd(state),
  brickDensity: selectors.getBrickDensity(state),
  rows: selectors.getRows(state),
  columns: selectors.getColumns(state),
});

const mapDispatchToProps = {
  showMaze: actions.showMaze,
};

export default connect(mapStateToProps, mapDispatchToProps)(Maze);
