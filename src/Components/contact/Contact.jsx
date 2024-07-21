import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from'../../assets/mail_icon.svg'
import location_icon from'../../assets/location_icon.svg'
import call_icon from'../../assets/call_icon.svg'
const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "53680b2b-3ae4-403e-837e-2400fd6c4acc");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
    alert(res.message);
    }
  };
  return (
    <div id='contact' className='contact'>
        <div className="contact-tittle">
            <h1>Get In Touch</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Lets Talk</h1>
                <p>i m currently on open to work, so fell free to send me a message about anything that you want me to work on .Your can contact me</p>
                <div className="contact-details">
                    <div className="contact-detail">
                      <img src={mail_icon} alt="" /> <p>abhisarakale2001@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                    <img src={call_icon} alt="" /> <p>+91 9011418008</p>
                        </div>
                        <div className="contact-detail">
                        <img src={location_icon} alt="" /> <p>at,pune</p>
                        </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className="contact-right">
               <label htmlFor="">Your Name</label> 
               <input type="text " placeholder='Enter your Name' name='name' />
               <label htmlFor="">Your Email</label>
               <input type="email" placeholder='Enter you Email'  name='email'/>
               <label htmlFor="">Your Message</label>
               <textarea name="message" rows="8" placeholder='Enter your Message'></textarea>
               <button type='submit'className='contact-submit'>Submit Now</button>
            </form>
        </div>
    </div>
  )
}

export default Contact