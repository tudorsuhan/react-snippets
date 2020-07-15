// Core
import React from 'react';
import { Form, Input, Button } from 'antd';

// Styles
import styles from './index.module.scss';

const MazeForm = ({ showMaze, width, height, start, end, brickDensity }) => {
  return (
    <Form name="maze" className={styles['maze-form']} initialValues={{ width, height, start, end, brickDensity }} onFinish={showMaze}>
      <div className={styles['maze-form__wh']}>
        <Form.Item
          label="Width"
          name="width"
          className={styles['form-item']}
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Height"
          name="height"
          className={styles['form-item']}
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
      </div>
      <Form.Item
        label="Start"
        name="start"
        className={styles['form-item']}
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="End"
        name="end"
        className={styles['form-item']}
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Brick density"
        name="brickDensity"
        className={styles['form-item']}
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item className={styles.button}>
        <Button type="primary" htmlType="submit">
          Create Maze
        </Button>
      </Form.Item>
    </Form>
  );
}

export default MazeForm;
