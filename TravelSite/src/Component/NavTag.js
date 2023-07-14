import React from 'react'
import { pagelink } from '../data'

const NavTag = ({parentClass,itemClass}) => {
  return (
    <ul className={parentClass} id="nav-links">
        {pagelink.map((link)=>{
            const {id,href,text}=link;
            return(<li key={id}>
            <a href={href} className={itemClass}> {text} </a>
          </li>)
        })}
        </ul>
  )
}

export default NavTag