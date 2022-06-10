import React from 'react'
import PropTypes from 'prop-types'
  // import  Link  from "react-router-dom";
  import { Link } from 'react-router-dom';
export default function Navbar(props) {
  return (
    <nav className='navbar'>
    <h2 className="logo">D<span>M</span></h2>
    <ul>
        <li><Link to="/">Home</Link></li>
        {/* <li><Link to="#lets">{props.about}</Link></li> */}
        <li><a href="#service">{props.service}</a></li>
        <li><Link to="/skills">About & Skilss</Link></li>
        <li><Link to="/contact">Contact me</Link></li>
    </ul>
    {/* <!-- <a href="#" class="btn">Subscribe</a> --> */}
</nav>
  )
}
