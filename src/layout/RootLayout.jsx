<<<<<<< HEAD
import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../components/NavBar.jsx";
import Footer from "../components/footer.jsx";
import ScrollToTop from "../components/ScrollToTop.jsx";
=======
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
>>>>>>> crystal

const RootLayout = () => {
  const location = useLocation();

  return (
<<<<<<< HEAD
    <div className="w-full">
      <ScrollToTop />
      <NavBar />
      <main className="w-full min-h-screen pt-24 pb-20 md:pb-0">
        <Outlet key={location.pathname} />
=======
    <>
      <ScrollToTop />
      <Navbar />
      <main style={{ minHeight: '80vh' }}>
        <Suspense fallback={<div className="loading-spinner">Loading...</div>}>
          <Outlet />
        </Suspense>
>>>>>>> crystal
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;