import React from 'react'
import './header.css'

function Header({heading}) {
  return (
    <header>
        <h1>{heading}</h1>
    </header>
  )
}

Header.defaultProps = {
  heading: 'Default Title'
}

export default Header