import React, { ChangeEvent, Component } from "react";
import styles from "./style.less";
import { Card, FormGroup, InputGroup, Button } from "@blueprintjs/core";

interface LoginState {
  username: string;
  password: string;
}

/**
 * 登录组件
 */
class Login extends Component<{}, LoginState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  /**
   * 组件渲染
   */
  render(): React.ReactNode {
    const { username, password } = this.state;

    return (
      <div className={styles.login}>
        <Card className={styles.card}>
          {/* 账号输入 */}
          <FormGroup inline={true}>
            <InputGroup
              type="text"
              id="username"
              name="username"
              autoComplete="off"
              placeholder="请输入用户名"
              leftIcon="person"
              onChange={this.onInputChange}
              value={username}
            />
          </FormGroup>

          {/* 密码输入 */}
          <FormGroup helperText={
            <span style={{ cursor: "pointer" }} onClick={this.forgotPassword}>忘记密码?</span>
          } inline={true}>
            <InputGroup
              type="password"
              id="password"
              name="password"
              autoComplete="off"
              placeholder="请输入密码"
              leftIcon="lock"
              onChange={this.onInputChange}
              value={password}
            />
          </FormGroup>

          {/* 登录按钮 */}
          <Button intent="primary" onClick={this.login}>登录</Button>
        </Card>
      </div>
    );
  }

  /**
   * 表单输入事件
   */
  onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    this.setState({ [name]: value } as Pick<LoginState, keyof LoginState>);
  }

  /**
   * 忘记密码
   */
  forgotPassword = () => {
    console.log("forgotPassword");
  }

  /**
   * 登录系统
   */
  login = () => {
    const { username, password } = this.state;
    console.log("login", username, password);
  }
}

export default Login;
