import React from 'react'
import Navbar from './Navbar';
import mainimg from './main-img2.jpg'


export default function Skliss() {



    return (
        <>
            <Navbar />

            <section className="about" id='about'>
                <div className="main">
                    <img src={mainimg} alt='' />
                    <div className="about-text">
                        <h2>About Me</h2>
                        <h5>Developer <span>& Designer</span></h5>
                        <p>I am a front-end web developer. I can provide clean code and pixel perfect design. I also make the
                            website more & more interactive with web animations.I can provide clean code and pixel perfect
                            design. I also make the website more & more interactive with web animations.A responsive design
                            makes your website accessible to all users, regardless of their device.</p>
                        
                            <a href="https://api.whatsapp.com/send/?phone=919284593357&text&app_absent=0" target="_blank" rel="noreferrer">
                            <button type="button" id='lets' >
                            Let's Talk
                            </button>
                            </a>
                            
                    </div>
                </div>
            </section>


            <section>
                <div className="skilss">
                    <h3 id='Skil-Heading'>Following are my main Skilss</h3>
                    <div className="cardBox">

                        <div className="skils " >
                            <h3>JavaScript</h3>

                            <div className="Skil_icon" >
                                <i class="fa-brands fa-js"></i>
                            </div>
                        </div>
                        <div className="skils ">
                            <h3>React</h3>
                            <div className="Skil_icon" >
                            <i class="fa-brands fa-react"></i>
                            </div>
                        </div>

                        <div className="skils " >
                            <h3 >HTML</h3>
                            <div className="Skil_icon" >
                            <i class="fa-brands fa-html5"></i>
                            </div>
                        </div>
                        <div className="skils ">
                            <h3>CSS</h3>
                            <div className="Skil_icon" >
                            <i class="fa-brands fa-css3-alt"></i>   
                            </div>
                        </div>
                        <div className="skils ">
                            <h3>Bootstrap</h3>
                            <div className="Skil_icon" >
                            <i class="fa-brands fa-bootstrap"></i>  
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
