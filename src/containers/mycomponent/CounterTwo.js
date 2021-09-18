import React, { Component } from 'react';

export default class CounterTwo extends Component {
 
 render() {
   const { count, incrementCount } = this.props;
   return (
     <div>
       <button type="submit" onClick={incrementCount}>
         Increment
         {count}
         {' '}
         times
       </button>
     </div>
   );
 }
}
