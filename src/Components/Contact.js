
import React, { useState } from 'react'
import Navbar from './Navbar'



export default function Contact() {
 const ContactFormSubmit =()=>{
    // setAlertMsg("Thank you sir/madam for connecting us, You will get message from us as soon as possible")
    // setAlertStyle({
    //     display : 'flex',
    //     flexDirection : 'column',
        
    // })
     
    // setTimeout(() => {
    //     setAlertStyle({
    //         display : 'none',
    //         flexDirection : 'column'
    //     })
    // }, 4000);
  }

//   const [AlertStyle, setAlertStyle] = useState(
//     {
//         display : 'none',
//         flexDirection : 'column',
        
//     }
// )
//  const[AlertMsg , setAlertMsg] = useState("")


  return (
    <>
      <Navbar />
      {/* <div id="alertBody" style={AlertStyle}>
                    <div class="alert alert-success my-0" role="alert">
                       {AlertMsg}
                    </div>
                </div> */}
      <section className="contact">
      
        <div className="contentt">
          <h3>Contact Me</h3>
          <p>Feel free to contact me i will get back to you as soon as possible.... </p>
        </div>
        <div className="container">
          <div className="contactInfo">
            <div className="Contactbox">
              <div className="icon">
              <i class="fa-solid fa-location-dot"></i>
              </div>
              <div className="text">
                <h3>Address</h3>
                <p>Pune - Maharashtra</p>
              </div>
            </div>
            <div className="Contactbox">
              <div className="icon">
              <i class="fa-solid fa-envelope"></i>
              </div>
              <div className="text">
                <h3>Email</h3>
                <p>dhirajmahadik9221@gmail.com</p>
              </div>
            </div>
            <div className="Contactbox">
              <div className="icon">
              <i class="fa-solid fa-phone"></i>
              </div>
              <div className="text">
                <h3>Phone</h3>
                <p> +91 9284593357 </p>
              </div>
            </div>
          </div>
          {/* Alert  */}

          {/* <div id="alertBody" style={AlertStyle}>
                    <div class="alert alert-success my-0" role="alert">
                       {AlertMsg}
                    </div>
                </div> */}

          {/* contact form */}
          <div className="contactForm">
            <form action="">
              <h3>Send Message</h3>
              <div className="inputBox">
                <input type="text" name='name' required="required" />
                <samp>Full Name</samp>
              </div>
              <div className="inputBox">
                <input type="email" name='email' required="required" />
                <samp>Your Email</samp>
              </div>
              <div className="inputBox">
                <textarea name="" required="required"></textarea>
                <samp>Type Your Message</samp>
              </div>
              <div className="inputBox">
                <input type="submit" name='' value="Send" onClick={ContactFormSubmit} />
                
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
