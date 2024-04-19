import React from 'react'
import FormInput from '../FormInput'
const AddSite = () => {
  return (
    <>
         <div className="container-fluid mt-5 ms-5 boxesInput">
      <div className="row d-flex">
        <div className="col-sm-12 col-md-4 mb-3">
            <FormInput type="text" text="Site Name"/>
        </div>
        <div className="col-sm-12 col-md-4 mb-3">
            <FormInput type="text" text="Site Address"/>
        </div>
        <div className="col-sm-12 col-md-4 mb-3">
            <FormInput type="Number" text="Site Phone Number"/>
        </div>
    </div>
    </div>
    <div>
    <button
              type="button"
              className=" btn logout-btn w-25 h-25 mt-3 text-white fs-5 ms-5 "
            >
              Save
            </button>
            </div>
    </>
  )
}

export default AddSite