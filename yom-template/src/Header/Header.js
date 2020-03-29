import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import './Header.css';
class Header extends React.Component {
   render() {
      return (
         <div className="headerWrap">
            <div className="container clearfix">
               <h1 className="float-left logoText">SPGhosh</h1>
               <nav className="navbar navbar-expand float-right">
                  <div className="aboutNav nav-bar">
                     <ul className="navbar-nav">
                        <li className="nav-item nav-link">About Us</li>
                        <li className="nav-item nav-link">Signup</li>
                        <li className="nav-item nav-link">Login</li>
                     </ul>
                  </div>
               </nav>
               
            </div>
            
         </div>
      );
   }
}

export default Header;