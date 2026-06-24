// import React, {useEffect, useState} from 'react'
import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { AuthProvider } from "./lib/firebase/AuthContext";
import SkeletonLoader from "./components/SkeletonLoader";
import "./App.css";
const App = () => {
  return (
    <AuthProvider>
      <div className="app-container">
        <Suspense fallback={<SkeletonLoader />}>
          <RouterProvider router={router} />
        </Suspense>
      </div>
    </AuthProvider>
  );
};

export default App;
