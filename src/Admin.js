import React from 'react';
import { Row, Col } from 'antd';

export default class Admin extends React.Component{
  render() {
    return (<div>
      <Row>
        <Col span="3">
          Navigation
        </Col>
        <Col span="21">
          content
        </Col>
      </Row>
    </div>)
  }
}