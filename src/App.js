import React from 'react'
import {BrowserRouter, Route,Routes } from 'react-router-dom'
import Headlines from './Component/Headlines'
import Technology from './Component/Technology'
import Business from './Component/Economy'
import Entertainment from './Component/Entertainment'
import Health from './Component/Health'
import General from './Component/General'
import Sports from './Component/Sports'
import Log from './Component/Log'
// import Login from './Component/Login'
// import Layout from './\/Component/Layout'
const App = () => {
  return (
    <div>
   <Routes>
    <Route exact path='/' element={<Headlines  />}/>
    <Route exact path='/technology' element={<Technology />}/>
    <Route exact path='/business' element={<Business />}/>
    <Route exact path='/entertainment' element={<Entertainment />}/>
    <Route exact path='/health' element={<Health />}/>
    <Route exact path='/general' element={< General />}/>
    <Route exact path='/sports' element={<Sports />}/>
    <Route exact path='/log' element={<Log/>}/>
   </Routes>
    </div>
  )
}

export default App

