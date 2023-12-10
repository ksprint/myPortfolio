import React, { useRef } from 'react';
import './contact.css';
import Walmart from '../../assets/wallmart1.png';
import Adobe from '../../assets/adobe1.png';
import Microsoft from '../../assets/microsoft1.png';
import Facebook from '../../assets/facebook1.png';
import FacbookIcon from '../../assets/fb1.png';
import YoutubeIcon from '../../assets/yt1.png';
import TwitterIcon from '../../assets/x1.png';
import InstagramIcon from '../../assets/IG1.png';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_w3dvgqs', 'template-93o2izs', form.current, 'ZPzaNj6aR9QPRdLdMoUgz')
      .then((result) => {
          console.log(result.text);
          alert('Email Sent');
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
      };
  return (
    <section Id='contactPage'>
        <div id='clients'>
            <h1 className='contactPageTitle'>My Clients</h1>
            <p className='clientDesc'>
                I have had the opportunity to work with a diverse groups of companies. 
                Some of the notable companies I have worked with includes 
            </p>
            <div className='clientImgs'>
                <img src={Walmart} alt='Clients' className='clientImg'/>
                <img src={Adobe} alt='Clients' className='clientImg'/>
                <img src={Microsoft} alt='Clients' className='clientImg'/>
                <img src={Facebook} alt='Clients' className='clientImg'/>
            </div>
        </div>
        <div id='contact'>
            <h1 className='contactPageTitle'>Contact Me</h1>
            <span className='contactDesc'>Please fill out the form below to discuss any work opportunities</span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type='text' className='name'placeholder='Your Name'name='your_name'/>
                <input type='email' className='email' placeholder='Your Email' name='your_email'/>
                <textarea className='msg' name='message'rows='5'placeholder='Your Message'></textarea>
                <button type='submit' value='Send' className='submitBtn'>Submit</button>
                <div className='links'>
                    <img src={FacbookIcon} alt='Facebook' className='link'/>
                    <img src={TwitterIcon} alt='twitter' className='link'/>
                    <img src={InstagramIcon} alt='instagram' className='link'/>
                    <img src={YoutubeIcon} alt='youtube' className='link'/>
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact