import React, { ChangeEvent, Component } from "react";
import styles from "./style.less";
import {
  Card,
  FormGroup,
  InputGroup,
  Button,
  H5,
  Intent,
  OverlayToaster,
  Position,
} from "@blueprintjs/core";

interface LoginState {
  username: string;
  password: string;
}

interface FormErrors {
  username: string;
  password: string;
}

/**
 * 登录组件
 */
class Login extends Component<{}, LoginState> {
  /**
   * Toast组件
   */
  private toaster: OverlayToaster | null = null;

  /**
   * 表单验证错误信息
   */
  private errors: FormErrors = {
    username: "",
    password: "",
  };

  /**
   * 构造方法
   * @param props 
   */
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
        <Card className={styles.card} elevation={2}>
          <H5 style={{ color: "#F6F7F9", textAlign: "center" }}>系统登录</H5>

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
              large={true}
            />
          </FormGroup>

          {/* 密码输入 */}
          <FormGroup
            helperText={
              <span
                style={{ cursor: "pointer", color: "#184A90" }}
                onClick={this.forgotPassword}
              >
                忘记密码?
              </span>
            }
            inline={true}
          >
            <InputGroup
              type="password"
              id="password"
              name="password"
              autoComplete="off"
              placeholder="请输入密码"
              leftIcon="lock"
              onChange={this.onInputChange}
              value={password}
              large={true}
            />
          </FormGroup>

          {/* 登录按钮 */}
          <Button
            intent="primary"
            type="button"
            onClick={this.login}
            large={true}
            fill={true}
          >
            登录
          </Button>
        </Card>

        <OverlayToaster
          position={Position.TOP}
          ref={(ref) => (this.toaster = ref)}
        />
      </div>
    );
  }

  /**
   * 表单输入事件
   */
  onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    this.setState({ [name]: value } as Pick<LoginState, keyof LoginState>);
  };

  /**
   * 忘记密码
   */
  forgotPassword = () => {
    console.log("forgotPassword");
  };

  /**
   * 登录系统
   */
  login = (event: React.MouseEvent<HTMLElement>) => {
    // this.forceUpdate();
    this.setState({});

    /**
     * 表单验证
     */
    if (!this.validateForm()) {
      type ErrorKeys = keyof FormErrors;

      for (const key of Object.keys(this.errors) as ErrorKeys[]) {
        if (this.errors[key]) {
          this.toaster?.show({
            message: this.errors[key],
            intent: "danger",
            timeout: 3000,
          });

          break;
        }
      }

      return;
    }

    const { username, password } = this.state;

    this.toaster?.show({
      message: "登录成功",
      intent: "success",
      timeout: 3000,
    });
  };

  /**
   * 表单验证
   */
  validateForm = (): boolean => {
    let isValid = true;
    this.errors.username = "";
    this.errors.password = "";

    if (!/^[a-zA-Z0-9_]{6,20}$/.test(this.state.username)) {
      isValid = false;
      this.errors.username = "用户名只能由6-20位的字母数字下划线组成";
    }

    if (!this.state.username) {
      isValid = false;
      this.errors.username = "请填写用户名";
    }

    if (this.state.password.length < 8) {
      isValid = false;
      this.errors.password = "密码不能小于8位";
    }

    if (!this.state.password) {
      isValid = false;
      this.errors.password = "请填写密码";
    }

    return isValid;
  };
}

export default Login;
