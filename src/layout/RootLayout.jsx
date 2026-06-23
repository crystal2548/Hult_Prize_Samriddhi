import { Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "../components/NavBar.jsx";
import Footer from "../components/footer.jsx";
import ScrollToTop from "../components/ScrollToTop.jsx";
import SkeletonLoader from "../components/SkeletonLoader.jsx";
import Maintenance from "../pages/Maintenance.jsx";
import { subscribeToSiteSettings } from "../lib/settingsStore.js";

const RootLayout = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [siteSettings, setSiteSettings] = useState({ maintenanceMode: false });
  const [loadingSettings, setLoadingSettings] = useState(true);
  const isAdminRoute = location.pathname.startsWith("/admin");

  useEffect(() => {
    // Show loading screen on initial app load
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // 1.5 seconds loading time

    const unsubscribe = subscribeToSiteSettings((settings) => {
      setSiteSettings(settings);
      setLoadingSettings(false);
    });

    return () => {
      clearTimeout(timer);
      unsubscribe();
    };
  }, []);

  if ((loading || loadingSettings) && !isAdminRoute) {
    return <SkeletonLoader />;
  }

  if (siteSettings.maintenanceMode && !isAdminRoute) {
    return <Maintenance />;
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