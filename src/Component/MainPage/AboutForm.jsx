import React from 'react'
import './AboutForm.css'

const AboutForm = () => {
  return (
    <div className="contect-form">

      <form className='form-div' action="https://formspree.io/f/xnqeqapk" method='POSt' >
        <h3 className='form-heading-1'>Send your Query</h3>
        <input type="text " placeholder='enter your full name' name='Full Name' required autoComplete='off' />
        <input type="email " placeholder='Mail ID' name='Mail ID' required autoComplete='off' />
        <input type="number " placeholder='Contact Number' name='Contact Number' required autoComplete='off' />
        <textarea name=" message" id="" cols="30" rows="4" placeholder='enter your message' required autoComplete='off'></textarea>
        <input className='submit' type="submit" value='Send your Query' />
      </form>
    </div>
  )
}

export default AboutForm
