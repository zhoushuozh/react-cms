import React from 'react';
import { Card, Switch, Spin, Icon, Alert } from 'antd';

export default class Loadings extends React.Component{
  state = {
    loading: false
  }

  changeLoading = value => {
    this.setState({
      loading: value
    })
  }

  render() {
    const loadingIcon = (<Icon type="loading" style={{ fontSize: 24 }} />)
    return (<div>
      <Card title="Basic" bordered={false}>
        <Spin size="small" style={{margin: '0 10px 10px 0'}} />
        <Spin style={{margin: '0 10px 10px 0'}} />
        <Spin size="large" style={{margin: '0 10px 10px 0'}} />
        <Spin indicator={loadingIcon} style={{margin: '0 10px 10px 0'}} />
      </Card>
      <Card title="Block" bordered={false}>
        <div style={{ marginBottom: 20 }}>
          loading state: <Switch checked={this.state.loading} onChange={this.changeLoading} />
        </div>
        <Spin
          spinning={this.state.loading}
          delay={500}
          tip="loading..."
          indicator={loadingIcon}>
          <Alert 
            message="Alert message title"
            description="Further details about the context of this alert."
            type="info"
          />
        </Spin>
      </Card>
    </div>)
  }
}