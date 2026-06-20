import { Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "../components/NavBar.jsx";
import Footer from "../components/footer.jsx";
import ScrollToTop from "../components/ScrollToTop.jsx";
import SkeletonLoader from "../components/SkeletonLoader.jsx";

const RootLayout = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const isAdminRoute = location.pathname.startsWith("/admin");

  useEffect(() => {
    // Show loading screen on initial app load
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // 1.5 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  if (loading && !isAdminRoute) {
    return <SkeletonLoader />;
  }
  return (
    <div className="w-full">
      <ScrollToTop />
      {!isAdminRoute && <NavBar />}
      <main className={`w-full min-h-screen pb-20 md:pb-0 ${isAdminRoute ? "pt-0" : "pt-24"}`}>
        <Outlet key={location.pathname} />
      </main>
      {!isAdminRoute && <Footer />}
    </div>
  )
}
export default RootLayout