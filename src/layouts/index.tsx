import { Link, Outlet } from 'umi';
import styles from './index.less';
import "./main.css"
import { Alignment, Navbar, Button } from '@blueprintjs/core';
import { Sidebar } from "./components"
import { useState } from 'react';

function Layout() {
  // let [ name, setNmae ] = useState('nAME')

  return (
    <div className={styles.main}>
      <Sidebar />
      <div className={styles.content}>
        <div className={styles.navbar}>Navbar</div>
        <div className={styles.page}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout
