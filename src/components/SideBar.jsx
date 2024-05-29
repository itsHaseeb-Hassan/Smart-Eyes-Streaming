import React from 'react';
import { Link } from 'react-router-dom';
const SideBar = ({isOpen,setIsOpen}) => {
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className="icon">
        <i className="fa fa-bars fs-3" onClick={toggleSidebar}></i>
      </div>
      <div className={`container ${isOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        <div className="row">
          <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
            <div className="bg">
              <ul>
                <li className='fs-3 text-warning ms-4'>
                  SMARTEYES
                </li>
                <Link className='list-style' to="/Dashboard"> <li className='sidebar-list'>Dashboard</li></Link>
                <Link className='list-style' to="/Site"><li className='sidebar-list'>Sites</li></Link> 
                <Link className='list-style' to="/Camera"><li className='sidebar-list'>Camera</li></Link>
                <Link className='list-style' to="/LiveStreaming"><li className='sidebar-list'>LiveStream</li></Link>
                <Link className='list-style'><li className='sidebar-list'>License</li></Link> 
                <Link className='list-style' to="/Account"><li className='sidebar-list'>My Account</li></Link> 
                <div className=" fs-5 mt-5 " style={{backgroundColor:"aliceblue"}}>Logout Account</div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;