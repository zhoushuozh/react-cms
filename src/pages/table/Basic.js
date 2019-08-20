import React from 'react';
import { Table, Tag, Divider, message } from 'antd'
import axios from 'axios'

export default class BasicTable extends React.Component{
  state = {
    tableData: []
  }

  componentWillMount(){
    this.getData()
  }

  getData = () => {
    axios.post('/table', {
      page: 1,
      row: 10
    })
      .then(res => {
        if (res.data.code === 1) {
          this.setState({
            tableData: res.data.data.list
          })
        } else {
          message.error(res.data.description)
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    const columns = [
      {
        title: 'ID',
        dataIndex: 'id',
        key: 'id'
      },
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <a href="#">{text}</a>
      },
      {
        title: 'Gender',
        dataIndex: 'gender',
        key: 'gender',
        render: text => <span>{text ? 1 : '男' ? 2 : '女'}</span>
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
      },
      {
        title: 'Tag',
        dataIndex: 'tag',
        key: 'tag',
        render: tages => (<span>
          {tages.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') color = 'volcano'
            return (<Tag key={tag} color={color}>{tag.toUpperCase()}</Tag>)
          })}
        </span>)
      },
      {
        title: 'Action',
        dataIndex: 'action',
        key: 'action',
        render: (text, record) => (<span>
          <a href="#">Invite {record.name}</a>
          <Divider type="vertical" />
          <a href="#">Delete</a>
        </span>)
      }
    ]
    let { tableData } = this.state
    return (<div>
      <Table columns={columns} dataSource={tableData}></Table>
    </div>)
  }
}