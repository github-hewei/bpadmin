import { useLocation, history } from "umi";
import styles from "./style.less";
import { Card, CardList, Classes, Collapse, Colors } from "@blueprintjs/core";
import { ChevronDown, ChevronRight } from "@blueprintjs/icons";
import { useState } from "react";

interface MenuItem {
  title: string;
  path: string;
  icon: string;
  level: number;
  children?: MenuItem[];
}

const MEMU_LIST: MenuItem[] = [
  {
    title: "首页",
    path: "/",
    icon: "",
    level: 1,
    children: [
      {
        title: "首页",
        path: "/",
        icon: "",
        level: 2,
        children: [
          {
            title: "首页",
            path: "/",
            icon: "",
            level: 3,
          },
          {
            title: "Docs",
            path: "/docs",
            icon: "",
            level: 3,
          },
        ],
      },
      {
        title: "首页",
        path: "/",
        icon: "",
        level: 2,
        children: [
          {
            title: "首页",
            path: "/",
            icon: "",
            level: 3,
          },
          {
            title: "首页首页首页首页首页首页首页",
            path: "/",
            icon: "",
            level: 3,
          },
        ],
      },
      {
        title: "首页",
        path: "/",
        icon: "",
        level: 2,
        children: [
          {
            title: "首页",
            path: "/",
            icon: "",
            level: 3,
          },
          {
            title: "首页首页首页首页首页首页首页",
            path: "/",
            icon: "",
            level: 3,
          },
        ],
      },
    ],
  },
];

MEMU_LIST.push(MEMU_LIST[0])
MEMU_LIST.push(MEMU_LIST[0])
MEMU_LIST.push(MEMU_LIST[0])

/**
 * 菜单组
 */
const MenuGroup: React.FC<MenuItem> = ({
  title,
  path,
  icon,
  children,
  level,
}) => {
  let [open, setOpen] = useState(false);
  let location = useLocation()
  // console.log("location", location)

  /**
   * 点击菜单事件
   */
  const handleClick: React.MouseEventHandler<HTMLDivElement> = () => {
    if (children && children?.length > 0) {
      setOpen(!open)
    } else {
      history.push(path)
    }
  }

  return (
    <CardList compact={true}>
      <Card style={{ display: "block" }}>
        {level == 1 ? (
          <div onClick={handleClick} className={styles.menuRow}>
            <div>
              <span>{ title }</span>
            </div>
            <div>
              {open ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
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
        {children?.map((item, index) => {
          return <MenuGroup key={index} {...item}></MenuGroup>
        })}
      </Collapse>
    </CardList>
  );
};

/**
 * 左侧菜单栏
 */
const Sidebar: React.FC = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <h4>Hello World</h4>
      </div>
      <div className={styles.menu}>
        {MEMU_LIST.map((item, index) => {
          return <MenuGroup key={index} {...item}></MenuGroup>;
        })}
      </div>
    </div>
  );
};

export default Sidebar;
