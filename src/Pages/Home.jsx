import React from 'react'
import Header from '../Header/Header'
import Banner from '../Components/Banner'
import { GiBookAura } from "react-icons/gi";

import sectionkidImg from '../img/kid-2.webp';

import kid1box from '../img/about-09.png';
import kid2box from '../img/about-10.png';

import { CiCloudOn } from "react-icons/ci";
import Quickcontact from '../Components/Quickcontact';
import Footer from '../Components/Footer';

const Home = () => {
  return (
    <>
    <Header/>
    <Banner/>



{/* About Us Section */}
<div className='overflow-hidden bg-blue  pt-5 '>
  <section className="container position-relative pt-5 pb-5">
<div className="row">
<div className='col-md-6 position-relative'>
<img src={kid1box} className='section-img2' alt='img'/>
<img src={kid2box} className='section-img2-contain' alt='img'/>
</div>
<div className='col-md-6'>

<div className="about-content">
<h5 className='default-font pb-1'>ABOUT OUR BLUEBERRY PRE-SCHOOL</h5>
<h3 className='default-font pb-2'>Welcome To Best  <span  style={{color:"rgb(255 148 0)", fontWeight:"550"}}>Pre-school Class Center</span></h3>

<p className='default-font'>Where we try to make sure that every child has his own way of creativity to express in an
innovative way. We inspire children to play, learn, experience, and even get messy with some
crazy fun activities... And above all, we want them to make mistakes because their every
mistake is going to be their own new reason for trying one another time.
Providing quality child care in a friendly and safe home environment.
Grab the opportunity to get your child the best of future training.</p>
 
<div className='row'>
  <div className='col-6'>
 <p className='default-font pt-3'><b>Our Vision</b></p>
<p className='default-font '>Developing innocence with a blend of aiming to sheer knowledge through practical concepts
and discipline</p>
  </div>
  <div className='col-6'>
 <p className='default-font pt-3'><b>Our Mission</b></p>
<p className='default-font '>From buds to blooming flowers</p>
  </div>
 </div>



</div>



</div>
</div>


<div className='shape-ovel'/>
<div className='shape-ovel2'/>
</section>
</div>

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

{/* Prospectus Section */}
<div className='cloud-bg p-top-80 overflow-hidden'>
  <section className="container position-relative pt-5 pb-5">
<div className="row">



<div className='col-md-6'>
<img src={sectionkidImg} className='section-img1' alt='img'/>
</div>
<div className='col-md-6'>

<div className="about-content">
<h5 className='default-font pb-1'>Prospectus</h5>
<h3 className='default-font pb-2'>Unveiling the Path to Early <span  style={{color:"rgb(255 148 0)", fontWeight:"550"}}>Education Excellence.</span></h3>

<p className='default-font'>
This prospectus is designed to give every parent an outline of our school and what all we offer
for your child.
<br/>
<br/>
Choosing the right preschool, where the basic stepping stone is built in every child is a
challenging decision for every parent of today but our prospectus over here you an insight
glance at our school. We hope you find the information useful and interesting. 
<br/>
<br/>
We strictly believe in the child-centered development education method originated from child
development theories by Italian educator Monica Montessori (1970-1952).
</p>
 

</div>



</div>
</div>

<div className='shape-kite'/>
<div className='shape-book'/>
<div className='shape-ovel'/>
<div className='shape-ovel2'/>
</section>
</div>


{/* Our Classes & Activites */}
<section className='pt-5 mt-5 pb-5 mb-5'>
  <div className='container'>
  <div className='tagline-header pb-5'>
  <h2 className='text-center default-font'>Our Events & Activities</h2>
  {/* underline */}
<div className='d-flex justify-content-center align-items-center'>
  <div className='underline'/>
  <GiBookAura className='underline-book'/>
  <div className='underline'/>
</div>

{/* tagline content */}
<div className='d-flex justify-content-center pt-4 default-font'>
  <p className='header-tagline text-center'>Will Be Happy With Our Activities</p>
</div>


</div>


<div className='row'>

  <div className='col-md-4 pt-3 pb-3'>

    <div className='activity-card'>

      <div className='icon-contain-yellow'>
      <CiCloudOn className='icon-bg-yellow'/>
<div className='circle-yellow'/>
      </div>

      <p className='default-font'> Theme based Annual<br/> celebration</p>
    </div>
    </div>

  <div className='col-md-4 pt-3 pb-3'>
    <div className='activity-card'>

<div className='icon-contain-pink'>
<CiCloudOn className='icon-bg-pink'/>
<div className='circle-pink'/>
</div>

<p className='default-font'> Annual sports meet</p>
</div></div>

  <div className='col-md-4 pt-3 pb-3'>
<div className='activity-card'>

<div className='icon-contain-rubic'>
<CiCloudOn className='icon-bg-rubic'/>
<div className='circle-rubic'/>
</div>

<p className='default-font'> Education seminar for <br/>the parent community</p>
</div></div>

  <div className='col-md-4 pt-3 pb-3'>
<div className='activity-card'>

<div className='icon-contain-green'>
<CiCloudOn className='icon-bg-green'/>
<div className='circle-green'/>
</div>

<p className='default-font'> Various circular exhibitions</p>
</div></div>

  <div className='col-md-4 pt-3 pb-3'>
<div className='activity-card'>

<div className='icon-contain-blue'>
<CiCloudOn className='icon-bg-blue'/>
<div className='circle-blue'/>
</div>

<p className='default-font'> Field trips & Excursion</p>
</div></div>

  <div className='col-md-4 pt-3 pb-3'>
<div className='activity-card'>

<div className='icon-contain-red'>
<CiCloudOn className='icon-bg-red'/>
<div className='circle-red'/>
</div>

<p className='default-font'> Movie shows</p>
</div></div>

<div className='col-md-6 pt-3 pb-3'>
<div className='activity-card'>

<div className='icon-contain-l-red'>
<CiCloudOn className='icon-bg-l-red'/>
<div className='circle-l-red'/>
</div>

<p className='default-font'> Celebration of religious festivals and<br/> important days within school premises</p>
</div></div>
 

</div>
</div>
</section>

<Quickcontact/>

<Footer/>

    </>
  )
}

export default Home;
