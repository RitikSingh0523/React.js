import React from 'react'

import NavTag from './NavTag'
import SocialComp from './SocialComp'

const Footer = () => {
  return (
    <footer className="section footer">
    <NavTag parentClass='footer-links' itemClass='footer-link' />
    <SocialComp  parentClass='footer-links' itemClass='footer-icon' />
      
      <p className="copyright">
        copyright &copy; TravelSite travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  )
}

export default Footer