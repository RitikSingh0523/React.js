import React from 'react'
import {sociallink} from '../data'

const SocialComp = ({parentClass,itemClass}) => {
  return (
    <ul className={parentClass}>
    {sociallink.map((slink)=>{
        const {id,link,icon}=slink;
       return(<li key={id}>
       <a href={link} target="_blank"  rel="noreferrer" className={itemClass}
         ><i className={icon}></i></a>
     </li>)
    })}
     
   </ul>
  )
}

export default SocialComp