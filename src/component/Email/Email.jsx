import React from 'react'
import './style/Email.css'

const Email = () => {
  return (
    <div className='email-contact-wrapper'>
      <h1>Contact Information</h1>
      <form method="POST" action="https://formsubmit.co/polarbear494@gmail.com" enctype="multipart/form-data" className='contact-form'>
        <label className='label-contact' htmlFor="" >First Name</label>
        <input className='input-contact' type="text" name='Fname' required />
        
        <label className='label-contact' htmlFor=""> Last Name</label>
        <input className='input-contact' type="text" name='Lname' required/>
        
        <label className='label-contact' htmlFor="">Linkedin</label>
        <input className='input-contact'type="text" name='Linkedin' required/>
        
        <label className='label-contact' htmlFor=""> Company</label>
        <input className='input-contact'type="text" name='company' required/>
        
        <label className='label-contact' htmlFor="">Email</label>
        <input className='input-contact' type=" " name='email'required/>
        
        <label className='label-contact' htmlFor="" > Message</label>
        <textarea cols="30" rows="5" name='message'></textarea>
        <div className='button-contact-submit-wrapper'>
          <button className="button-contact-submit" type="submit">Submit</button>
        </div>
        <input type="hidden" name="_captcha" value="false"></input>
        <input type="hidden" name="_next" value="http://localhost:3000/"></input>
      </form>
    </div>
  )
}

export default Email