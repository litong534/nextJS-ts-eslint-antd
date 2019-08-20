import React from 'react';
import { Button } from 'antd-mobile';
import { Rate } from 'antd';
import styles from './index.scss';
const Home = (): React.ReactElement => {
  return (
    <>
      <Button type="primary">hello world</Button>
      <span className={styles.test}>我我我</span>
      <Rate />
    </>
  );
};

export default Home;
