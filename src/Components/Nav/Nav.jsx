import React from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {CgAwards} from 'react-icons/cg'
import {BsBook} from 'react-icons/bs'
import {AiOutlinePhone} from 'react-icons/ai'
import { useState } from 'react'



const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href='#About' onClick={() => setActiveNav('#About')} className={activeNav === '#About' ? 'active' : ''}><AiOutlineUser/></a>
      <a href='#Skills' onClick={() => setActiveNav('#Skills')} className={activeNav === '#Skills' ? 'active' : ''}><CgAwards/></a>
      <a href='#Experience' onClick={() => setActiveNav('#Experience')} className={activeNav === '#Experience' ? 'active' : ''}><BsBook/></a>
      <a href='#Contact' onClick={() => setActiveNav('#Contact')} className={activeNav === '#Contact' ? 'active' : ''}><AiOutlinePhone/></a>
    </nav>
  )
}

export default Nav