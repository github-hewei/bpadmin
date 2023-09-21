import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  FormGroup,
  InputGroup,
  Intent,
  OverlayToaster,
  Position,
} from "@blueprintjs/core";
import { ChangeEvent, Component, ReactNode } from "react";

/**
 * 修改密码弹窗
 */
interface ChangePasswordProps {
  visible: boolean;
  onClose: () => void;
}

interface ChangePasswordState {
  oldPassword: string;
  newPassword: string;
  newPassword2: string;
}

/**
 * 表单验证错误信息
 */
interface FormErrors {
  oldPassword: string;
  newPassword: string;
  newPassword2: string;
}

// const toaster = OverlayToaster.create({
//   position: Position.TOP_RIGHT,
// });

/**
 * 修改密码弹窗组件
 */
class ChangePassword extends Component<
  ChangePasswordProps,
  ChangePasswordState
> {
  /**
   * Toast组件
   */
  private toaster: OverlayToaster | null = null;

  private errors: FormErrors = {
    oldPassword: "",
    newPassword: "",
    newPassword2: "",
  };

  constructor(props: ChangePasswordProps) {
    super(props);

    this.state = {
      oldPassword: "",
      newPassword: "",
      newPassword2: "",
    };
  }

  render(): ReactNode {
    const { oldPassword, newPassword, newPassword2 } = this.state;

    return (
      <>
        <Dialog
          onClose={() => this.props.onClose()}
          isOpen={this.props.visible}
          title="修改密码"
          icon="info-sign"
        >
          <DialogBody>
            {/* 原密码 */}
            <FormGroup label="原密码" labelFor="oldPassword">
              <InputGroup
                type="password"
                name="oldPassword"
                id="oldPassword"
                placeholder="输入原密码"
                autoComplete="off"
                value={oldPassword}
                onChange={this.onInputChange}
              />
            </FormGroup>

            {/* 新密码 */}
            <FormGroup label="新密码" labelFor="newPassword">
              <InputGroup
                type="password"
                name="newPassword"
                id="newPassword"
                placeholder="输入新密码"
                autoComplete="off"
                value={newPassword}
                onChange={this.onInputChange}
              />
            </FormGroup>

            {/* 确认新密码 */}
            <FormGroup label="确认新密码" labelFor="newPassword2">
              <InputGroup
                type="password"
                name="newPassword2"
                id="newPassword2"
                placeholder="确认新密码"
                autoComplete="off"
                value={newPassword2}
                onChange={this.onInputChange}
              />
            </FormGroup>
          </DialogBody>

          {/* 底部栏 */}
          <DialogFooter
            actions={
              <>
                <Button
                  type="button"
                  intent="primary"
                  text="确认"
                  onClick={this.submit}
                />
                <Button
                  type="button"
                  text="关闭"
                  onClick={() => this.props.onClose()}
                />
              </>
            }
          />
        </Dialog>

        {/* Toast */}
        <OverlayToaster
          position={Position.TOP}
          maxToasts={1}
          ref={(ref) => (this.toaster = ref)}
        />
      </>
    );
  }

  /**
   * 表单输入事件
   * @param event
   */
  onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    this.setState({ [name]: value } as Pick<
      ChangePasswordState,
      keyof ChangePasswordState
    >);
  };

  /**
   * 提交表单事件
   * @param event
   */
  submit = (event: React.MouseEvent<HTMLElement>) => {
    this.setState({});

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

    console.log("state", this.state);
  };

  /**
   * 表单验证
   * @returns
   */
  validateForm = (): boolean => {
    let isValid = true;
    this.errors.oldPassword = "";
    this.errors.newPassword = "";
    this.errors.newPassword2 = "";

    if (!this.state.oldPassword) {
      isValid = false;
      this.errors.oldPassword = "请输入旧密码";
    }

    if (this.state.newPassword.length < 8) {
      isValid = false;
      this.errors.newPassword = "密码不能小于8位";
    }

    if (!this.state.newPassword) {
      isValid = false;
      this.errors.newPassword = "请输入新密码";
    }

    if (this.state.newPassword !== this.state.newPassword2) {
      isValid = false;
      this.errors.newPassword2 = "两次密码输入不一致";
    }

    return isValid;
  };
}

export default ChangePassword;
