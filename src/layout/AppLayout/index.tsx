import React, { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';

import styles from './style.module.scss';

const AppLayout = () => {
  return (
    <div className={styles.wrapper}>
      <Outlet />
    </div>
  );
};

export default AppLayout;
