import React from 'react';
import Titles from './components/Titles';
import Weather from './components/Weather';
import Display from './components/Display';
// import uuid from 'uuid';
import './App.css';

const API_key = '93249116bd279e94d181d260fe4dcb7e';

class App extends React.Component {
  state = {
    temperature: undefined,
    humidity: undefined,
    description: undefined,
    city: undefined,
    country: undefined,
    error: ''
    // id:uuid.v4()
  };
  getWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const result = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_key}&units=metric`
    );
    const data = await result.json();
    console.log(data);
    if (city && country) {
      this.setState({
        temperature: data.main.temp,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        city: data.name,
        country: data.sys.country,
        error: ''
      });
    } else {
      this.setState({
        temperature: undefined,
        humidity: undefined,
        description: undefined,
        city: undefined,
        country: undefined,
        error: 'Please Enter the Values'
      });
    }
  };
  render() {
    return (
      <div className="App">
        <Titles />
        <Weather getWeather={this.getWeather} />
        <Display
          temperature={this.state.temperature}
          description={this.state.description}
          humidity={this.state.humidity}
          city={this.state.city}
          country={this.state.country}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
