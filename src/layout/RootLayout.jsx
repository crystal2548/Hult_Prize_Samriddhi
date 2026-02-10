import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../components/NavBar.jsx";
import Footer from "../components/footer.jsx";
import ScrollToTop from "../components/ScrollToTop.jsx";
import { Suspense } from "react";

const RootLayout = () => {
  const location = useLocation();

  return (
    <div className="w-full">
      <ScrollToTop />
      <NavBar />
      <main style={{ minHeight: '80vh' }}>
        <Suspense fallback={<div className="loading-spinner">Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
export default RootLayout