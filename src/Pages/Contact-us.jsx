import React from 'react'
import Header from '../Header/Header';
import Breadcrumb from '../Components/Breadcrumb';
import { SiGooglemaps } from "react-icons/si";
import { IoCallSharp } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";

const ContactUs = () => {
  return (
    <>
     <Header/>
     <Breadcrumb pageName="Contact us" PageHeader="Contact us now for more details about our school."></Breadcrumb> 
    
    <div className='container'>
        <div className='row'>
            <div className='col-md-4 col-12'>

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
            </div>

            </div>
            <div className='col-md-8 col-12'></div>
        </div>
    </div>
    
    
    
    </>
  )
}

export default ContactUs;
