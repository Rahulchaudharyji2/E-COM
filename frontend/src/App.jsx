import React from 'react'
import {Routes, Route} from 'react-router-dom'

import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import Navbar from './components/Navbar'
import Topheader from './components/Topheader'
import AnnouncementBar from './components/AnnouncementBar'


const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] 1g:px-[9vw]'>
      {/* <Topheader /> */}
      <Navbar />
      {/* <AnnouncementBar /> */}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/collection' element={<Collection />} /> 
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product/:productId' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} /> 
        <Route path='/place-order' element={<PlaceOrder />} />
        <Route path='/orders' element={<Orders />} />
      </Routes>
    </div>
  )
}
export default App;