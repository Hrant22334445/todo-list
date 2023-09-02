import { Component } from 'react';

import './header.css';

class Header extends Component {
  
  render() {

    const { done, important } = this.props;
    return (
             <div className='header'><span>
               <h1>My Todo List

                <span className='header-info'>
                  <span className='header-done'>Done: {done}</span>
                  <span className='header-done'>Component: {important}</span>
                </span>
               </h1>
             </span>
              
             </div>
            
           )
  }
}

// const Header = () => {
//     return (
//       <div className='header'><span>
//         <h1>My Todo List</h1><p>Done:12 Important:34</p>
//       </span>
        
//       </div>
      
//     )
//   }

  export default Header;