import React from 'react';
import './index.less';

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="logo">
          <img src="/assets/images/logo.svg" alt="react-icon"/>
          <h1>react-cms</h1>
        </div>
      </div>
    )
  }
}