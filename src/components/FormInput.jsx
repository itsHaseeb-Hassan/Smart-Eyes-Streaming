import React from 'react'

const FormInput = ({type,text}) => {
  return (
    <div>
        <div className="form-group mt-2 text-center">
                                <label className="form-control-label text-white fs-6 ">{text}</label>
                                <input type={type} className="form-control input"/>
                            </div>
    </div>
  )
}

export default FormInput