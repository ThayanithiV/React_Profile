import React from 'react'
import CV from '../../assats/Thaya2023.458919571e70f8095c1e (1).pdf'

const CTA = () => {
  return (
    <div className="cta">
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#Contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA