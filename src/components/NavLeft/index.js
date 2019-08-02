import React from 'react';
import { Menu } from 'antd';
import MenuConfig from './../../config/menuConfig'
import { NavLink } from 'react-router-dom';

const { SubMenu } = Menu;

export default class NavLeft extends React.Component {
  rootSubmenuKeys = [];

  state = {
    openKeys: [],
  };

  componentWillMount() {
    const menuTreeNode = this.renderMenu(MenuConfig);
    this.setState({
      menuTreeNode
    })
  }

  // 菜单渲染
  renderMenu = (data) => {
    return data.map(item => {
      if (item.children) {
        return (<SubMenu title={item.title} key={item.key}>
          {this.renderMenu(item.children)}
        </SubMenu>)
      }

      return (<Menu.Item key={item.key}>
        <NavLink to={item.key}><span>{item.title}</span></NavLink>
      </Menu.Item>)
    })
  }

  onOpenChange = openKeys => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  };

  render() {
    return (
      <Menu
        mode="inline"
        openKeys={this.state.openKeys}
        onOpenChange={this.onOpenChange}
        defaultSelectedKeys={['/admin']}
        style={{
          height: '100%'
        }}
        >
        {this.state.menuTreeNode}
      </Menu>
    )
  }
}