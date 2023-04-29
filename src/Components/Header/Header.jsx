import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assats/me4.png'
import Headersocials from './Headersocials'


const Header = () => {
  return (
      <header className="container header_container">
        <h5>Hello I'm</h5>
        <h1>THAYANITHI V</h1>
        <h5 className="text-light">Front-End Developer</h5>
        <CTA/>
        <Headersocials/>
        <div className="me">
          <img src={ME} alt="me" />
        </div>
      </header>
    
  )
}

export default Header