import React from 'react';
import divImg1 from '../img/kid-1.webp';
import divImg2 from '../img/kid-2.webp';

const Quickcontact = () => {
  return (
    <>
     <section className='cloud-bg-pink p-top-80 overflow-hidden pb-1'>
<div className='container-fluid'>
  <div className='row'>

  <div className='col-md-3 col-sm-none position-relative'>
<img src={divImg1} alt='' className='div-img1'/>

<div className='icon-book'/>
<div className='icon-lab'/>
  </div>

  <div className='col-md-6 col-12'>
    <h3 className='default-font text-center pt-5'>Get In Touch With Us With Our </h3>
  
  <div className='d-flex justify-content-center align-items-center gap-3 pt-5 mt-5 flex-md-nowrap  flex-wrap'>
    <a href='mailto:info@blueberry.com' className='linkstyle-disable'><p className='contact-links'>info@blueberry.com</p></a>
    <div className='resp d-flex justify-content-center'>
         <div className='circle-con'>
    <p className='circle-or'>or</p>
    </div>
    </div>
   
    <a href='tel:+91 9552886677' className='linkstyle-disable'><p className='contact-links'>9552 886 677</p></a>
  </div>

  </div>

  <div className='col-md-3 col-sm-none position-relative'>
<img src={divImg2} alt='' className='div-img2'/>

<div className='icon-book'/>
<div className='icon-lab'/>
  </div>

</div>
</div>

</section> 
    </>
  )
}

export default Quickcontact
