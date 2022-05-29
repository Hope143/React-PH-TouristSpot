import React from 'react'
import '../components/Footer.css';
import {Link} from 'react-router-dom';

const Footer = () => {
     return (
          <main>
               <div className="main-wrap">
                    <section className="main-section">
                         <div className="wrap">
                              <h3>Don't Miss Out</h3>
                              <h4>Sign up if you want to experience once in a lifetime adventure</h4>
                              <div className="inputStuff">
                                   <div className="input-email">
                                        <h4>EMAIL ADDRESS*</h4>
                                   <input className="email-info" type="email" placeholder="Enter Your Email Address"/>
                                   </div>
                                   <div className="input-birthday">
                                        <h4>BIRTHDAY*</h4>
                                        
                                   <input className="birthday-info" type="text" placeholder="MM/DD/YYYY"/>
                                   {/* <i class="far fa-calendar-alt"></i> */}
                                   </div>
                              </div>
                              
                                   <Link to='/signup' className="signup-link">
                                   <h4 className="sign-up">SIGN UP</h4>
                                   </Link>
     
                              <h4 className='details-lower'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem similique corporis ipsum magnam libero soluta quod pariatur impedit, facilis repellendus nesciunt voluptates quibusdam laborum, inventore id? Officia atque alias cumque!</h4>
                         </div>
                    </section>

                    <section className="main-section">
                         <div className="wrap">

                         </div>
                    </section>
               </div>
          </main>
          )
}

export default Footer
