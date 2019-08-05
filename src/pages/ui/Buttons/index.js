import React from 'react';
import { Button, Card, Radio, Dropdown, Menu, Icon } from 'antd';
import './index.less'

export default class Buttons extends React.Component{
  state = {
    btnSize: 'default',
    btnLoading: false
  }

  handleChangeSize(e){
    this.setState({
      btnSize: e.target.value
    })
  }
  handleEnterLoading(){
    this.setState({
      btnLoading: true
    })
    setTimeout(()=> {
      this.setState({
        btnLoading: false
      })
    }, 3000)
  }
  handleMenuClick(e) {
    console.log('click', e);
  }

  render() {
    const { btnSize, btnLoading } = this.state;
    const menu = (
      <Menu onClick={this.handleMenuClick}>
        <Menu.Item key="1">1st item</Menu.Item>
        <Menu.Item key="2">2nd item</Menu.Item>
        <Menu.Item key="3">3rd item</Menu.Item>
      </Menu>
    )

    return(<div className="buttonPage">
        <Button type="primary">Primary</Button>
      <Card className="card" title="Basic" bordered={false}>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="danger">Danger</Button>
        <Button type="link">Link</Button>
        <Button shape="circle" icon="search"></Button>
        <Button icon="search">search</Button>
        <Button disabled>disabled</Button>
      </Card>
      <Card className="card" title="Group" bordered={false}>
        <Button.Group>
          <Button type="primary" icon="left">Prev</Button>
          <Button type="primary" icon="right">Next</Button>
        </Button.Group>
        <Button.Group>
          <Button>L</Button>
          <Button>M</Button>
          <Button>R</Button>
        </Button.Group>
      </Card>
      <Card className="card" title="Size" bordered={false}>
        <div>
          <Radio.Group value={this.state.btnSize} onChange={this.handleChangeSize.bind(this)}>
            <Radio.Button value="large">Large</Radio.Button>
            <Radio.Button value="default">Default</Radio.Button>
            <Radio.Button value="small">Small</Radio.Button>
          </Radio.Group>
        </div>
        <div>
          <Button type="primary" size={btnSize}>Button</Button>
          <Button shape="circle" icon="search" size={btnSize}></Button>
          <Button icon="search" size={btnSize}>search</Button>
          <Button type="link" size={btnSize}>Link</Button>
        </div>
      </Card>
      <Card className="card" title="Loading" bordered={false}>
        <Button type="primary" loading>Loading</Button>
        <Button loading={btnLoading} onClick={this.handleEnterLoading.bind(this)}>Click me</Button>
      </Card>
      <Card className="card" title="Loading" bordered={false}>
        <Dropdown overlay={menu}>
          <Button>
            Actions <Icon type="down" />
          </Button>
        </Dropdown>
      </Card>
    </div>)
  }
}