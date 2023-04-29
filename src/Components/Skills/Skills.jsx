import React from 'react'
import './Skills.css'
import {AiFillHtml5} from 'react-icons/ai'  
import {BsFiletypeCss} from 'react-icons/bs'
import {SiBootstrap} from 'react-icons/si'
import {DiJavascript1} from 'react-icons/di'
import {FaReact} from 'react-icons/fa'
import {AiOutlineFileExcel} from 'react-icons/ai'
import {AiOutlineFileWord} from 'react-icons/ai'
import {SiMicrosoftpowerpoint} from 'react-icons/si'

const Skills = () => {
  return (
    <section id='Skills'>
      <h5>Strength</h5>
    <h2>My Skills</h2>
      <div className="container container_skills">
        <div className="skill">
          <AiFillHtml5 className='icon' color='#DD4B25'/>
          <h3>HTML</h3>
        </div>
        <div className="skill">
          <BsFiletypeCss className='icon'color='#254BDD'/>
          <h3>CSS</h3>
        </div>
        <div className="skill">
          <SiBootstrap className='icon' color='#8411F6'/>
          <h3>BOOTSTRAP</h3>
        </div>
        <div className="skill">
          <DiJavascript1 className='icon' color='#F3D91A'/>
          <h3>JAVA SCRIPT</h3>
        </div>
        <div className="skill">
          <FaReact className='icon js_icon' color='#00D1F7'/>
          <h3>REACT JS</h3>
        </div>
        <div className="skill">
          <AiOutlineFileExcel className='icon' color='#209E62'/>
          <h3>MICROSOFT EXCEL</h3>
        </div>
        <div className="skill">
          <AiOutlineFileWord className='icon' color='#0079D0'/>
          <h3>MICROSOFT WORD</h3>
        </div>
        <div className="skill">
          <SiMicrosoftpowerpoint className='icon' color='#EA6B3B'/>
          <h3>MICROSOFT POWERPOINT</h3>
        </div>
      </div>
    </section>
  )
}

export default Skills