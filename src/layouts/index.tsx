import { Link, Outlet } from 'umi';
import styles from './index.less';
import { Alignment, Button } from '@blueprintjs/core';
import { Sidebar, Navbar } from "./components"
import { useState } from 'react';

function Layout() {
  // let [ name, setNmae ] = useState('nAME')

  return (
    <div className={styles.main}>
      <Sidebar />
      <div className={styles.content}>
        <Navbar />
        <div className={styles.page}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout
