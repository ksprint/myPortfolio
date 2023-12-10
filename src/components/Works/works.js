import React from 'react'
import './works.css';
import Portfolio1 from '../../assets/img 1.jpg';
import Portfolio2 from '../../assets/img 2.jpg';
import Portfolio3 from '../../assets/img 3.jpg';
import Portfolio4 from '../../assets/img 4.jpg';
import Portfolio5 from '../../assets/img 5.jpg';
import Portfolio6 from '../../assets/img 6.jpg';


const Works = () => {
  return (
    <section id='works'>
        <h2 className='worksTitle'>My portfolio</h2>
        <span  className='worksDesc'>I take pride in payying attention to thr smallest detail and making sure that my work is pixel perfect. I am excited to bring my skill and experience to help  businesses acheive their goals and create a strong online presense. </span>
        <div className='worksImgs'>
            <img src={Portfolio1} alt='' className='worksImg'/>
            <img src={Portfolio2} alt='' className='worksImg'/>
            <img src={Portfolio3} alt='' className='worksImg'/>
            <img src={Portfolio4} alt='' className='worksImg'/>
            <img src={Portfolio5} alt='' className='worksImg'/>
            <img src={Portfolio6}alt='' className='worksImg'/>
        </div>
        <button className='worksBtn'>See More</button>
    </section>
  )
}

export default Works