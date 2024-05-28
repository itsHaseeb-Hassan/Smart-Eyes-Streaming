import React from 'react'
import './App.css'
import ForgotPageScreen from './pages/ForgotPageScreen';
import LoginPageScreen from './pages/LoginPageScreen';
import { Routes,Route } from 'react-router-dom';
import VerificationPageScren from './pages/VerificationPageScren';
import ChangePasswordPageScreen from './pages/ChangePasswordPageScreen';
import HomePageScreen from './pages/HomePageScreen';
import Account from './components/Account';
import UpdateAccount from './components/UpdateAccount';
import Site from './components/site/Site';
import Camera from './components/camera/Camera';
import AddSite from './components/site/AddSite';
import AddCamera from './components/camera/AddCamera';
import Dasboard from './components/Dasboard';
import LiveStreaming from './components/LiveStreaming';
import SignupPageScreen from './pages/SignupPageScreen';

function App() {

  return (
    <>
     <div>
      <Routes>
    <Route exact  path="/" element={<HomePageScreen />}>
      <Route path="/Dashboard" element={<Dasboard />} />
      <Route path="/Account" element={<Account />}/>
      <Route path="/UpdateAccount" element={<UpdateAccount />}/>
      <Route path="/Site" element={<Site />}/>
      <Route path="/Camera" element={<Camera />} />
      <Route path="/AddSite" element={<AddSite />} />
      <Route path="/AddCamera" element={<AddCamera />} />
      <Route path="/LiveStreaming" element={<LiveStreaming />} />
    </Route>
        <Route path="/login" element={<LoginPageScreen />}/>
        <Route path="/Signup" element={<SignupPageScreen />}/>
        <Route path='/Forgot' element={ <ForgotPageScreen />} />
        <Route path="/Verification" element={<VerificationPageScren />} />
        <Route path="/ChangePassword" element={<ChangePasswordPageScreen />} />
      </Routes>
     
    </div>
    </>
  )
}

export default App
