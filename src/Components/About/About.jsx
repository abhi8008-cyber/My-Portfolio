import React from 'react';
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import profile_img from '../../assets/about_profile.svg';

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="Theme Pattern" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profile_img} alt="Profile" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am a well-trained and experienced frontend Developer with over a decade of professional expertise in the field. Throughout my career,
              my passion for frontend development has driven me to excel in creating user-friendly and visually appealing interfaces.
            </p>
            <p>
              {/* Add more about your experience or other relevant information */}
              My passion for frontend development is not only a career choice but a lifestyle that I pursue with dedication and creativity.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p> <hr style={{width:"50%"}} />
            </div>
            <div className="about-skill">
              <p>React.js</p><hr style={{width:"70%"}} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p><hr style={{width:"60%"}} />
            </div> 
          </div>
        </div>
      </div>

      <div className="about-achievements">
        <div className="about-achievement">
          <h1>10+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>90+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>15+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>

      <div className="about-title">
        <h1>Education</h1>
        <img src={theme_pattern} alt="Theme Pattern" />
      </div>

      <div className="about-education">
        <p>SSC and HSC from Satara.</p>
        <p>Graduated from YSPM's Yashoda Technical Campus, Satara | CGPA 7+ </p>
        <p>Affiliated to Dr. Babasaheb Ambedkar Technological University, Lonere.</p>
      </div>
    </div>
  );
}

export default About;
