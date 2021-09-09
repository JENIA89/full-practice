import React, { Component } from 'react';

export class ClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      like: 0,
    };
    // this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  // Три способа привязки контекста

  increment() {
    this.setState({ like: (this.state.like += 1) });
  }

  decrement() {
    this.setState({ like: (this.state.like -= 1) });
  }

  render() {
    return (
      <div className='App'>
        <h1>Like: {this.state.like}</h1>
        <button onClick={() => this.increment()}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

export default ClassCounter;
