import { React } from 'react';
const UpdatedComponent = (OriginalComponent) => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0,
      }
    }
    
    incrementCount
    render() {
      return <OriginalComponent />
    }
  }
  return NewComponent;
}