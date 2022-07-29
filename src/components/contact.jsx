import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import swal from 'sweetalert';


 const Contact = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    setFirstName('');
    setEmail('');
    setMessage('');

    emailjs.sendForm('service_9ez9rad', 'template_unlxklj', form.current, 'hoft-u1mCk1uS42c1')
      .then((result) => {
        swal("Form Submitted Successfully!");
          console.log(result.text);
          console.log("message sent");
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section className="contact_section layout_padding">
    <div className="container contact_heading">
      <h2>
        Contact Us
      </h2>
      <p>
        psum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      </p>
    </div>
    <div className="container">
      <form ref={form} onSubmit={sendEmail}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label for="inputName4">Name</label>
            <input type="text" required className="form-control" id="inputName4" name="user_name" onChange={event => setFirstName(event.target.value)}
          value={firstName}/>
          </div>
          <div className="form-group col-md-6">
            <label for="inputEmail4">Email</label>
            <input required type="email" className="form-control" id="inputEmail4" name="user_email" value={email}
          onChange={event => setEmail(event.target.value)}/>
          </div>

        </div>
       
        <div className="form-group">
          <label for="inputMessage">Message</label>
          <input required type="text" className="form-control" id="inputMessage" placeholder="" name="message" onChange={event => setMessage(event.target.value)}
          value={message}/>
        </div>
    

    <div className="d-flex justify-content-center">
      <button type="submit" value="Send">Send</button>
    </div>
    </form>
  </div>
  
  </section>
  )
}

export default Contact