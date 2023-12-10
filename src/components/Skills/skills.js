import React from 'react'
import './skills.css';
import UIDesign from '../../assets/UI1.png';
import WebDesign from '../../assets/web1.png';
import AppDesign from '../../assets/app.png';


const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>What I Do</span>
        <span className='skillDesc'>I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly websites I have a strong understanding of design and a keen eye for detail. I am proficient in HTML,CSS, and javaScript, as well as design software such as Adobe Photoshop and Illustrator</span>
        <div className='skillBars'>
          <div className='skillBar'>
            <img src={UIDesign} alt='UIDesign' className='skillBarImg'/>
            <div className='skillBarText'>
              <h2>UI/UX Design</h2>
              <p>This a demo text, you can write your own content here</p>
            </div>
          </div>
          <div className='skillBar'>
            <img src={WebDesign} alt='WebDesign' className='skillBarImg'/>
            <div className='skillBarText'>
              <h2>Website Design</h2>
              <p>This a demo text, you can write your own content here</p>
            </div>
          </div>
          <div className='skillBar'>
            <img src={AppDesign} alt='AppDesign' className='skillBarImg'/>
            <div className='skillBarText'>
              <h2>App Design</h2>
              <p>This a demo text, you can write your own content here</p>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Skills