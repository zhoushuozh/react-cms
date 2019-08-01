import React from 'react';

export default class Footer extends React.Component{
  render() {
    return (<div style={{
      display: 'flex',
      justifyContent: 'center',
      borderTop: '1px solid #eee',
      padding: 24,
      color: '#aaa'
    }}>
      <div className="">copyright &copy; 2019 zhoushuo</div>
    </div>)
  }
}