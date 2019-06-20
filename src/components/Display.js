import React, { Component } from 'react';

class Display extends Component {
  render() {
    return (
      <div>
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
      </div>
    );
  }
}

export default Display;
