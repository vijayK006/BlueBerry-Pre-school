import React from 'react';
import bannerimg from '../img/kid-3.webp';
import { Link } from 'react-router-dom';
import { MdVideoSettings } from "react-icons/md";
import { FaPersonChalkboard } from "react-icons/fa6";
import { PiCertificate } from "react-icons/pi";
import { BsPeople } from "react-icons/bs";
import Enquireform from './Enquireform';


const Banner = () => {

const openFormModule=()=>{
  document.getElementById('formModule').classList.add('togglemodel');

}

  return (
    <>
    <div className='mainbanner overflow-hidden'>
        <div className='container'>
<div className='row py-5 align-items-center' >
    <div className='col-md-7'>
    <div className='banner-content'>
     <div className='shape1'/>
    <div className='shape-round-yellow'/>


         <h1>Welcome To, <span style={{color:"#272974"}}>BLUEBERRY INTERNATIONAL PRE-SCHOOL.</span></h1>

<h2 className='default-font'> Innocence Strives for Excellence</h2>

        <p>We believe in nurturing and enriching young minds and souls and more emphasis on looking
beyond the parameters of bookish education because we know the basics of child minds.
As a child does something not because the teacher told but an inner curiosity in him/her the
desire to do it.</p> 

        <Link className="banner-btn default-font" onClick={openFormModule}>Enroll Now</Link>

       

    </div>
       
    </div>
    <div className='col-md-5'>
    <div className='d-flex justify-content-end' style={{width:"100%"}}>
    <img src={bannerimg} className='banner1' alt='img-not-found'/>
    <div className='shape-round-blue'/>
    </div>
    </div>
</div>
      </div>
    </div>
 
<div className='tagline-section py-4'>
<div className='container'>
  <div className='row'>

    <div className='col-md-3 col-12 border-right pt-md-1 mb-md-1 pt-3 pb-3'>
      <div className='heightlight-card'>
<MdVideoSettings className='icon'/>
<div className='heightlight-content'>
  <p>Schoool</p>
<h5>Events</h5>
</div>
      </div>

    </div>

    <div className='col-md-3 col-12 border-right pt-md-1 mb-md-1 pt-3 pb-3'>
      <div className='heightlight-card'>
<FaPersonChalkboard className='icon'/>
<div className='heightlight-content'>
  <p>School </p>
<h5>Gallery</h5>
</div>
      </div>

    </div>

    <div className='col-md-3 col-12 border-right pt-md-1 mb-md-1 pt-3 pb-3'>
      <div className='heightlight-card'>
<PiCertificate className='icon'/>
<div className='heightlight-content'>
  <p>Our</p>
<h5>Certification</h5>
</div>
      </div>

    </div>

    <div className='col-md-3 col-12  pt-md-1 mb-md-1 pt-3 pb-3'>
      <div className='heightlight-card'>
<BsPeople className='icon'/>
<div className='heightlight-content'>
  <p>Staff</p>
<h5>Details</h5>
</div>
      </div>

    </div>

  </div>
</div>
</div>
<Enquireform /> 
    </>
  )
}

export default Banner
