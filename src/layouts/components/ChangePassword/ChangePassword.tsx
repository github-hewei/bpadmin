import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  FormGroup,
  InputGroup,
} from "@blueprintjs/core";

/**
 * 修改密码弹窗
 */
interface ChangePasswordProps {
  visible: boolean;
  onClose: () => void;
}

const ChangePassword: React.FC<ChangePasswordProps> = ({
  visible,
  onClose,
}) => {
  return (
    <Dialog
      onClose={() => onClose()}
      isOpen={visible}
      title="修改密码"
      icon="info-sign"
    >
      <DialogBody>
        {/* 原密码 */}
        <FormGroup label="原密码" labelFor="old-password">
          <InputGroup
            type="password"
            name="old-password"
            id="old-password"
            placeholder="输入原密码"
          />
        </FormGroup>

        {/* 新密码 */}
        <FormGroup label="新密码" labelFor="new-password">
          <InputGroup
            type="password"
            name="new-password"
            id="new-password"
            placeholder="输入新密码"
          />
        </FormGroup>

        {/* 确认新密码 */}
        <FormGroup label="确认新密码" labelFor="new-password-2">
          <InputGroup
            type="password"
            name="new-password-2"
            id="new-password-2"
            placeholder="确认新密码"
          />
        </FormGroup>
      </DialogBody>

      {/* 底部栏 */}
      <DialogFooter
        actions={
          <>
            <Button intent="primary" text="确认" />
            <Button text="关闭" onClick={() => onClose()} />
          </>
        }
      />
    </Dialog>
  );
};

export default ChangePassword;
