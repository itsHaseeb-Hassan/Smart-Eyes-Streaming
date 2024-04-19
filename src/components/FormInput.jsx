import React from 'react'

const FormInput = ({type,text,styles,onChange,name}) => {
  return (
    // <div>
    //     <label className="form-control-label text-white fs-6 ">{text}</label>
    //      <input type={type} className="form-control input"/>
    //       </div>
    <div className="mb-0">
  <label  className="form-label text-white fs-6 mt-2">{text}</label>
  <input type={type} className="form-control" name={name} style={styles} onChange={onChange}/>
</div>
  )
}

export default FormInput