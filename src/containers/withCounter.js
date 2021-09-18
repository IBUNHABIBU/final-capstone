/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';

const UpdatedComponent = (OriginalComponent) => {
  class NewComponent extends Component {
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
        <OriginalComponent
          count={count}
          eventHandler={this.incrementCount}
          {...this.props}
        />
      );
    }
  }
  return NewComponent;
};

export default UpdatedComponent;
