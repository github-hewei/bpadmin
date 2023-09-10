import { useLocation, history } from "umi";
import styles from "./style.less";
import { Card, CardList, Classes, Collapse, Navbar, Alignment } from "@blueprintjs/core";
import { ChevronDown, ChevronRight } from "@blueprintjs/icons";
import { useState } from "react";
import routes from "@/../config/routes";

interface RouteItem {
  title: string;
  path?: string;
  component?: string,
  redirect?: string,
  icon?: string;
  layout?: boolean,
  routes?: RouteItem[];
}

interface ExtendItem {
  level: number,
}

/**
 * 菜单组
 */
const MenuGroup: React.FC<RouteItem & ExtendItem> = ({
  title,
  path,
  icon,
  routes,
  level,
}) => {
  let [open, setOpen] = useState(false);
  let location = useLocation();

  /**
   * 点击菜单事件
   */
  const handleClick: React.MouseEventHandler<HTMLDivElement> = () => {
    if (routes && routes?.length > 0) {
      setOpen(!open)
    } else {
      if (path) {
        history.push(path)
      }
    }
  }

  return (
    <CardList compact={true}>
      <Card style={{ display: "block", backgroundColor: location.pathname === path ? "#DCE0E5" : undefined }}>
        {level == 1 ? (
          <div onClick={handleClick} className={styles.menuRow}>
            <div>
              <span>{ title }</span>
            </div>
            <div>
              {open ? <ChevronDown /> : <ChevronRight />}
            </div>
          </div>
        ) : (
          <div onClick={handleClick} className={styles.menuRow}>
            <div style={{ marginLeft: (level-1) * 0.5 + 'rem' }}>
              <span>{ title }</span>
            </div>
          </div>
        )}
      </Card>
      <Collapse isOpen={open}>
        {routes?.map((item, index) => {
          let items = { ...item, level: level + 1 }
          return <MenuGroup key={index} { ...items }></MenuGroup>
        })}
      </Collapse>
    </CardList>
  );
};

/**
 * 左侧菜单栏
 */
const Sidebar: React.FC = () => {
  const ROUTES: RouteItem[] = routes;

  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <Navbar className={Classes.DARK}>
          <Navbar.Group align={Alignment.CENTER} style={{ justifyContent: "center" }}>
            <Navbar.Heading style={{ margin: 0, fontSize: "18px" }}>
              <span>数据管理系统</span>
            </Navbar.Heading>
          </Navbar.Group>
        </Navbar>
      </div>
      <div className={styles.menu}>
        {ROUTES.map((item, index) => {
          let items = { ...item, level: 1 }
          return <MenuGroup key={index} { ...items }></MenuGroup>;
        })}
      </div>
    </div>
  );
};

export default Sidebar;
