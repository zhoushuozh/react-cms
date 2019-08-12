import React from 'react';
import { Tabs, Icon, Button } from 'antd';
import './index.less';

const { TabPane } = Tabs;

export default class TabsPage extends React.Component {
  constructor(props) {
    super(props);
    this.newTabIndex = 0;
    const panes = [
      { title: <span><Icon type='home' />Tab 1</span>, content: 'Content of Tab 1', key: '1', closable: false },
      { title: 'Tab 2', content: 'Content of Tab 2', key: '2', closable: false, disabled: true },
      { title: 'Tab 3', content: 'Content of Tab 3',key: '3'},
    ];
    this.state = {
      activeKey: panes[0].key,
      panes,
    };
  }
  onChange = activeKey => {
    this.setState({ activeKey })
  }

  onEdit = (targetKey, action) => {
    this[action](targetKey)
  }

  add = () => {
    const { panes } = this.state
    const activeKey = `newTab${this.newTabIndex++}`
    panes.push({
      title: 'new Tab',
      content: 'Content of new Tab',
      key: activeKey
    })
    this.setState({ panes, activeKey })
  }

  remove = targetKey => {
    let { activeKey } = this.state
    let lastIndex
    this.state.panes.forEach((pane, i) => {
      if (targetKey === pane.key) {
        lastIndex = i - 1
      }
    })
    const panes = this.state.panes.filter(pane => pane.key !== targetKey)
    if (panes.length && activeKey === targetKey) {
      if (lastIndex >= 0) {
        activeKey = lastIndex
      } else {
        activeKey = panes[0].key
      }
    }
    this.setState({panes, activeKey})
  }

  render() {
    return (<div>
      <Tabs
        className="tab-pane-container"
        defaultActiveKey={this.state.activeKey}
        hideAdd
        tabBarExtraContent={<Button onClick={this.add}>ADD</Button>}
        onChange={this.onChange}
        onEdit={this.onEdit}
        type="editable-card"
      >
        {this.state.panes.map(pane => (
          <TabPane className="tab-pane" tab={pane.title} key={pane.key} closable={pane.closable} disabled={pane.disabled}>
            {pane.content}
          </TabPane>
        ))}
      </Tabs>
    </div>)
  }
}