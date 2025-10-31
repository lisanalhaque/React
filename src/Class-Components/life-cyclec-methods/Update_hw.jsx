import React, { Component } from 'react';

export default class Update_hw extends Component {

  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  }

  shouldComponentUpdate(nextProps, nextState) {
    // Only update if count changes
    return nextState.count !== this.state.count;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log(`Component updated! New Count: ${this.state.count}`);
    }
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.increment}>+</button>
      </div>
    );
  }
}