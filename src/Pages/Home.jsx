import React from 'react'
import Header from '../Header/Header'
import Banner from '../Components/Banner'
import { GiBookAura } from "react-icons/gi";
import { FaCheck } from "react-icons/fa6";

import sectionkidImg from '../img/kid-2.webp';

const Home = () => {
  return (
    <>
    <Header/>
    <Banner/>

{/* Our Top Classes Section*/}
<section className='top-class  mt-5 pt-md-5  pb-md-5 pt-2 pb-2'>
<div className='tagline-header pb-5'>
  <h2 className='text-center default-font'>Our Top Classes</h2>
  {/* underline */}
<div className='d-flex justify-content-center align-items-center'>
  <div className='underline'/>
  <GiBookAura className='underline-book'/>
  <div className='underline'/>
</div>

{/* tagline content */}
<div className='d-flex justify-content-center pt-4 default-font'>
  <p className='header-tagline text-center'>Unleashing Creativity, Joy, and 
Excellence in Our Top Preschool Classes – 
Where Every Child's Potential Blossoms!</p>
</div>


</div>

<div className="container">
<div className='row'>

  <div className='col-md-4 pt-2 pb-2'>
    <div className="class-card">
      <div className='social-science'/>
      <p className='class-t-name'>Social Science</p>
    </div>
  </div>

  <div className='col-md-4 pt-2 pb-2'>
    <div className="class-card">
      <div className='social-science'/>
      <p className='class-t-name'>Science</p>
    </div>
  </div>

  <div className='col-md-4 pt-2 pb-2'>
    <div className="class-card">
      <div className='social-science'/>
      <p className='class-t-name'>Mathematics</p>
    </div>
  </div>

  <div className='col-md-4 pt-2 pb-2'>
    <div className="class-card">
      <div className='social-science'/>
      <p className='class-t-name'>English</p>
    </div>
  </div>

  <div className='col-md-4 pt-2 pb-2'>
    <div className="class-card">
      <div className='social-science'/>
      <p className='class-t-name'>Hindi</p>
    </div>
  </div>

  <div className='col-md-4 pt-2 pb-2'>
    <div className="class-card">
      <div className='social-science'/>
      <p className='class-t-name'>Marathi</p>
    </div>
  </div>

</div>
</div>
</section>

{/* About Us Section */}
<div className='bg-blue'>
  <section className="container position-relative pt-5 pb-5">
<div className="row">
<div className='col-md-6'>
<img src={sectionkidImg} className='section-img1' alt='img'/>
</div>
<div className='col-md-6'>

<div className="about-content">
<h5 className='default-font pb-1'>About us</h5>
<h3 className='default-font pb-2'>Welcome to <span  style={{color:"#272974", fontWeight:"550"}}>Blue Berry International School</span></h3>

<p className='default-font'>At Blue Berry International School, we believe that every child's
 journey in education is a unique and exciting adventure.
 We invite you to be a part of the Blue Berry family, where education is not 
 just a process but a journey filled with discovery and growth. </p>
 
 <ul>
  <li><FaCheck className="icon"/> Innovative Teaching Methods</li>
  <li><FaCheck className="icon"/> Qualified Educators</li>
  <li><FaCheck className="icon"/> Safe and Stimulating Environment</li>
  <li><FaCheck className="icon"/> Interactive Learning Resources</li>
 </ul>
</div>



</div>
</div>

<div className='shape-kite'/>
<div className='shape-book'/>
<div className='shape-ovel'/>
<div className='shape-ovel2'/>
</section>
</div>

    </>
  )
}

export default Home;
