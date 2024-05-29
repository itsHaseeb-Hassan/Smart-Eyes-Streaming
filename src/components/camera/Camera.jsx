import React from 'react'
import cameraData from './CameraData.json'
import { Link } from 'react-router-dom'

const Camera = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row w-100 d-flex flex-wrap">
          {
            cameraData.map((item, id) => {
              return (
                <div className="site-boxes mt-5 me-2" key={id}>
                  <i className="fa fa-pencil text-success fs-5 d-flex justify-content-end site-icon"></i>
                  <p className='p-0 m-0 ms-5 text-white fs-4 site-paragraph'>{item.Camera_Name}</p>
                  <span className='p-0 m-0 ms-5 text-white site-span'>Location: {item.Location}</span>
                  <i className="fa fa-trash fs-5 text-warning mt-4 d-flex justify-content-end site-icon" aria-hidden="true"></i>
                </div>
              )
            })
          }
          <div className="site-boxes mt-5 me-2 borders p-0 m-0">
            <Link to="/AddCamera" className='text-decoration-none'>
              <div className='text-center h-100'>
                <p className='m-0 p-0 text-white fs-4 mt-5 site-paragraph'>Add Camera</p>
                <p className='fs-1 text-white site-paragraph'>+</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Camera
