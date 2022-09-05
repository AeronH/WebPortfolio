import React, { useRef, useEffect } from 'react'
import emailjs from '@emailjs/browser';
import { ContactContainer, Wrapper, ContactH2, IconContainer, IconButton, ContactForm,
ContactInput, ContactTextArea, ContactSendButton, StyledEmail } from '../Components/Contact/Contact.elements'
import { PageTitle, PageBreak } from '../GlobalStyles'
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
      <PageBreak />
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

        <ContactH2>Email: <StyledEmail href='mailto:aeronhorne@gmail.com'>aeronhorne@gmail.com</StyledEmail></ContactH2>

        <IconContainer>
          <IconButton href="https://github.com/AeronH" target="_blank"><GitHubIcon /></IconButton>

          <IconButton href='https://www.linkedin.com/in/aeron-horne-051b2a242/' target="_blank"><LinkedInIcon /></IconButton>
        </IconContainer>
        <ContactH2>
          Or send me a message!
        </ContactH2>

        <ContactForm ref={form} onSubmit={sendEmail}>
          <ContactInput type="text" name="from_name" placeholder='Your Name' required/>
          <ContactInput type="email" name="user_email" placeholder='Your Email' required/>
          <ContactTextArea name="message" placeholder='Your Message...' required/>
          <ContactSendButton type="submit" value="Send" />
        </ContactForm>
      </Wrapper>
    </ContactContainer>
  )
}

export default Contact