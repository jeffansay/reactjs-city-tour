import React, { Component } from 'react';
import './navbar.scss'
import logo from './logo.svg'

class Navbar extends Component {
    render() {
        return (
           <nav className="navbar">
                 <img src={logo} alt="logo tour" />
                 <ul className="nav-links">
                     <li>
                         <a href="/" className="nav-link">
                             home
                         </a>
                     </li>
                     <li>
                         <a href="/" className="nav-link">
                             about
                         </a>
                     </li>
                     <li>
                         <a href="/" className="nav-link active">
                             tours
                         </a>
                     </li>
                 </ul>
           </nav>
               
        
        );
    }
}

export default Navbar;

