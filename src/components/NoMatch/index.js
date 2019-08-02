import React from 'react';

export default class NoMatch extends React.Component{
  render() {
    return(<div>
      <div style={{
        fontSize: '36px',
        fontWeight: 'bold',
        textAlign: 'center',
        padding: '200px 0'
      }}>404 Not Found!</div>
    </div>)
  }
}