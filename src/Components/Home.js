import React, { useState } from 'react'
// import Navbar from './Navbar'
// import mainimg from './main-img2.jpg'
import Navbar from './Navbar'
import { Link } from 'react-router-dom';
// import Alert from './Alert';
// import Footer from './Footer'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Home() {

    const mailform = (e) => {
        // e.preventDefault();
        // let mail = document.getElementById('mail').value;
        // let form = document.forms["form"]["email"].value;
        // if(mail.length > 5){
        //     setAlertMsg("Thank you sir/madam for connecting us, You will get message from us as soon as possible..")
        //     setAlertStyle({
        //         display : 'flex',
        //         flexDirection : 'column'
        //     })
             
        //     setTimeout(() => {
        //         setAlertStyle({
        //             display : 'none',
        //             flexDirection : 'column'
        //         })
        //     }, 4000);
           
        // }
        // else{
        //     setAlertMsg("please enter valid email")
        //     setAlertStyle({
        //         display : 'flex',
        //         flexDirection : 'column'
        //     })
             
        //     setTimeout(() => {
        //         setAlertStyle({
        //             display : 'none',
        //             flexDirection : 'column'
        //         })
        //     }, 4000);
        // }
    
       
    }

//     const [AlertStyle, setAlertStyle] = useState(
//         {
//             display : 'none',
//             flexDirection : 'column'
//         }
//     )
// const [AlertMsg, setAlertMsg] =useState("")
    

    return (

        <>
            <Navbar about="About Me" service="Services" />
            <div className="container-fuild">
                {/* <div id="alertBody" style={AlertStyle}>
                    <div className="alert alert-success" role="alert">
                       {AlertMsg}
                    </div>
                </div> */}
                <div className="content">
                    <h4>Hello, my name is</h4>
                    <h1 id='HeadingH1'>Dhiraj <span>Mahadik</span></h1>
                    <h3 id='HomeH3'>I'am a Web Developer.</h3>
                    <div className="newslatter">
                        <form name='form'>
                            <input type="email" name="email" id="mail" placeholder="Enter Your Email" required="required" />
                            {/* <input type="button" name="submit" value="Lets Start"  /> */}
                            <input type="submit" name="submit" value="Lets Start" onClick={mailform}/>
                        </form>
                    </div>
                </div>
            </div>



            {/* <!-----service section start-----------> */}
            <div className="service" id='service'>
                <div className="title">
                    <h2>Our Services</h2>
                </div>

                <div className="box">
                    <div className="card">
                        <i className="fas fa-bars"></i>
                        <h5>Landing Page</h5>
                        <div className="pra">
                            <p id='p1'>One page website that cantains logo, navigation, main content and footer section</p>
                        </div>
                        <p className='p'>
                            <Link className="button" to="/landingPagePlane">Read More</Link>
                        </p>
                    </div>

                    <div className="card">
                        <i className="far fa-user"></i>
                        <h5>Personal Website</h5>
                        <div className="pra">
                            <p id='p2'>A dymnamic multiple pages website for example personal blog, Portfolio.</p>
                        </div>
                        <p className='p'>
                            <Link className="button" to="/landingPagePlane">Read More</Link>
                        </p>
                    </div>

                    <div className="card">
                        <i className="fa-solid fa-building"></i>
                        <h5>Comercial Web Application</h5>
                        <div className="pra">
                            <p id='p3'>A multi page web application with all functionalities like CRUD operations, payment gateway, contact page etc.</p>
                        </div>
                        <p className='p'>
                            <Link className="button" to="/landingPagePlane">Read More</Link>
                        </p>
                    </div>
                </div>
            </div>

            {/* <!------Contact Me------> */}
            <div className="contact-me">
                <p>Let Me Get You A Beautiful Website.</p>
                <a className="button-two" href="https://drive.google.com/file/d/1pFX_fh5A85qRbvz6Pg0LMgM82R2LMHcJ/view?usp=sharing" target="blank">Hire Me</a>
            </div>

            {/* <!------footer start---------> */}
            {/* <Footer /> */}

        </>
    )

}
