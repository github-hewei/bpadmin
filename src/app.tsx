import { defineApp, matchRoutes, getDvaApp } from "umi";
import { BreadcrumbProps } from "@blueprintjs/core";

export default defineApp({
  /**
   * 监听路由跳转
   */
  onRouteChange: ({ location, routes, clientRoutes, action, isFirst }) => {
    let breadcrumbs: BreadcrumbProps[] = [];
    let $routes = matchRoutes(clientRoutes, location.pathname);

    $routes?.forEach((item, index) => {
      if (index === 0) return;

      let title: string = item.pathname;

      for (const key in routes) {
        if (routes[key].path === title) {
          title = routes[key].title;
          break;
        }
      }

      let disabled = item.route?.children && item.route?.children.length > 0;

      let breadcrumb: BreadcrumbProps = {
        href: !disabled ? item.pathname : undefined,
        text: title,
        disabled,
      };

      breadcrumbs.push(breadcrumb);
    });

    /**
     * 调用dva的dispatch方法更新model中的数据
     */
    getDvaApp()._store.dispatch({
      type: "breadcrumbs/setBreadcrumbs",
      payload: breadcrumbs,
    });
  },
});
