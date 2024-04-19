import React from 'react'
import FormInput from '../FormInput'
const AddCamera = () => {
  return (
    <>
       <div className="container-fluid mt-5 ms-5 boxesInput">
      <div className="row d-flex">
        <div className="col-sm-12 col-md-4 mb-3">
            <FormInput type="text" text="Name For The Camera"/>
        </div>
        <div className="col-sm-12 col-md-4 mb-3">
            <FormInput type="text" text="Camera Project"/>
        </div>
        <div className="col-sm-12 col-md-4 mb-3">
            <FormInput type="text" text="Camera URL"/>
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

export default AddCamera