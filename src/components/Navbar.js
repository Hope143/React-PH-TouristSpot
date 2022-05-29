import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../components/Navbar.css';

const Navbar = () => {

     const [click, setClick] = useState(false);

     const clickHandler = () => {
          setClick(!click);
     }

     const closeWindow = () => {
          setClick(false);
     }

     return (
          <nav>
               <section className='navbar-section'>
                    <div className='navbar-logo'>
                         <Link to='/' className='logo-link' onClick={closeWindow}>
                              LAKBAY <i class="fas fa-map-marked-alt" />
                         </Link>
                    </div>
                    <div className='times-bars' onClick={clickHandler} >
                         <i className={click ? `fas fa-times` : `fas fa-bars`} />
                    </div>
                    <ul className={click ? 'nav-menu-active' : 'nav-menu'}>
                         <li className="nav-item" >
                              <Link to='/' className='nav-link' onClick={closeWindow}>
                                   Home
                              </Link>
                         </li>
                         <li className="nav-item">
                              <Link to='/places' className='nav-link' onClick={closeWindow}>
                                   Places
                              </Link>
                         </li>
                         <li className="nav-item">
                              <Link to='/services' className='nav-link' onClick={closeWindow}>
                                   Services
                              </Link>
                         </li>
                         <li className="nav-item-signup">
                              <Link to='/signup' className='nav-link-signup' onClick={closeWindow}>
                                   Sign Up
                              </Link>
                         </li>
                    </ul>
               </section>
          </nav>
     )
}

export default Navbar
