import React from 'react';
import logoImg from '../img/logo/logo-removebg.png';
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoCallSharp, IoMail } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer className='pt-5 pb-3'>
        <div className='container '>
            <div className='row'>
                <div className='col-md-4 col-12 pt-4'>
                <div className='logo'>
        <img src={logoImg} alt='bluebery-logo'/>
      </div>

      <p>Explore, create, and grow at Blueberry International Pre School.
       Our education goes beyond the ordinary, shaping young minds
        for a brighter future.</p>
                </div>

                <div className='col-md-4 col-12 pt-4'>
<h5>Quick Links</h5>


<div className='d-flex  pb-1 align-items-center'>
<MdKeyboardArrowRight className='icon2'/>
<Link to='/' className='linkstyle-disable' >
<span className='footer-links'>Home</span>
</Link>
</div>

<div className='d-flex  pb-1 align-items-center'>
<MdKeyboardArrowRight className='icon2'/>
<Link to='/' className='linkstyle-disable' >
<span className='footer-links'>About us</span>
</Link>
</div>

<div className='d-flex  pb-1 align-items-center'>
<MdKeyboardArrowRight className='icon2'/>
<Link to='/' className='linkstyle-disable' >
<span className='footer-links'>Our Carriculum</span>
</Link>
</div>

<div className='d-flex  pb-1 align-items-center'>
<MdKeyboardArrowRight className='icon2'/>
<Link to='/' className='linkstyle-disable' >
<span className='footer-links'>Gallery</span>
</Link>
</div>

<div className='d-flex  pb-1 align-items-center'>
<MdKeyboardArrowRight className='icon2'/>
<Link to='/' className='linkstyle-disable' >
<span className='footer-links'>Contact us</span>
</Link>
</div>


                </div>

                <div className='col-md-4 col-12 pt-4'>
<h5>Contact us</h5>

<div className='d-flex gap-3 pb-3'>
<IoCallSharp className='icon2'/>

<a href='tel:+919552886677' className='linkstyle-disable' ><span>9552886677</span></a>
/
<a href='tel:+917066113325' className='linkstyle-disable' ><span>7066113325</span></a>
                    </div>

                    <div className='d-flex gap-3 pb-3'>
<IoMail className='icon2'/>

<a href='mailto:info1@blueberry.com' className='linkstyle-disable' ><span>info1@blueberry.com</span></a>
                    </div>

                    <div className='d-flex gap-3 pb-3'>
<FaMapMarkerAlt className='icon'/>

<span>Gera villa no. 2,    
next to Jain temple, Near Shree Krishna Hotel Chowk,
 Viman nagar, Pune - 411014</span>
                    </div>

                    <div className='d-flex gap-3 pb-3'>
<FaMapMarkerAlt className='icon'/>

<span> A8 - A9, SSR Tower, 
Kharadi South Main Road, beside EON School,
 Kharadi, Pune, Maharashtra 411014</span>
                    </div>
                </div>
            </div>
        </div>
      </footer>
      <div className='licence'>
<p className='font'>©  2023 Blueberry | Designed By <a href='mailto:vijaykale7052@gmal.com' className='linkstyle-disable'>Kale</a>. All Rights Reserved</p>
      </div>
    </>
  )
}

export default Footer
