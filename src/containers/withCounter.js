import { React } from 'react';
import UpdatedComponent from './HoverCounter';
const UpdatedComponent = (OriginalComponent) => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0,
      }
    }
    
    incrementCount = () => {
      this.setState(prevState => {
        return { count: prevState.count + 1 }
      })
    }
    render() {
      return <OriginalComponent 
      count ={this.state.count}
      eventHandler={this.incrementCount}/>
    }
  }
  return NewComponent;
}

export default UpdatedComponent;