import React from 'react';
import { Card, Button, message} from 'antd';
import './index.less';

export default class Messages extends React.Component {
  onMessage = (type = 'info', delay = 3) => {
    message[type](`this is a ${type} message`, delay)
  }

  promiseMessage = () => {
    message.loading('正在加载...', 2.5)
      .then(() => message.info('加载即将完成', 2.5))
      .then(() => message.success('加载成功！', 2.5))
  }
  loadingMessage = () => {
    const hide = message.loading('手动异步移除', 0)
    setTimeout(hide, 2500);
  }

  render() {
    return (<div>
      <Card title="全局Message" bordered={false}>
        <div className="btn-container">
          <Button type="primary" onClick={() => this.onMessage()}>Basic</Button>
          <Button onClick={() => this.onMessage('success') }>Success</Button>
          <Button onClick={() => this.onMessage('error')}>Error</Button>
          <Button onClick={() => this.onMessage('warning') }>Warning</Button>
          <Button onClick={() => this.onMessage('success', 10)}>Delay</Button>
          <Button onClick={ this.promiseMessage }>Promise</Button>
          <Button onClick={ this.loadingMessage }>Loading</Button>
        </div>
      </Card>
    </div>)
  }
}