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
<a href='tel:123 4561 5523'><p><IoCall/> <span>91xx xxx xxx</span></p></a>
<a href='mailto:info@blueberry.com'><p><IoMdMail/> <span>info@blueberry.com</span> </p></a>

<div className='social'>
<a href=''><GrFacebookOption className='icon'/></a>
<a href=''><AiFillInstagram className='icon'/></a>
<a href=''><IoLogoTwitter className='icon'/></a>
<a href=''><FaLinkedinIn className='icon'/></a>

</div>
</div>
      </div> 
    </>
  )
}

export default Topheader
