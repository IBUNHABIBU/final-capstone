import React, { Component } from 'react';

export default class Hover extends Component {

 render() {
   const { count, incrementCount } = this.props.;
   return (
     <div>
       <h2 onMouseOver={incrementCount} onFocus={incrementCount}>
         Increment
         {count}
         {' '}
         times
       </h2>
     </div>
   );
 }
}
