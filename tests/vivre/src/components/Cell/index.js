// Core
import React from 'react';

// Styles
import styles from './index.module.scss';

const Cell = ({ block }) => {
  const blockStyles = block ? styles.blockStyles : '';
  return (
    <div className={`${styles.cell} ${blockStyles}`} />
  );
}

export default Cell;
