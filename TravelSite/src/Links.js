import React from 'react'
import { pagelink } from './data'

const Links = () => {
  return (
    <ul className="nav-links" id="nav-links">
        {pagelink.map((link)=>{
            <li key={link.id}>
            <a href={link.href} className="nav-link"> {link.text} </a>
          </li>
        })}
        </ul>
  )
}

export default Links