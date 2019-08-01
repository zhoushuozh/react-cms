import React from 'react';
import { Breadcrumb } from 'antd';

export default class BreadCrumb extends React.Component {
  render() {
    return (
      <Breadcrumb>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="/">Application Center</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>An Application</Breadcrumb.Item>
      </Breadcrumb>
    )
  }
}