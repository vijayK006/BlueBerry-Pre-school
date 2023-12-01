import React from 'react'
import Header from '../Header/Header';
import Breadcrumb from '../Components/Breadcrumb';
import { SiMinds } from "react-icons/si";

const OurCurriculum = () => {
  return (
    <>
     <Header/> 
<Breadcrumb pageName="Our Curriculum" PageHeader="Empowering Young Minds: Holistic Development Curriculum"></Breadcrumb>

{/* Our Curriculum Section */}
<div className='container pt-5 pb-5'>
    <div className='row'>
        <div className='col-md-3 col-12'>
<div className='cur-card shadow'>
<div className='try-box'>
<SiMinds className='icon'/>
</div>

<p className='default-font'>Our curriculum is designed for young brainy minds needs where physical and mental
development is equally significant.
</p>
</div>
        </div>
    </div>
</div>
    </>
  )
}

export default OurCurriculum;