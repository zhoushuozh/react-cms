import React from 'react';
import { Menu, Dropdown, Icon, Avatar } from 'antd';
import './index.less';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '用户名',
      cityName: ''
    };
  }

  render() {
    const menu = (
      <Menu>
        <Menu.Item key="0">
          <a href="/">个人中心</a>
        </Menu.Item>
        <Menu.Item key="1">
          <a href="/">登出</a>
        </Menu.Item>
      </Menu>
    );

    return (
      <div className="header">
        <div className="logo">
          <img src="/assets/images/logo.svg" alt="react-icon"/>
          <h1>react-cms</h1>
        </div>
        <div className="user-info">
          <Dropdown overlay={menu} trigger={['click']}>
            <div className="ant-dropdown-link">
              <Avatar style={{ backgroundColor: '#87d068', marginRight: '10px' }} icon="user" />
              {this.state.userName} <Icon type="down" />
            </div>
          </Dropdown>
        </div>
      </div>
    )
  }
}