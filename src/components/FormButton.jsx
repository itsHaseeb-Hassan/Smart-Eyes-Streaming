import React from 'react'

const FormButton = ({text}) => {
  return (
    <div>
          <div className=" col-xl-12 col-lg-12 col-md-12 col-sm-12 text-center mt-4 mx-auto">
                                    <button type="submit" className="btn btn-success input">{text}</button>
                                </div>
    </div>
  )
}

export default FormButton