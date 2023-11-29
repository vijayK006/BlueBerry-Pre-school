import React from 'react'
import { Link } from 'react-router-dom'

const Breadcrumb = ({pageName, PageHeader}) => {
  return (
    <>
      <div className='bread-crub'>
    <div className='container'>
    <div className='bread-content'>
      <h1 >{PageHeader}</h1>

        <span><Link to='/' className='linkstyle-disable' style={{color:"black"}}>Home</Link> / {pageName}</span>
    </div>
        
    </div>
    <div className='bg-blur'/>
    <div className='bg-overlay-black'/>
</div>
    </>
  )
}

export default Breadcrumb;
