import React from 'react'
import './Experience.css'
import Content from '../Skills/Content'
import { useState } from 'react'
import { useEffect } from 'react'


const Experience = () => {
  const [Show, setShow] = useState (false);
  const Timer = () =>{
    useEffect (() => {
      setInterval(() => {
        if (setInterval) {
          console.log(setShow)
        }
        else {
          console.log(true)
        }
        
      }, 1000);
     
    }, []);
    return <Content />
    
  } 

  return (
    <section id='Experience'>
      <h5>Get To Know</h5>
    <h2>Experience</h2>

    <div className="container container_experience">
      <div className="head">
        <h2>Senior Process Associate | I-Cons Technologies</h2>
        <h5 className='Sub_head'>Coimbatore | 2020 August – 2023 (Present)</h5>
       
        <div >
          <button className="btn btn-primary btn_1" type ='button' onClick={ () => setShow (!Show)}>{Show === true ? 'Hide' : 'More Info'}</button>
      </div>
      <div className="content">
          {
            Show &&  <Timer/>
          }
        </div>
        </div>
    </div>
    </section>
  )
}

export default Experience