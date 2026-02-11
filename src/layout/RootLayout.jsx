import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../components/NavBar.jsx";
import Footer from "../components/footer.jsx";
import ScrollToTop from "../components/ScrollToTop.jsx";

const RootLayout = () => {
  const location = useLocation();

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