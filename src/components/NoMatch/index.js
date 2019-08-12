import React from 'react';
import { Result, Button } from 'antd';
import { NavLink } from 'react-router-dom';

export default class NoMatch extends React.Component{
  render() {
    return(<div>
      {/* <div style={{
        fontSize: '36px',
        fontWeight: 'bold',
        textAlign: 'center',
        padding: '200px 0'
      }}>404 Not Found</div> */}
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<NavLink to="/admin/home"><Button type="primary">Back Home</Button></NavLink>}
      />
    </div>)
  }
}