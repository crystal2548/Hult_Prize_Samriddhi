import { Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "../components/NavBar.jsx";
import Footer from "../components/footer.jsx";
import ScrollToTop from "../components/ScrollToTop.jsx";
import LoadingSpinner from "../components/LoadingSpinner.jsx";

const RootLayout = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show loading screen on initial app load
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // 1.5 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="w-full">
      <ScrollToTop />
      <NavBar />
      <main className="w-full min-h-screen pt-24 pb-20 md:pb-0">
        <Outlet key={location.pathname} />
      </main>
      <Footer />
    </div>
  )
}
export default RootLayout