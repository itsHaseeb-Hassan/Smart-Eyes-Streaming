import React from 'react';

const Account = () => {
  return (
    <div className="container-fluid mt-5">
      <div className="row w-100 ">
        <div className="col-sm-12 col-md-6 first-box d-flex">
          <div className='mt-3' style={{width:"300px"}}>
            <div className='d-flex'>
               <img src="images/avatar.png" alt="image-not-display" className='image-avatar rounded-circle' />
               <span className='ms-2 mt-5 text-white' style={{fontSize:"18px"}}>Haseeb Hassan</span>
               </div>
               <div className='d-flex flex-column'>
               <p className='text-white mb-0 fs-6'>Email:</p>
               <span className='text-white fs-6'>haseebansare19@gmail.com</span>
            
               </div>
        </div>
        <div className=' d-flex flex-column justify-content-between' style={{width:"300px"}}>
        <i className="fa fa-pencil fs-3 text-warning mt-4 d-flex justify-content-end"></i>
        <div>
               <p className='text-white mb-0 fs-6'>Contact Number:</p>
               <span className='text-white fs-6'>03061747322</span>
               </div>
      </div>
        </div>
        <div className="col-sm-12 col-md-6 second-box">
          <span className='text-white border border-bottom ms-0'>Activity Log</span>
      </div>
      </div>
    </div>
  );
};

export default Account;