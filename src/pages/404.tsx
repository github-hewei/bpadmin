import { Button, NonIdealState } from "@blueprintjs/core";
import { history } from "umi";

const NotFound = () => {
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
      <NonIdealState icon="backlink" title="抱歉, 未找到您要访问的页面">
        <Button icon="undo" onClick={() => {
          history.push('/')
        }}>返回</Button>
      </NonIdealState>
    </div>
  );
};

export default NotFound;
