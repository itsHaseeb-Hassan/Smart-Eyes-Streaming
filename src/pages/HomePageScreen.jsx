import React,{useState} from 'react'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
import { Outlet } from 'react-router-dom'

const HomePageScreen = () => {
    const[isOpen,setIsOpen]=useState(true)
  return (
    <>
    <div className='d-flex'>
        <SideBar isOpen={isOpen} setIsOpen={setIsOpen}/>
        <div className={` w-100 ${isOpen? "bars-open":"bars-closed"}`}>
        <NavBar isOpen={isOpen} />
        <Outlet />
    </div>
        </div>
        </>
  )
}

export default HomePageScreen