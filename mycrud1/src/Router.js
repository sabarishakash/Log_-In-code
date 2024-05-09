import React from 'react'
import Login from './Login'
import View from './View'
import App from './App'
import {BrowserRouter,Routes,Route} from "react-router-dom"
const Router = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/view" element={<View/>}/>
        <Route path="/App" element={<App/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Router