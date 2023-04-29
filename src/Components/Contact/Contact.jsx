import React from 'react'
import './Contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import  { useRef } from 'react';
import emailjs from'emailjs-com'


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_k6um49j', 'template_abin4s4', form.current, 'yx-QnaqQnT2p3T5-u')
      e.target.reset()
  };
  return (
    <section id='Contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container container_contact">
        <div className="contact_options">
          <article className="contact_option">
            <AiOutlineMail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>thayanithi938@gmail.com</h5>
            <a href="mailto:thayanithi938@gmail.com">Send a Message</a>
          </article>
          <article className="contact_option">
            <AiOutlineLinkedin className='contact_option-icon'/>
            <h4>Linkedin</h4>
            <h5>Thayanithi V</h5>
            <a href="https://www.linkedin.com/in/thayanithi-v-9b22a4143/">Send a Message</a>
          </article>
          <article className="contact_option">
            <AiOutlineWhatsApp className='contact_option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+91 9543325825</h5>
            <a href="https://api.whatsapp.com/send?phone+919543325825">Send a Message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="mail" name='email' placeholder='Your Email' required />
          <textarea name="message"  rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Submit</button>
        </form>
      </div>
    </section>
  )
}

export default Contact