import './Contact.css'
import { useRef } from 'react'
import emailjs from '@emailjs/browser';



export const Contact = () => {
  
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_vdims2r', 'template_lq178s7', form.current, 'Q2fzvz3PU21nVcHqm')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

          e.target.reset()
          alert("Thanks for your message!")
      };
  return (
    <section className='form--layout'>
        <div>
            <h2> Contact Us</h2><br />
            <form ref={form} onSubmit={sendEmail}>
                <input type='text' placeholder='Full Name' name='user_name' title='Enter Full Name' required /><br /><br />
                <input type='email' placeholder='Email' name='user_email' title='Enter Email' required /><br /><br />
                <input type='text' placeholder='Subject' name='subject' title='Enter Subject' required /><br /><br />
                <textarea name='message' placeholder='Message' cols="30" rows="10" title='Enter Message'></textarea><br />
                <button type='submit' className='--btn' title='Submit'>Send Message</button>              

            </form>

        </div>
    </section>
  )
}
export default Contact