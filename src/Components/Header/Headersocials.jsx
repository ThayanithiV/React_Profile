import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'



const Headersocials = () => {
  return (
    <div className="header_socials">
        <a href='https://www.linkedin.com/in/thayanithi-v-9b22a4143/' target='_blank'><BsLinkedin/></a>
        <a href='https://github.com/ThayanithiV' target='_blank'><BsGithub/></a>
        <a href='https://instagram.com/joker_vr46_?igshid=ZDdkNTZiNTM=' target='_blank'><BsInstagram /></a>
    </div>
  )
}

export default Headersocials