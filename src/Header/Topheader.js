import React from 'react'
import { IoCall} from "react-icons/io5";
import { IoMdMail, IoLogoTwitter } from "react-icons/io";
import { GrFacebookOption } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
const Topheader = () => {
  return (
    <>
      <div className='tophader'>
<div className='header-content'>
<a href='tel:+91 9552886677'><p><IoCall /><span>9552886677</span></p></a>
<a href='mailto:info@blueberry.com'><p><IoMdMail /><span>info@blueberry.com</span></p></a>

<div className='social'>
<a href='https://www.facebook.com/blueberryinternationalpreschool' target='_blank' rel="noreferrer"><GrFacebookOption className='icon'/></a>
<a href='https://instagram.com/blueberry_international_ps?igshid=YmMyMTA2M2Y=' target='_blank' rel="noreferrer"><AiFillInstagram className='icon'/></a>
{/* <a href=''><IoLogoTwitter className='icon'/></a>
<a href=''><FaLinkedinIn className='icon'/></a> */}

</div>
</div>
      </div> 
    </>
  )
}

export default Topheader
