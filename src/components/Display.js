import React, { Component } from 'react';

class Display extends Component {
  render() {
    return (
      <div className="displayPanel">
        {this.props.city && this.props.country && (
          <p>Temperature : {this.props.temperature}</p>
        )}
        {this.props.city && this.props.country && (
          <p>humidity : {this.props.humidity}</p>
        )}

        {this.props.city && this.props.country && (
          <p>description : {this.props.description}</p>
        )}
        {this.props.city && this.props.country && (
          <p>City : {this.props.city}</p>
        )}
        {this.props.error && <p>{this.props.error}</p>}

        {this.props.temperature > 20 ? <p>Nice Weather</p> : <p>Its Cold</p>}
      </div>
    );
  }
}

export default Display;
