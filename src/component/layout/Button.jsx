import React from 'react'

const Button = ({title,className,linkClassName}) => {
  return (
    <div className={`${className}`}>
        <a href="" className={`${linkClassName}`}>
            {title}
        </a>
    </div>
  )
}

export default Button