import { Component } from 'react';

import './add.css';

class Add extends Component {

  render() {
    return (
    <div className='add'>
       <input type='text' placeholder='Type to add...' />
       <button>Add item</button>
       </div>
    )
  }
}

// const Add = () => {
//     return <div className='add'>
//       <input type='text' placeholder='Type to add...' />
//       <button>Add item</button>
//       </div>
//   }

  export default Add;
