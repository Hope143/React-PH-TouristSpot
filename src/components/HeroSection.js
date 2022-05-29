import React from 'react'
import './HeroSection.css';
import {Link} from 'react-router-dom';
import beach from './video/beach.mp4'

function HeroSection() {
     return (
          <section className='herosection-container'>
               <video src={beach} autoPlay loop muted/>
               <div className='header-info'>
                    <h1> WELCOME TO THE 7641 ISLANDS <br/> OF THE PHILIPPINES</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, illo?</p>
                    <div className='button-link'>
                         <Link to='/signup' className="explore-button">
                         EXPLORE NOW
                         </Link>
                         <Link to='/places' className="discover-button">
                              DISCOVER
                         </Link>
                    </div>
               </div>
          </section>
     )
}

export default HeroSection
