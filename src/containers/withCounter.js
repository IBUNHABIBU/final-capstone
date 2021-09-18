/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';

const UpdatedComponent = (OriginalComponent, incrNumber) => {
  class NewComponent extends Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    incrementCount = () => {
      this.setState((prevState) => ({ count: prevState.count + incrNumber }));
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
