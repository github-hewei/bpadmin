import { Outlet } from 'umi';
import styles from './index.less';
import { Sidebar, Navbar } from "./components"

/**
 * 页面布局
 */
function Layout() {
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
