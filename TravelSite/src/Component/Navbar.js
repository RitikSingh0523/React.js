import React from 'react'
import logo from '../images/logo.png'

import NavTag from './NavTag'
import SocialComp from './SocialComp'


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}
        <NavTag parentClass='nav-links' itemClass='nav-link' />
        <SocialComp parentClass='nav-links' itemClass='nav-icon'/>

        
      </div>
    </nav>
  )
}

export default Navbar