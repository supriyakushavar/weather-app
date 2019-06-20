import React, { Component } from 'react';

class Weather extends Component {
  render() {
    return (
      <form onSubmit={this.props.getWeather}>
        <input
          style={inputStyle}
          type="text"
          name="city"
          placeholder="Please enter city..."
        />
        <input
          style={inputStyle}
          type="text"
          name="country"
          placeholder="Please enter country..."
        />
        <br></br>
        <button style={btnStyle}>Get Weather</button>
      </form>
    );
  }
}

const btnStyle = {
  padding: '20px',
  backgroundColor: 'rgb(125, 148, 37)',
  fontWeight: 'bold',
  fontSize: '18px',
  margin: '20px auto'
};

const inputStyle = {
  padding: '15px',
  borderRadius: '10px',
  border: '2px solid #000',
  margin: '0 10px'
};

export default Weather;
