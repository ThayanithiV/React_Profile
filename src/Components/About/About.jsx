import React from 'react'
import './About.css'
import Me from '../../assats/Me-removebg-preview.png'
import {BsBook} from 'react-icons/bs'
import {BsAward} from 'react-icons/bs'

const About = () => {
  return (
    <section id="About" >
    <h5>Get To Know</h5>
    <h2>About Me</h2>

    <div className="container about_container">
      <div className="about_me">
        <div className="about_me-image">
          <img src={Me} alt="" />
        </div>
      </div>
      <div className="about_content">
        <p className='self'>
        A self driven person with 2 years of experience in Data Digitization, Webresearch, Data Conversion etc & knowledge in Microsoft Excel, Microsoft Powerpoint, HTML, CSS, Bootstrap, JavaScript & React JS for Website development.
        </p>
        <div className="about_cards">
          <article className='about_card'>
            <BsBook />
            <h2>Education</h2>
            <h3 className='card'>2014 - 2017</h3>
            <h5>BSc.CHEMISTRY at Gobi Arts & Science College, Gobichettipalayam.</h5>
            <h3 className='card'>2012 - 2014</h3>
            <h5>HSC at Kumutha Matriculation Higher Secondary School, Nambiyur.</h5>
            <h3 className='card'>2011 - 2012</h3>
            <h5>SSLC at Govt. Higher Secondary School, Savakkattupalayam.</h5>
          </article>
          <article className='about_card'>
            <BsAward />
            <h2>Certificate</h2>
            <h3 className='card'>2022</h3>
            <h5>Programming Foundations with JavaScript, HTML and CSS. Coursera.org.</h5>
            <h3 className='card'>2021</h3>
            <h5>Medical Coding and Training, Thought Flows Medical Coding Academy, Coimbatore.</h5>
            <h3 className='card'>2019</h3>
            <h5>Junior Type Writing, Valarmathi Institute, Nambiyur.</h5>
          </article>
        </div>
      </div>
    </div>
    </section>
  )
}

export default About