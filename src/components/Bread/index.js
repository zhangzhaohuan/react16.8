import React from 'react';
import Child from './child';
const json = {
  path: '/',
  component: '../layouts/SecurityLayout',
  routes: [
    { "path": "/home", "name": "home", "icon": "icon-book", "breadcrumb": "首页","breadcrumbDisabled":'false',"breadcrumbpath":'/home/courseList', "routes": [{ "path": "/home/courseList", "name": "courseList", "breadcrumb": "课程列表", "exact": true }, { "path": "/home/courseList-aiLessonList", "name": "aiLessonList", "breadcrumb": "ai课程列表", "hideInMenu": true, "icon": "", "exact": true }, { "path": "/home/courseList-logger", "name": "logger", "breadcrumb": "日志列表", "hideInMenu": true, "icon": "", "exact": true }, {}] }, { "path": "/setting", "name": "setting", "icon": "setting", "breadcrumb": "设置", "developer": true, "routes": [{ "path": "/setting/sub-page", "name": "sub_page", "breadcrumb": "设置", "developer": true, "exact": true }, { "path": "/setting/endStudyQuestion", "name": "endStudyQuestion", "breadcrumb": "设置", "developer": true, "exact": true }, { "path": "/setting/sub-page-detail", "hideInMenu": true, "name": "sub_page_detail", "breadcrumb": "设置", "exact": true }, { "path": "/setting/sub-page-theme", "hideInMenu": true, "breadcrumb": "设置", "exact": true }, {}] }, { "path": "/lessionManager", "name": "lessionManager", "hideInMenu": true, "ignoreBreadCrumb": true, "icon": "pie-chart", "routes": [{ "path": "/lessionManager/index", "hideInMenu": true, "ignoreBreadCrumb": true, "name": "lessionManager_index", "exact": true }, {}] }, { "ignoreBreadCrumb": true, "exact": true }, {}]
};
const pathname = "/404";
console.log(json.routes);

const A = () => {
  return <Child routes={json.routes} pathname={pathname} />
}
export default A