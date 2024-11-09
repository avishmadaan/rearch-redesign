
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { HomePage } from './components/HomePage'
import { AboutUs } from './components/AboutUs'
import { Home } from 'lucide-react'
import { Services } from './components/Services'
import { ContactUs } from './components/ContactUs'
import { SideBar } from './components/SideBar'
import { Navbarv2 } from './components/Navbarv2'


function App() {


  return (
    <>
    <BrowserRouter>
    <Routes >
      <Route path='/' element={<Layout />}>
      <Route index element={<HomePage />}></Route>
      <Route path='/aboutus' element={<AboutUs />}></Route>
      <Route path='/services' element={<Services />}></Route>
      <Route path='/contactus' element={<ContactUs />}></Route>
      
      <Route path='*' element={<HomePage />}></Route>
      </Route>

      <Route path='/sidebar' element={<SideBar />}></Route>
      <Route path='/navbar' element={<Navbarv2 />}></Route>

    

    </Routes>

 
    </BrowserRouter>

    
    </>
  )
}

export default App
