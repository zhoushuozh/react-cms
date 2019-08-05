import React from 'react';
import { Card, Row, Col, Button, notification, Icon, Select } from 'antd';
import './index.less'

export default class Notifications extends React.Component{
  openNotification = (option={}, type='open') => {
    let config = {
      message: '这是一条通知信息',
      description:
        'balabalabalabala... balabalabalabala... balabalabalabala... balabalabalabala... balabalabalabala...',
      onClick: () => {
        console.log('Notification Clicked!');
      }
    }
    Object.assign(config, option)
    notification[type](Object.assign(config, option))
  }

  updateNotification = (key) => {
    this.openNotification({key});
    setTimeout(() => {
      notification.open({
        key,
        message: '更新标题',
        description: '更新内容...',
      });
    }, 1500);
  }

  render() {
    const key = `open${Date.now()}`;
    const btn = (
      <Button type="primary" size="small" onClick={() => notification.close(key)}>
        Confirm
      </Button>
    )
    const icon = (<Icon type="smile" style={{ color: '#108ee9' }} />)

    const { Option } = Select;
    const options = ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'];

    return (<div>
      <Row gutter={24}>
        <Col span={10}>
          <Card title="基本" bordered={false}>
            <Button type="primary" onClick={this.openNotification}>
              Open the notification box
            </Button>
          </Card>
        </Col>
        <Col span={10}>
          <Card title="不会消失的" bordered={false}>
            <Button type="primary" onClick={() => { this.openNotification({ duration: 0}) }}>
              Open the notification box
            </Button>
          </Card>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={10}>
          <Card title="带图标的" bordered={false}>
            <div className="btn-container">
              <Button onClick={() => { this.openNotification({}, 'success') }}>Success</Button>
              <Button onClick={() => { this.openNotification({}, 'info') }}>Info</Button>
              <Button onClick={() => { this.openNotification({}, 'warning') }}>Warning</Button>
              <Button onClick={() => { this.openNotification({}, 'error') }}>Error</Button>
            </div>
          </Card>
        </Col>
        <Col span={10}>
          <Card title="自定义按钮" bordered={false}>
            <Button type="primary" onClick={() => { this.openNotification({ btn, key }) }}>
              Open the notification box
            </Button>
          </Card>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={10}>
          <Card title="自定义图标" bordered={false}>
            <Button type="primary" onClick={() => { this.openNotification({ icon }) }}>Open the notification box</Button>
          </Card>
        </Col>
        <Col span={10}>
          <Card title="自定义样式" bordered={false}>
            <Button type="primary" onClick={() => { this.openNotification({ style: {width: 600,marginLeft: 335 - 600} }) }}>
              Open the notification box
            </Button>
          </Card>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={10}>
          <Card title="自定义位置" bordered={false}>
            <Select
              defaultValue="topRight"
              style={{ width: 120, marginRight: 10 }}
              onChange={val => {
                notification.config({
                  placement: val,
                });
              }}
              >
              {options.map(val => (
                <Option key={val} value={val}>
                  {val}
                </Option>
              ))}
            </Select>
            <Button type="primary" onClick={ this.openNotification }>Open the notification box</Button>
          </Card>
        </Col>
        <Col span={10}>
          <Card title="更新内容" bordered={false}>
            <Button type="primary" onClick={() => { this.updateNotification(key) }}>
              Open the notification box
            </Button>
          </Card>
        </Col>
      </Row>
    </div>)
  }
}