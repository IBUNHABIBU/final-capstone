import { React } from 'react';

const UpdatedComponent = (OriginalComponent) => {
  class NewComponent extends React.Component {
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
      const {count, incrementCount} = this.state;
      return (
        <OriginalComponent
          count={count}
          eventHandler={incrementCount}
        />
      );
    }
  }
  return NewComponent;
};

export default UpdatedComponent;
