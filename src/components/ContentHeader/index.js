import React from 'react';
import BreadCrumb from '../BreadCrumb';
import Weather from '../Weather';

export default class ContentHeader extends React.Component {
  render() {
    return (<div style={{
      padding: '24px 24px 0',
      display: 'flex',
      justifyContent: 'space-between'
    }}>
      <BreadCrumb />
      <Weather />
    </div>)
  }
}