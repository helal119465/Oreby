import React from 'react'
import { Link } from 'react-router-dom'

const ListItem = ({className,linkClassName,item,link}) => {
  return (
    <li className={`${className}`}>
        <Link to={link} className={` ${linkClassName}`}>{item}</Link >
    </li>
  )
}

export default ListItem