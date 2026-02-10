// import React, {useEffect, useState} from 'react'
import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom'
import router from './routes'
import LoadingSpinner from './components/LoadingSpinner';
// import Cards1 from './Cards1'
import Test from './Test'
import './App.css'
const App = () => {

  return (
    <div className="app-container">
      <Suspense fallback={<LoadingSpinner />}>
        <RouterProvider router={router} />

      </Suspense>
    </div>
    // {/* <Cards1 /> */}
    // <Test />
  )
}

export default App