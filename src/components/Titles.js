import React, { Component } from 'react';

class Titles extends Component {
  render() {
    const titleStyle = {
      color: '#ccc',
      display: 'table',
      borderBottom: '2px solid #000',
      margin: '10px auto'
    };
    return <h1 style={titleStyle}>Weather App</h1>;
  }
}

export default Titles;
