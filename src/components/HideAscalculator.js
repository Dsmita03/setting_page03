 // Calculator.js
import React, { Component } from 'react';
import HiddenApp from './HiddenApp';

class HideAscalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calculatorVisible: true,
    };
  }

  toggleHiddenApp = () => {
    this.setState((prevState) => ({
      calculatorVisible: !prevState.calculatorVisible,
    }));
  };

  render() {
    return (
      <div>
        {this.state.calculatorVisible ? (
          <div>
            {/* Calculator UI */}
            <button onClick={this.toggleHiddenApp}>Toggle App</button>
          </div>
        ) : (
          <HiddenApp onClose={this.toggleHiddenApp} />
        )}
      </div>
    );
  }
}

export default HideAscalculator;
