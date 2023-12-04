import React from 'react'
import Header from '../Header/Header';
import Breadcrumb from '../Components/Breadcrumb';
import { SiGooglemaps } from "react-icons/si";
import { IoCallSharp } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";



import Footer from '../Components/Footer';

const ContactUs = () => {
  return (
    <>
     <Header/>
     <Breadcrumb pageName="Contact us" PageHeader="Contact us now for more details about our school."></Breadcrumb> 
    
    <div className='container pb-5'>
        <div className='row align-items-center'>
            <div className='col-md-5 col-12'>

            <div className="contact-content">
            <h2 className='default-font font-700 pt-5'>We're Always Eager to Hear From You!</h2>

            <h5 className='pt-5 default-font'>Address</h5>
<div className='row'>
<div className='col-2'>
<SiGooglemaps className='icon mt-3'/>
</div>
<div className='col-10'>
 <p className='pt-2 default-font'><b>Branch 1</b> : Gera villa no. 2,    
          next to Jain temple, Near Shree Krishna Hotel Chowk,
           Viman nagar, Pune - 411014</p>
</div>
          
</div>

<div className='row'>
<div className='col-2'>
<IoCallSharp className='icon'/>
</div>
<div className='col-10'>
<a href='tel:+919552886677' className='linkstyle-disable default-font'>(+91) 9552 886 677</a>
</div>
            </div>

            <br/>


 <div className='row'>
<div className='col-2'>
<IoMdMail className='icon'/>
</div>
<div className='col-10'>
<a href='mailto:blueberryinternationalvn@gmail.com' className='linkstyle-disable default-font'>blueberryinternationalvn@gmail.com</a>
</div>
            </div>
<hr/>

<div className='row'>
<div className='col-2'>
<SiGooglemaps className='icon mt-3'/>
</div>
<div className='col-10'>
 <p className='pt-2 default-font'><b>Branch 2 :</b> A8 - A9, SSR Tower, Kharadi South Main Road, beside EON School, Kharadi, Pune, Maharashtra 411014</p>
</div>
          
</div>


<div className='row'>
<div className='col-2'>
<IoCallSharp className='icon'/>
</div>
<div className='col-10'>
<a href='tel:+917066113325' className='linkstyle-disable default-font'>(+91) 7066 113 325</a>
</div>
            </div>
<br/>


<div className='row'>
<div className='col-2'>
<IoMdMail className='icon'/>
</div>
<div className='col-10'>
<a href='mailto:Blueberryintkharadi@gmail.com' className='linkstyle-disable default-font'>Blueberryintkharadi@gmail.com</a>
</div>
            </div>

            <hr/>

            <div className='social-l gap-3'>

<a href='https://www.facebook.com/blueberryinternationalpreschool' target='_blank' rel='noreferrer'>
            <div className='social-bg'>
            <div className='bg-round'/>
          <FaFacebookSquare className='icons'/>
            </div>
</a>


<a href='https://instagram.com/blueberry_international_ps?igshid=YmMyMTA2M2Y=' target='_blank' rel='noreferrer'>
       <div className='social-bg'>
            <div className='bg-round'/>
<RiInstagramFill className='icons'/>
            </div>
</a>
       
            
            </div>
            </div>

            </div>

<div className='col-md-1 col-12'/>

            <div className='px-md-5 col-md-6 col-12 pt-5'>

<div className='contactform-card shadow pt-5'>
<h5>Get In Touch</h5>
<p className='pt-2'>Fill out this form for booking a consultant advising session.</p>

<form>

<div className='col-12 pt-1 pb-2'>
  <input type='text' className='form-control default-font' placeholder='Please enter name'/>
  </div>

  <div className='col-12 pt-1 pb-2'>
  <input type='email' className='form-control default-font' placeholder='Please enter email'/>
  </div>

  <div className='col-12 pt-1 pb-2'>
  <input type='number' className='form-control default-font' placeholder='Please enter Phone number'/>
  </div>

  <div className='col-12 pt-1 pb-2'>
  <textarea type='text' rows="4" cols="4" className='form-control default-font' placeholder='Please enter your messsage'></textarea>
  </div>

  <input type="button" className='btn btn-primary default-font mt-3' value="Submit"/>

</form>
</div>
            </div>
        </div>
    </div>

    {/* School Maps */}
<div className='container-fluid'>
  <div className='row'>
    <div className='col-md-12 col-12'>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.1670418880526!2d73.9197303!3d18.566506399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c14444cc073f%3A0x3fa512e6714dc976!2sBLUEBERRY%20INTERNATIONAL%20PRESCHOOL!5e0!3m2!1sen!2sin!4v1701670071176!5m2!1sen!2sin" className='map-resp' allowfullscreen="" title='school_map' loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </div>
</div>
    <Footer/>
    
    
    
    </>
  )
}

export default ContactUs;
