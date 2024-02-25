import React from 'react'
import "./Contact.css"
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'

const Contact = () => {

  const Alert = () => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your Message has been saved",
      showConfirmButton: false,
      timer: 1500
    });
  }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_708uhnb', 'template_mkxg8yr', form.current, {
        publicKey: 'm6mx_aozYEGpowIWw',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  
  return (
    <div>
    {/* Start Contact  */}
   <div class="contact">
     <div class="container">
       <div class="main-heading">
         <h2>Contact Us</h2>
         <p>
           Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget
           tincidunt.
         </p>
       </div>
       <div class="content">
         <form action="" ref={form} onSubmit={sendEmail}>
           <input required class="main-input" type="text" name="from_name" placeholder="Your Name" />
           <input required class="main-input" type="email" name="email_name" placeholder="Your Email" />
           <textarea required class="main-input" name="message" placeholder="Your Message"></textarea>
           <input type="submit" value="Send Message" onClick={Alert} />
         </form>
         <div class="info">
           <h4>Get In Touch</h4>
           <span class="phone">+00 123.456.789</span>
           <span class="phone">+00 123.456.789</span>
           <h4>Where We Are</h4>
           <address>Awesome Address 17<br />Cairo, NYC<br />123-4567-890<br />EGY</address>
         </div>
       </div>
     </div>
   </div>
    {/* End Contact  */}
   </div>
  )
}
import "./Contact.css"

export default Contact
