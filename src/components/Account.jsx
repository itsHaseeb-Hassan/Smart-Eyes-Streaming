import React from 'react';
import { Link } from 'react-router-dom';

const Account = () => {
  return (
    <div className="container-fluid mt-5">
      <div className="row w-100 ">
        <div className="col-sm-12 col-md-6 first-box ms-5 d-flex">
          <div className='mt-3' style={{width:"300px"}}>
            <div className='d-flex'>
               <img src={`images/avatar.png`} className='image-avatar rounded-circle' />
               <span className='ms-2 mt-5 text-white' style={{fontSize:"18px"}}>Haseeb Hassan</span>
               </div>
               <div className='d-flex flex-column'>
               <p className='text-white mb-0 fs-6'>Email:</p>
               <span className='text-white fs-6'>haseebansare19@gmail.com</span>
            
               </div>
        </div>
        <div className=' d-flex flex-column justify-content-between' style={{width:"300px"}}>
          <Link to="/UpdateAccount" className='text-decoration-none'>
        <i className="fa fa-pencil fs-3 text-warning mt-4 d-flex justify-content-end"></i>
        </Link>
        <div>
               <p className='text-white mb-0 fs-6'>Contact Number:</p>
               <span className='text-white fs-6'>03061747322</span>
               </div>
      </div>
        </div> 
        <div className="col-sm-12 col-md-6 second-box p-0">
          <p className='text-white  activity-border '>
            <span className='fs-3 ms-5'>Activity Log</span>
          </p>
          <p className='fs-6 activity-border ms-5 me-5'>
          <i class="fa fa-circle text-success" aria-hidden="true"></i>
           <span className='ms-2 text-white fs-5'>User Logged In</span> 
            </p>
            <p className='fs-6 activity-border  ms-5 me-5'>
            <i class="fa fa-circle text-warning" aria-hidden="true"></i>
           <span className='ms-2 text-white fs-5 '>changes The Settings</span> 
            </p>
            <p className='fs-6 activity-border  ms-5 me-5'>
            <i class="fa fa-circle text-danger" aria-hidden="true"></i>
           <span className='ms-2 text-white fs-5 '>Updated Profile Picture</span> 
            </p>
            <p className='fs-6 activity-border  ms-5 me-5'>
            <i class="fa fa-circle text-info" aria-hidden="true"></i>
           <span className='ms-2 text-white fs-5'>Lorem Ipsum</span> 
            </p>
            <p className='fs-6 activity-border  ms-5 me-5'>
            <i class="fa fa-circle text-primary" aria-hidden="true"></i>
           <span className='ms-2 text-white fs-5'>Lorem Ipsum</span> 
            </p>
            <p className='fs-6 activity-border  ms-5 me-5'>
            <i class="fa fa-circle text-warning" aria-hidden="true"></i>
           <span className='ms-2 text-white fs-5'>Lorem Ipsum</span> 
            </p>
      </div>
      </div>
    </div>
  );
};

export default Account;