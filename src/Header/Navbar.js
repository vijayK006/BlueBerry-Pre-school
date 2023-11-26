import React from 'react';
import logoImg from '../img/logo/logo.jpeg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      
      <div className='logo'>
        <img src={logoImg} alt='bluebery-logo'/>
      </div>

<div className='navlinks'>
    <ul>
        <Link to='' className='linkstyle-disable'><li className='n-links'>Home</li></Link>
        <Link to='' className='linkstyle-disable'><li className='n-links'>About us</li></Link>
        <Link to='' className='linkstyle-disable'><li className='n-links'>Our Courses</li></Link>
        <Link to='' className='linkstyle-disable'><li className='n-links'>Gallery</li></Link>
        <Link to='' className='linkstyle-disable'><li className='n-links'>Contact us</li></Link>
    </ul>
</div>
    
<div className='nav-btn'>
    <Link to='/' className='linkstyle-disable'><p>Enquire Now</p></Link>
</div>

    </nav>
  )
}

export default Navbar
