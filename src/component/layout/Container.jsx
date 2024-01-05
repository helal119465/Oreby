import React from 'react'

const Container = ({children,className}) => {
  return (
    <div className={`max-w-container p-2 m-auto ${className}`}>
        {children}
    </div>
  )
}

export default Container