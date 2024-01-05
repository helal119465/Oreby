import React from 'react'

const DropDownItem = ({children,className}) => {
  return (
    <div className={`${className}`}>{children}</div>
  )
}

export default DropDownItem