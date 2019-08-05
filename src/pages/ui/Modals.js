import React from 'react';
import { Button, Card, Modal } from 'antd';
import './index.less';

export default class Modals extends React.Component {
  state = {
    basicVisible: false,
    customizeFooterVisible: false,
    okBtnloading: false,
    asyncLogicVisible: false,
    customizePositionVisible: false
  };

  showModal = key => {
    console.log(key)
    this.setState({
      [key]: true,
    });
  };

  handleOk = key => {
    if (key === 'customizeFooterVisible' || key === 'asyncLogicVisible'){
      this.setState({
        okBtnloading: true,
      });
      setTimeout(()=> {
        this.setState({
          [key]: false,
          okBtnloading: false
        });
      }, 3000)
      return;
    }
    this.setState({
      [key]: false,
    });
  };

  handleCancel = key => {
    this.setState({
      [key]: false,
    });
  };

  showConfirm = () => {
    Modal.confirm({
      title: '是否确认xxx?',
      content: 'balabala...',
      onOk() {
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      },
    })
  }

  showDeleteConfirm = () => {
    Modal.confirm({
      title: '是否删除当前信息？',
      content: 'balabala...',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      }
    })
  }
  onInfo = () => {
    Modal.info({
      title: '这是一条提示信息',
      content: (
        <div>
          <p>balabala...</p>
          <p>balabala...</p>
        </div>
      ),
      onOk() {
        console.log('info')
      },
    });
  }

  onSuccess = () => {
    Modal.success({
      title: '这是一条成功信息',
      content: 'balabala...'
    })
  }

  onWarning = () => {
    Modal.warning({
      title: '这是一条警告信息',
      content: 'balabala...'
    })
  }

  onError = () => {
    Modal.error({
      title: '这是一条错误信息',
      content: 'balabala...'
    })
  }

  render() {
    return (<div>
      <Card title="Basic" bordered={false}>
        <div className="btn-container">
          <Button type="primary" onClick={() => { this.showModal('basicVisible') }}>Basic Modal</Button>
          <Button type="primary" onClick={() => { this.showModal('asyncLogicVisible') }}>Open Modal with async logic</Button>
          <Button type="primary" onClick={() => { this.showModal('customizeFooterVisible') }}>Open Modal with customized footer</Button>
          <Button type="primary" onClick={() => { this.showModal('customizePositionVisible') }}>Display a modal dialog at 20px to Top</Button>
          <Button type="primary" onClick={() => { this.showModal('centeredVisible') }}>Vertically centered modal dialog</Button>
        </div>
        <Modal
          title="Basic Modal"
          visible={this.state.basicVisible}
          onOk={() => this.handleOk('basicVisible')}
          onCancel={() => { this.handleCancel('basicVisible')}}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
        <Modal
          title="Customize Footer Modal"
          visible={this.state.customizeFooterVisible}
          onOk={() => this.handleOk('customizeFooterVisible')}
          onCancel={() => { this.handleCancel('customizeFooterVisible') }}
          footer={[
            <Button key="back" onClick={() => {this.handleCancel('customizeFooterVisible')}}>
              Return
            </Button>,
            <Button key="submit" type="primary" loading={this.state.okBtnloading} onClick={() => {this.handleOk('customizeFooterVisible')}}>
              Submit
            </Button>,
          ]}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
        <Modal
          title="Async Logic Modal"
          visible={this.state.asyncLogicVisible}
          onOk={() => this.handleOk('asyncLogicVisible')}
          onCancel={() => { this.handleCancel('asyncLogicVisible') }}
          confirmLoading={this.state.okBtnloading}
          cancelButtonProps={{ disabled: true }}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
        <Modal
          title="Customize Position Modal"
          style={{top: '20px'}}
          visible={this.state.customizePositionVisible}
          onOk={() => this.handleOk('customizePositionVisible')}
          onCancel={() => { this.handleCancel('customizePositionVisible') }}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
        <Modal
          title="Centered Modal"
          centered
          visible={this.state.centeredVisible}
          onOk={() => this.handleOk('centeredVisible')}
          onCancel={() => { this.handleCancel('centeredVisible') }}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </Card>
      <Card title="确认对话框" bordered={false}>
        <div className="btn-container">
          <Button type="primary" onClick={this.showConfirm}>confirm</Button>
          <Button type="danger" onClick={this.showDeleteConfirm}>delete</Button>
        </div>
      </Card>
        <Card title="消息提示框" bordered={false}>
          <div className="btn-container">
            <Button onClick={this.onInfo}>Info</Button>
            <Button onClick={this.onSuccess}>Seccess</Button>
            <Button onClick={this.onError}>Error</Button>
            <Button onClick={this.onWarning}>Warning</Button>
          </div>
        </Card>
    </div>)
  }
}