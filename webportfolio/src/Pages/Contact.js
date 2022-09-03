import React, { useRef, useEffect } from 'react'
import emailjs from '@emailjs/browser';
import { ContactContainer, Wrapper, ContactH2, IconContainer, IconButton } from '../Components/Contact/Contact.elements'
import { PageTitle } from '../GlobalStyles'
import { useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { variant } from '../utils/variants'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


function Contact() {

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if(inView) control.start('visible');
  }, [control, inView]);



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
    <ContactContainer  id='Contact'>
      <Wrapper
        id='Contact'
        ref={ref}
        variants={variant}
        initial='hidden'
        animate={control}>
        <PageTitle>Contact</PageTitle>
        <ContactH2>
          Have a question or want to work together?
          Feel free to contact me through any of the methods listed below.
        </ContactH2>

        <ContactH2>Email: <a href='mailto:aeronhorne@gmail.com'>aeronhorne@gmail.com</a></ContactH2>

        <IconContainer>
          <IconButton href="https://github.com/AeronH" target="_blank"><GitHubIcon /></IconButton>

          <IconButton href='https://www.linkedin.com/in/aeron-horne-051b2a242/' target="_blank"><LinkedInIcon /></IconButton>
        </IconContainer>

        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="from_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </Wrapper>
    </ContactContainer>
  )
}

export default Contact