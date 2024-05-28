import React from 'react'
import siteData from './SiteData.json'
import { Link } from 'react-router-dom'
const Site = () => {
  return (
    <>
    <div className="container-fluid">
        <div className="row w-100">
        {
            siteData.map((item,id)=>{
               return(
                <>
                <div className="site-boxes mt-5 me-2" key={id}>
                <i className="fa fa-pencil text-success fs-5 d-flex justify-content-end site-icon"></i>
                    <p className='p-0 m-0 ms-5 text-white fs-4 site-paragraph'>{item.Site_Name}</p>
                    <span className='p-0 m-0 ms-5 text-white site-span'>No-of-cameras:{item.Cameras}</span>
                    <i className="fa fa-trash fs-5 text-warning mt-4 d-flex justify-content-end site-icon" aria-hidden="true"></i>
                </div>
                </>
                )})
        }
        <Link to="/AddSite" className='text-decoration-none'>
            <div className='site-boxes borders mt-5 text-center ms-5'>
                <p className=' m-0 p-0 text-white fs-4 mt-5 site-paragraph'>Add Site</p>
                <p className='fs-1 text-white site-paragraph'>+</p>
            </div>
            </Link>
        </div>
    </div>
   
            </>
   
  )
}

export default Site