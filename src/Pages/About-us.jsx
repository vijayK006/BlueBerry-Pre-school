import React from 'react'
import Header from '../Header/Header';
import Breadcrumb from '../Components/Breadcrumb';
import { RiBookmark3Line } from "react-icons/ri";
import { GiBookAura, GiCctvCamera } from "react-icons/gi";
import { MdOutlineSevereCold } from "react-icons/md";
import { TbBooks } from "react-icons/tb";
import { BsPersonVideo3 } from "react-icons/bs";
import { FaToilet } from "react-icons/fa";
import { AiFillSafetyCertificate } from "react-icons/ai";

import Footer from '../Components/Footer';
import about1us from '../img/about-11.webp';
import about2us from '../img/about-12.webp';

import busImg from '../img/school-bus.png';
import Quickcontact from '../Components/Quickcontact';

const AboutUs = () => {
  return (
    <>
    <Header/>
<Breadcrumb pageName="About us" PageHeader="The one-stop for a better future of your child"></Breadcrumb>

{/* About Us Section */}
<div className='overflow-hidden bg-blue  pt-5 '>
  <section className="container position-relative pt-5 pb-5">
<div className="row">

<div className='col-md-5'>

<div className="about-content">
<h5 className='default-font pb-1'>ABOUT US</h5>
<h3 className='default-font pb-2'>Nurturing Bright Futures Through  <span  style={{color:"rgb(255 148 0)", fontWeight:"550"}}> Parent-Child Engagement</span></h3>

<p className='default-font'>Here is to encourage the child to achieve their best and to lay the foundation on which their
future learning is built, we believe a child learns best when he/she feels secured and a comfort
zone and activity involved are interesting and enjoyable, we also aim in free interactions with the
parent for any queries related to school or the child. Finally, a prospectus cannot answer all the
questions formed in a parent's mind, but for a better insight view, we would suggest you visit
school premises cause seeing is believing.
</p>
 
<div className='row'>
  <div className='col-12'>
 <p className='default-font pt-3'><b>Our Values</b></p>
 <div className='row'>
  <div className='col-md-4 col-6'>
    <ul>
      <div className='d-flex gap-1 align-items-center'>
<RiBookmark3Line className='icon'/><li>Aspirations</li>
      </div>

      <div className='d-flex gap-1 align-items-center'>
<RiBookmark3Line className='icon'/><li>Aspirations</li>
      </div>

  
    </ul>
  </div>
  <div className='col-md-4 col-6'>
    <ul>
      <div className='d-flex gap-1 align-items-center'>
<RiBookmark3Line className='icon'/><li>Integrity</li>
      </div>

      <div className='d-flex gap-1 align-items-center'>
<RiBookmark3Line className='icon'/><li>Kindness</li>
      </div>
  
    </ul>
  </div>

  <div className='col-md-4 col-6'>
    <ul>
    <div className='d-flex gap-1 align-items-center'>
<RiBookmark3Line className='icon'/><li>Creativity</li>
      </div>

      <div className='d-flex gap-1 align-items-center'>
<RiBookmark3Line className='icon'/><li>Respect</li>
      </div>
    </ul>
  </div>
 </div>
  </div>
 </div>



</div>



</div>

<div className='col-md-7 position-relative'>
<img src={about1us} className='section-img3' alt='img'/>
<img src={about2us} className='section-img3-contain' alt='img'/>
</div>
</div>


<div className='shape-ovel'/>
<div className='shape-ovel2'/>
</section>
</div>

{/* Why Choose Us */}

<section className='whychoose pt-5 pb-5 '>
  <div className='container'>

  <div className='tagline-header pb-5'>
  <h2 className='text-center default-font'>Why Choose Us</h2>
  {/* underline */}
<div className='d-flex justify-content-center align-items-center'>
  <div className='underline'/>
  <GiBookAura className='underline-book'/>
  <div className='underline'/>
</div>

{/* tagline content */}
<div className='d-flex justify-content-center pt-4 default-font'>
  <p className='header-tagline text-center'>Cultivating Individuality: A Holistic, Playful Learning Journey</p>
</div>
</div>

<div className='row'>

  <div className='col-row-5 px-3 py-4'>
    <div className='why-card'>
<div className='icon-bg'>
  <div className='iconw fantasies-icon'/>

</div>

<p className='default-font'>From fantasies to grounded realities</p>
    </div>
  </div>

  <div className='col-row-5 px-3 py-4'>
    <div className='why-card'>
<div className='icon-bg'>
  <div className='iconw process-icon'/>

</div>

<p className='default-font '>Focus on the process, no tests, no grades</p>
    </div>
  </div>

  <div className='col-row-5 px-3 py-4'>
    <div className='why-card'>
<div className='icon-bg'>
  <div className='iconw reality-icon'/>

</div>

<p className='default-font'>Reality oriented</p>
    </div>
  </div>

  <div className='col-row-5 px-3 py-4'>
    <div className='why-card'>
<div className='icon-bg'>
  <div className='iconw child-icon'/>

</div>

<p className='default-font'> Recognition of sensitive periods in each
  causes each being is different.</p>
    </div>
  </div>

  <div className='col-row-5 px-3 py-4'>
    <div className='why-card'>
<div className='icon-bg'>
  <div className='iconw speak-icon'/>

</div>

<p className='default-font'> Liberty to speak (as he/she pleases)</p>
    </div>
  </div>

  <div className='col-row-5 px-3 py-4'>
    <div className='why-card'>
<div className='icon-bg'>
  <div className='iconw focus-icon'/>

</div>

<p className='default-font'>  Focus on the development of a child wholesome person</p>
    </div>
  </div>

  <div className='col-row-5 px-3 py-4'>
    <div className='why-card'>
<div className='icon-bg'>
  <div className='iconw roleplay-icon'/>

</div>

<p className='default-font '>More roleplay based criteria</p>
    </div>
  </div>

  <div className='col-row-5 px-3 py-4'>
    <div className='why-card'>
<div className='icon-bg'>
  <div className='iconw minds-icon'/>

</div>

<p className='default-font'>Belief in nurturing and enriching young minds</p>
    </div>
  </div>

  <div className='col-row-5 px-3 py-4'>
    <div className='why-card'>
<div className='icon-bg'>
  <div className='iconw creativity-icon'/>

</div>

<p className='default-font'>Creativity based on young minds</p>
    </div>
  </div>

  <div className='col-row-5 px-3 py-4'>
    <div className='why-card'>
<div className='icon-bg'>
  <div className='iconw knowledge-icon'/>

</div>

<p className='default-font'>Aiming in precise  through
 each child grasping potentials</p>
    </div>
  </div>
</div>

  </div>
</section>

{/* Day Care */}
<div className='overflow-hidden bg-blue  pt-5 '>
  <section className="container position-relative pt-5 pb-5">
<div className="row">
<div className='col-md-6 position-relative'>
<img src={busImg} className='section-img3' alt='img'/>
{/* <img src={about2us} className='section-img3-contain' alt='img'/> */}
</div>

<div className='col-md-6'>

<div className="about-content">
<h5 className='default-font pb-1'>DAY CARE</h5>
<h3 className='default-font pb-2'>Transport   <span  style={{color:"rgb(255 148 0)", fontWeight:"550"}}>facility</span></h3>

<p className='default-font'>The need for safety of every child is our criteria and to ensure safe travel we have trained and
personally sensitized to the needs of kids. For supervision and monitoring, we have an
attendant on board throughout their journey with mobile phones for better efficiency and
communication. Besides we ensuring safety norms all staff is well trained in first aid and
emergency management and to add up values we see no child is handed over to the unknown
person to anyone without the parent/guardian ID card must be produced at the time of pickup
and CCTV cameras and a fire extinguisher in every bus.

</p>

</div>



</div>


</div>


<div className='shape-ovel'/>
<div className='shape-ovel2'/>
</section>
</div>

<div className='container pt-5 pb-5'>
  <div className='row'>

    <div className='col-md-4 col-12 p-2'>
    <div className='day-card shadow'>
    <MdOutlineSevereCold className='icon'/>
    <p className='default-font pt-2'>Fully air conditioner classes</p>
    </div>
    </div>

    <div className='col-md-4 col-12 p-2'>
    <div className='day-card shadow'>
    <GiCctvCamera  className='icon'/>
    <p className='default-font pt-2'>CCTV cameras in entire space areas</p>
    </div>
    </div>

    <div className='col-md-4 col-12 p-2'>
    <div className='day-card shadow'>
    <TbBooks className='icon'/>
    <p className='default-font pt-2'>Well stocked Libary</p>
    </div>
    </div>

    <div className='col-md-4 col-12 p-2'>
    <div className='day-card shadow'>
    <BsPersonVideo3  className='icon'/>
    <p className='default-font pt-2'>Digital learning experience in each classroom</p>
    </div>
    </div>

    <div className='col-md-4 col-12 p-2'>
    <div className='day-card shadow'>
    <FaToilet className='icon'/>
    <p className='default-font pt-2'>Hygienic Toilets with attendees</p>
    </div>
    </div>

    <div className='col-md-4 col-12 p-2'>
    <div className='day-card shadow'>
    <AiFillSafetyCertificate className='icon'/>
    <p className='default-font pt-2'>Finger guard on all doors for child safety</p>
    </div>
    </div>

  </div>
</div>

<Quickcontact/>

<Footer/>
    </>
  )
}

export default AboutUs;
