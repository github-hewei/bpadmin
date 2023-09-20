import {
  Alignment,
  Navbar,
  Classes,
  Button,
  Popover,
  Menu,
  MenuItem,
} from "@blueprintjs/core";
import styles from "./style.less";
import { Breadcrumbs, ChangePassword } from "@/layouts/components";
import { useState } from "react";

/**
 * 系统设置菜单
 */
interface SettingsProps {
  changePassword: () => void;
}

const Settings: React.FC<SettingsProps> = ({ changePassword }) => {
  return (
    <Menu>
      <MenuItem icon="edit" text="修改密码" onClick={() => changePassword()} />
      <MenuItem icon="log-out" text="退出登录" />
    </Menu>
  );
};

/**
 * 顶部导航栏
 */
const CustomNavbar: React.FC = () => {
  const [cpVisible, setCpVisible] = useState(false);

  return (
    <div className={styles.navbar}>
      {/* 导航栏 */}
      <Navbar className={Classes.DARK}>
        <Navbar.Group align={Alignment.RIGHT} style={{ marginRight: "2rem" }}>
          <Button className={Classes.MINIMAL} icon="user">
            个人中心
          </Button>
          <Navbar.Divider />
          <Button className={Classes.MINIMAL} icon="notifications" />
          <Popover
            position="bottom-left"
            content={<Settings changePassword={() => setCpVisible(true)} />}
          >
            <Button className={Classes.MINIMAL} icon="cog" />
          </Popover>
        </Navbar.Group>
      </Navbar>

      {/* 面包屑导航 */}
      <Breadcrumbs />

      {/* 修改密码弹窗 */}
      <ChangePassword visible={cpVisible} onClose={() => setCpVisible(false)} />
    </div>
  );
};

export default CustomNavbar;
