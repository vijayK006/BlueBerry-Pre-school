import React from 'react'
import Header from '../Header/Header';
import Breadcrumb from '../Components/Breadcrumb';
import { GiBookAura } from "react-icons/gi";

import curruculumImg from '../img/curriculum.png';
import Footer from '../Components/Footer';
import Quickcontact from '../Components/Quickcontact';

const OurCurriculum = () => {
  return (
    <>
     <Header/> 
<Breadcrumb pageName="Our Curriculum" PageHeader=" Holistic Development Curriculum"></Breadcrumb>

{/* Our Curriculum Section */}
<div className='overflow-hidden bg-blue  pt-5 '>
  <section className="container position-relative pt-5 pb-5">
<div className="row">

<div className='col-md-5'>

<div className="about-content">
<h5 className='default-font pb-1'>Our Curriculum</h5>
<h3 className='default-font pb-2'>Empowering   <span  style={{color:"rgb(255 148 0)", fontWeight:"550"}}> Young Minds</span></h3>

<p className='default-font'>Young minds have an infinite capacity to understand, grasp and master various skills
during crucial years of child development providing practice-based under the guidance of
experts
</p>
 
<div className='row cur-content'>
<div className='col-12 section-icon'>
    <div className='mentel icon'/>
    <p className='default-font'>Our curriculum is designed for young brainy minds needs where physical and mental
development is equally significant.
</p>
  </div>
  <div className='col-md-6 col-12 section-icon'>
  <div className='recognition icon'/>
  <p className='default-font'>Recognition of sensitive areas of each child</p>
  </div>
  <div className='col-md-6 col-12 section-icon'>
  <div className='liberty icon'/>
  <p className='default-font'>Liberty to speak without hesitation as he/she pleases.
</p>
  </div>


</div>



</div>



</div>

<div className='col-md-7 position-relative'>
<img src={curruculumImg} className='section-img4' alt='img'/>

</div>
</div>


<div className='shape-ovel'/>
<div className='shape-ovel2'/>
</section>
</div>


{/* Art & Craft Section*/}
<section className='top-class  mt-5 pt-md-5  pb-md-5 pt-2 pb-2'>
<div className='container tagline-header pb-3'>
  <h2 className='text-left default-font'>Art & Craft</h2>
</div>

<div className="container">
<div className='row'>

  <div className='col-md-4 pt-2 pb-2'>
    <div className="class-card">
      <div className='social-science'/>
      <p className='class-t-name'>Colouring & Painting</p>
    </div>
  </div>

  <div className='col-md-4 pt-2 pb-2'>
    <div className="class-card">
      <div className='social-science'/>
      <p className='class-t-name'>Go green with nature</p>
    </div>
  </div>

  <div className='col-md-4 pt-2 pb-2'>
    <div className="class-card">
      <div className='social-science'/>
      <p className='class-t-name'>Accessories making</p>
    </div>
  </div>

  <div className='col-md-4 pt-2 pb-2'>
    <div className="class-card">
      <div className='social-science'/>
      <p className='class-t-name'>Fun with science</p>
    </div>
  </div>

  <div className='col-md-4 pt-2 pb-2'>
    <div className="class-card">
      <div className='social-science'/>
      <p className='class-t-name'>Clay modeling</p>
    </div>
  </div>

  <div className='col-md-4 pt-2 pb-2'>
    <div className="class-card">
      <div className='social-science'/>
      <p className='class-t-name'>Storytime</p>
    </div>
  </div>

  <div className='col-md-4 pt-2 pb-2'>
    <div className="class-card">
      <div className='social-science'/>
      <p className='class-t-name'>Puppet shows</p>
    </div>
  </div>

  <div className='col-md-4 pt-2 pb-2'>
    <div className="class-card">
      <div className='social-science'/>
      <p className='class-t-name'>Puzzle-solving</p>
    </div>
  </div>

  <div className='col-md-4 pt-2 pb-2'>
    <div className="class-card">
      <div className='social-science'/>
      <p className='class-t-name'>Treasure hunt</p>
    </div>
  </div>

  <div className='col-md-4 pt-2 pb-2'>
    <div className="class-card">
      <div className='social-science'/>
      <p className='class-t-name'>Personality development</p>
    </div>
  </div>

</div>
</div>
</section>

{/* Dance Section*/}
<section className='top-class  mt-2 pt-md-1  pb-md-5 pt-2 pb-2'>
<div className='container tagline-header pb-3'>
  <h2 className='text-left default-font'>Dance</h2>
</div>

<div className="container">
<div className='row'>

  <div className='col-md-3 pt-2 pb-2'>
    <div className="class-card">
      <div className='social-science'/>
      <p className='class-t-name'>Rock & roll</p>
    </div>
  </div>

  <div className='col-md-3 pt-2 pb-2'>
    <div className="class-card">
      <div className='social-science'/>
      <p className='class-t-name'>Zumba</p>
    </div>
  </div>

  <div className='col-md-3 pt-2 pb-2'>
    <div className="class-card">
      <div className='social-science'/>
      <p className='class-t-name'>Freestyle</p>
    </div>
  </div>

  <div className='col-md-3 pt-2 pb-2'>
    <div className="class-card">
      <div className='social-science'/>
      <p className='class-t-name'>Bharatnatyam
</p>
    </div>
  </div>


</div>
</div>
</section>

{/* Fitness Section*/}
<section className='top-class  mt-2 pt-md-1  pb-md-5 pt-2 pb-2'>
<div className='container tagline-header pb-3'>
  <h2 className='text-left default-font'>Fitness</h2>
</div>

<div className="container">
<div className='row'>

  <div className='col-md-4 pt-2 pb-2'>
    <div className="class-card">
      <div className='social-science'/>
      <p className='class-t-name'>Martial arts (self-defense)</p>
    </div>
  </div>

  <div className='col-md-4 pt-2 pb-2'>
    <div className="class-card">
      <div className='social-science'/>
      <p className='class-t-name'>Meditation</p>
    </div>
  </div>

  <div className='col-md-4 pt-2 pb-2'>
    <div className="class-card">
      <div className='social-science'/>
      <p className='class-t-name'>Yoga</p>
    </div>
  </div>

</div>
</div>
</section>

{/* Other Activites Section*/}
<section className='top-class  mt-2 pt-md-1  pb-md-5 pt-2 pb-2'>
<div className='container tagline-header pb-3'>
  <h2 className='text-left default-font'>Other Activity</h2>
</div>

<div className="container">
<div className='row'>

  <div className='col-md-4 pt-2 pb-2'>
    <div className="class-card">
      <div className='social-science'/>
      <p className='class-t-name'>Abacus & Vedic maths</p>
    </div>
  </div>

  <div className='col-md-4 pt-2 pb-2'>
    <div className="class-card">
      <div className='social-science'/>
      <p className='class-t-name'>Others Coming Soon ...</p>
    </div>
  </div>

</div>
</div>
</section>
<Quickcontact/>
<Footer/>
    </>
  )
}

export default OurCurriculum;