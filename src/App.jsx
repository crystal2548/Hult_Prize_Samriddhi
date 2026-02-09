// import React, {useEffect, useState} from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './routes'
import Test from './Test'
import './App.css'
const App = () => {
 
  return (
   
    <RouterProvider router={router} />
    // <Test />
  )
}

export default App