import React from 'react'
import {Route,Routes } from 'react-router-dom'
import Test from './Component/Test'
// import Admin from './Component/admin'
import Total from './Component/Admin/Total'
import AddNews from './Component/Admin/addNews'
// import Login from './Component/Login'
// import Layout from './\/Component/Layout'
const App = () => {
  return (
    <>
   <Routes>
    <Route exact path='/' element={<Test api="/news"/>}/>
    <Route exact path='/headlines' element={<Test api="/news/category/headlines"/>}/>
    <Route exact path='/technology' element={<Test api="/news/category/technology"/>}/>
    <Route exact path='/business' element={<Test api="/news/category/economy"/>}/>
    <Route exact path='/entertainment' element={<Test api="/news/category/entertainment"/>}/>
    <Route exact path='/health' element={<Test api="/news/category/health"/>}/>
    <Route exact path='/general' element={<Test api="/news/category/general"/>}/>
    <Route exact path='/sports' element={<Test api="/news/category/sports"/>}/>
    <Route exact path='/admin' element={<Total api="/news"/>}/>
    <Route exact path='/admin/headlines' element={<Total api="/news/category/headlines"/>}/>
    <Route exact path='/admin/technology' element={<Total api="/news/category/technology"/>}/>
    <Route exact path='/admin/business' element={<Total api="/news/category/economy"/>}/>
    <Route exact path='/admin/entertainment' element={<Total api="/news/category/entertainment"/>}/>
    <Route exact path='/admin/health' element={<Total api="/news/category/health"/>}/>
    <Route exact path='/admin/general' element={<Total api="/news/category/general"/>}/>
    <Route exact path='/admin/sports' element={<Total api="/news/category/sports"/>}/>
    <Route exact path='/admin/about' element={<AddNews/>}/>
    
   </Routes>
    </>
    
  )
}

export default App

