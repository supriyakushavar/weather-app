import React, { Component } from 'react';

class Titles extends Component {
  render() {
    return <h1 style={titleStyle}>Weather App</h1>;
  }
}
const titleStyle = {
  color: '#000',
  display: 'table',
  margin: '20px auto'
};

export default Titles;
