import React from 'react';
import { Carousel, Divider, Radio } from 'antd';
import './index.less';

export default class Carousels extends React.Component {
  state = {
    dotPosition: 'top',
    autoplay: false
  };

  handlePositionChange = ({ target: { value: dotPosition } }) => this.setState({ dotPosition })

  onChange = (a, b, c) => {
    console.log(a, b, c);
  }
  render () {
    return (<div>
      <Divider orientation="left">基础</Divider>
      <Carousel afterChange={this.onChange}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
      </Carousel>
      <Divider orientation="left">位置</Divider>
      <Radio.Group
        onChange={this.handlePositionChange}
        value={this.state.dotPosition}
        style={{ marginBottom: 8 }}
      >
        <Radio.Button value="top">Top</Radio.Button>
        <Radio.Button value="bottom">Bottom</Radio.Button>
        <Radio.Button value="left">Left</Radio.Button>
        <Radio.Button value="right">Right</Radio.Button>
      </Radio.Group>
      <Carousel dotPosition={this.state.dotPosition}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
      </Carousel>
      <Divider orientation="left">自动切换</Divider>
      <Carousel autoplay>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
      </Carousel>
      <Divider orientation="left">渐显</Divider>
      <Carousel effect="fade">
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
      </Carousel>
    </div>)
  }
}