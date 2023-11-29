import React from 'react';
import logoImg from '../img/logo/logo.jpeg';
import { Link } from 'react-router-dom';
import { MdMenu } from "react-icons/md";

const Navbar = () => {


const openmenubtn=()=>{
  const storemenuID=document.getElementById('menu');
  storemenuID.classList.toggle('openmenu');


}

  return (
    <nav>
      
      <div className='logo'>
        <img src={logoImg} alt='bluebery-logo'/>
      </div>

<div className='navlinks' id='menu'>
    <ul>
        <Link to='/' className='linkstyle-disable'><li className='n-links'>Home</li></Link>
        <Link to='/about-us' className='linkstyle-disable'><li className='n-links'>About us</li></Link>
        <Link to='' className='linkstyle-disable'><li className='n-links'>Our Curriculum</li></Link>
        <Link to='' className='linkstyle-disable'><li className='n-links'>Gallery</li></Link>
        <Link to='' className='linkstyle-disable'><li className='n-links'>Contact us</li></Link>
    </ul>
</div>
    
<div className='nav-btn'>
    <Link to='/' className='linkstyle-disable'><p>Work with us</p></Link>
</div>

<div className='menubar' onClick={openmenubtn}>
 <MdMenu className='icon'/>
</div>

    </nav>
  )
}

export default Navbar
