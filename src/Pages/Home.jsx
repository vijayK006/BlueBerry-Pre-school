import React from 'react'
import Header from '../Header/Header'
import Banner from '../Components/Banner'
import { GiBookAura } from "react-icons/gi";

const Home = () => {
  return (
    <>
    <Header/>
    <Banner/>

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
  <div className='col-md-4'>
    <div className="class-card">
      <div className='social-science'/>
      <p className='class-t-name'>Social Science</p>
    </div>
  </div>
</div>
</div>


</section>

    </>
  )
}

export default Home;
