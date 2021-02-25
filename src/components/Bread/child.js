import React from 'react';

import { matchPath } from 'react-router'
import {Link} from 'react-router-dom'


const aa = ({routes,pathname}) => {
  const toflattenRoutes = arr =>
    arr.reduce(function (prev, item) {
      (!item.ignoreBreadCrumb)&&(item.path) && prev.push(item);
      if (Array.isArray(item.routes)) {
        return prev.concat(toflattenRoutes(item.routes))
      } else {
        if ((!item.ignoreBreadCrumb)&&(item.path)) { prev.concat(item) };
        return prev;
      }
    }, []);
  const flattenRoutes = toflattenRoutes(routes);
 

  console.log(flattenRoutes);

  const render = ({ content, path,breadcrumbdisabled,breadcrumbpath}) => {
    const componentProps = { path,breadcrumbdisabled,breadcrumbpath };
    if (typeof content === 'function') {
      return <content {...componentProps} />;
    }
    return <span {...componentProps}>{content}</span>;
  };


  const getBreadcrumb = ({ flattenRoutes, curSection, pathSection }) => {
    const matchRoute = flattenRoutes.find(ele => {
      const { breadcrumb, path } = ele;
      if (!breadcrumb || !path) {
        throw new Error(
          'Router中的每一个route必须包含 `path` 以及 `breadcrumb` 属性'
        );
      }
      // 查找是否有匹配
      // exact 为 react router4 的属性，用于精确匹配路由
      return matchPath(pathSection, { path, exact: true });
    });
    console.log(matchRoute);

    // 返回breadcrumb的值，没有就返回原匹配子路径名
    if (matchRoute) {
      return render({
        content: matchRoute.breadcrumb || curSection,
        path: matchRoute.path,
        breadcrumbdisabled:matchRoute.breadcrumbDisabled,
        breadcrumbpath:matchRoute.breadcrumbpath
      });
    }
    // 对于routes表中不存在的路径
    // 根目录默认名称为首页.
    return render({
      content: pathSection === '/' ? '首页' : curSection,
      path: pathSection,
      breadcrumbdisabled:"true",
      breadcrumbpath:void 0
    });
  };

  const getBreadcrumbs = ({ flattenRoutes, pathname }) => {
    // 初始化匹配数组match
    let matches = [];
    pathname.split('/')
      // 对每一部分执行一次调用`getBreadcrumb()`的reduce.
      .reduce((prev, curSection) => {
        console.log(prev);
        console.log(curSection);
        // 将最后一个路由部分与当前部分合并，比如当路径为 `/x/xx/xxx` 时，pathSection分别检查 `/x` `/x/xx` `/x/xx/xxx` 的匹配，并分别生成面包屑
        const pathSection = `${prev}/${curSection}`;
        const breadcrumb = getBreadcrumb({
          flattenRoutes,
          curSection,
          pathSection,
        });
        // 将面包屑导入到matches数组中
        matches.push(breadcrumb);

        // 传递给下一次reduce的路径部分
        return pathSection;
      });
    return matches;
  };

  const breadcrumbs = getBreadcrumbs({flattenRoutes, pathname});
  console.log(breadcrumbs);
  const BreadcrumbsComponent = ({ breadcrumbs }) => (
    <div>
      {breadcrumbs.map((breadcrumb, index) => {
        const disabled = breadcrumb.props.breadcrumbdisabled === "true" || breadcrumbs.length === index + 1;
        const path = breadcrumb.props.breadcrumbpath || breadcrumb.props.path;
        return <span
          className={disabled ?
            'breadcrumb breadcrumbdisabled' : 'breadcrumb'}
          key={breadcrumb.props.path}>
          {disabled ? <span>{breadcrumb}</span> :
            <Link to={path}>{breadcrumb}</Link>}
          {index < breadcrumbs.length - 1 && <i> / </i>}
        </span>
      }
      )}
    </div>
  );
  return (
    <BreadcrumbsComponent breadcrumbs={breadcrumbs} />
  )
}

export default aa