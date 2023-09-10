import { Breadcrumbs, BreadcrumbProps } from "@blueprintjs/core";
import { connect, Dispatch } from "umi";
import styles from "./style.less";

interface CustomBreadcrumbProps {
  breadcrumbs: BreadcrumbProps[];
  dispatch: Dispatch;
}

/**
 * 面包屑导航组件
 */
const CustomBreadcrumb: React.FC<CustomBreadcrumbProps> = ({
  breadcrumbs,
  dispatch,
}) => {
  return (
    <div className={styles.breadcrumbs}>
      <Breadcrumbs items={breadcrumbs} />
    </div>
  );
};

/**
 * 将组件链接state返回一个新组件
 */
const mapStateToProps = ({
  breadcrumbs,
}: {
  breadcrumbs: { breadcrumbs: BreadcrumbProps[] };
}) => {
  return {
    breadcrumbs: breadcrumbs.breadcrumbs,
  };
};

export default connect(mapStateToProps)(CustomBreadcrumb);
