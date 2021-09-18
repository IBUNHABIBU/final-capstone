import React, { Component } from 'react';

export class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

incrementCount = () => {
  this.setState((prevState) => ({ count: prevState.count + 1 }));
}

render() {
  const { count } = this.state;
  return (
    <div>
      {this.props.render(count, this.incrementCount)}
    </div>
  );
}
}

export default Counter;
