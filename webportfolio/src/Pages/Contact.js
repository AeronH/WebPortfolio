import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_TEMPLATE_ID, 
        form.current,
        process.env.REACT_APP_EMAIL_PUBLIC_KEY)
          .then((result) => {
              console.log(result.text);
              e.target.reset();
          }, (error) => {
              console.log(error.text);
          });
  };
  return (
    <div id='Contact'>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="from_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </div>
  )
}

export default Contact