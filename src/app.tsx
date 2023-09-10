import { defineApp } from "umi";

export default defineApp({
  /**
   * 路由跳转改变
   */
  onRouteChange: ({ location }) => {
    // console.log("onRouteChange", location);
  }
});
