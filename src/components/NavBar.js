import React from 'react'
import moment from 'moment/moment'
const NavBar = ({isOpen}) => {
  return (
    <>
    <div>
        <div className="bar d-flex text-white me-5 " >
          <p className='fs-4 ms-2 mt-2 mb-1'>Dashboard</p>
           <p className='mt-2 fs-4 me-3 mb-1'>{moment().format('llll')}</p>
        </div>
     </div>

     </>
  )
}

export default NavBar

