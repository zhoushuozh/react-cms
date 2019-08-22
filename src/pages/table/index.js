import React from 'react';
import { Table, Tag, Divider, Input, Button, message, Modal, Popconfirm } from 'antd'
import axios from 'axios'

const { Search } = Input;
const { confirm } = Modal;

export default class Tables extends React.Component{

  state = {
    tableData: [],
    selectedRowKeys: [],
    selectedRows: [],
    tableLoading: false,
    showSelect: false,
    total: 0,
    page: 1,
    pageSize: 10
  }

  componentWillMount(){
    this.getData()
  }

  onSearch = () => {
    this.setState({
      total: 0,
      page: 1
    });
    this.getData()
  }

  getData = () => {
    this.setState({ tableLoading: true })
    axios.post('/table', {
      page: this.state.page,
      row: this.state.pageSize
    })
      .then(res => {
        this.setState({ tableLoading: false })
        if (res.data.code === 1) {
          this.setState({
            tableData: res.data.data.list,
            total: res.data.data.totalRow
          })
        } else {
          message.error(res.data.description)
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  handleRowSelectionChange = () => {
    this.setState(state => ({
      showSelect: !state.showSelect
    }))
  };

  handleDelItem = (record) => {
    let index = this.state.tableData.findIndex((row) => {return row.id === record})
    console.log(index)
    let tableData = [...this.state.tableData]
    tableData.splice(index-1, 1)
    this.setState({
      tableData: tableData
    })
  }
  
  rowSelectedChange = (selectedRowKeys, selectedRows) => {
    // console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    this.setState({ selectedRowKeys })
  }

  handleBatchDel = () => {
    if (!this.state.selectedRowKeys.length) return
    let _this = this
    confirm({
      title: '是否要批量删除这些数据',
      content: '此操作不可逆',
      okText: '删除',
      okType: 'danger',
      cancelText: '算了',
      onOk() {
        _this.setState({ tableLoading: true })
        let tableData = []
        _this.state.tableData.forEach(row => {
          let isSelected = _this.state.selectedRowKeys.some(key => {
            return row.id === key
          })
          if (!isSelected) tableData.push(row)
        })
        _this.setState({
          tableData: tableData,
          tableLoading: false,
          selectedRowKeys: []
        })
      }
    });
  }

  handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  };

  pageChange = (page, pageSize) => {
    this.setState({
      page: page,
      pageSize: pageSize
    })
    this.getData()
  }

  pageSizeChange = (current, size) => {
    this.setState({
      page: current,
      pageSize: size
    })
    this.getData()
  }

  render() {
    let {
      tableData,
      selectedRowKeys,
      showSelect,
      tableLoading,
      total,
      pageSize
    } = this.state

    let rowSelection = showSelect ? {
      selectedRowKeys,
      onChange: this.rowSelectedChange
    } : undefined
    
    const columns = [
      {
        title: 'ID',
        dataIndex: 'id',
        key: 'id'
      },
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: 'Gender',
        dataIndex: 'gender',
        key: 'gender',
        render: text => <span>{text === 1 ? '男' : text === 2 ? '女' : ''}</span>,
        filters: [{ text: '男', value: 1 }, { text: '女', value: 2 }],
        onFilter: (value, record) => record.gender === value
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        sorter: (a, b) => a.age - b.age
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
          <Button type="link">编辑</Button>
          <Divider type="vertical" />
          <Popconfirm placement="left" title="是否删除此条数据?" onConfirm={() => this.handleDelItem(record)} okText="是" cancelText="否">
            <Button type="link">删除</Button>
          </Popconfirm>
        </span>)
      }
    ]

    const pagination = total ? {
      total: total,
      pageSize: pageSize,
      pageSizeOptions: ['10', '20', '30'],
      onChange: this.pageChange,
      onShowSizeChange: this.pageSizeChange,
      showSizeChanger: true,
      showQuickJumper: true
    } : false
    
    return (<div>
      <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: 10
        }}>
        <Search
          placeholder="input search text"
          onSearch={this.onSearch}
          enterButton
          style={{ width: 200 }}
        />
        <div>
          {
            rowSelection ? 
            (<Button
              type="danger"
                disabled={!selectedRowKeys.length}
                onClick={this.handleBatchDel}
              style={{margin: '0 10px'}}>批量删除</Button>)
            : false
          }
          <Button onClick={ this.handleRowSelectionChange }>{rowSelection ? '取消批量操作' : '批量操作' }</Button>
        </div>
      </div>
      <Table
        loading={tableLoading}
        rowSelection={rowSelection}
        rowKey={record => record.id}
        columns={columns}
        dataSource={tableData}
        pagination={pagination}
    >
      </Table>
    </div>)
  }
}