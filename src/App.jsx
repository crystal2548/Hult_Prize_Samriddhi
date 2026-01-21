// import React, {useEffect, useState} from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './routes'
// import Cards1 from './Cards1'
import Test from './Test'
import './App.css'
const App = () => {
 
  return (
   
    <RouterProvider router={router} />
    // <Test />
    // <div>
       // {/* <Cards1 /> */}
    // </div>
  )
}

export default App