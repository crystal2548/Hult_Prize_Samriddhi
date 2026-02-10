import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

const RootLayout = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main style={{ minHeight: '80vh' }}>
        <Suspense fallback={<div className="loading-spinner">Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;