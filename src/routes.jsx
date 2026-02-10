import { createBrowserRouter } from "react-router-dom";
import { lazy } from 'react';
import RootLayout from "./layout/RootLayout";

// --- NON-LAZY (EAGER) IMPORTS ---
// These are usually in the Footer or are critical for the brand
import Home from "./pages/Home.jsx";
import About from "./pages/about.jsx";
import Mission from "./pages/Mission.jsx";
import Contact from "./pages/contact.jsx";
import Impact from "./pages/Impact.jsx";
import FAQ from "./pages/Faq.jsx";

// --- LAZY IMPORTS (Navbar / Heavy Pages) ---
// These only download when clicked
const Winners = lazy(() => import("./pages/winner.jsx"));
const TeamsProject = lazy(() => import('./pages/TeamsProject.jsx'));
const JoinUsPage = lazy(() => import("./pages/joinUs.jsx"));
const OrganizerMentor = lazy(() => import("./pages/organizerMentor.jsx"));
const YearPage = lazy(() => import("./pages/Yearpage.jsx"));
const Blog = lazy(() => import("./pages/Blog.jsx"));
const LearnMore = lazy(() => import("./pages/LearnMore.jsx"));
const OurStory = lazy(() => import("./pages/Ourstory.jsx"));
const Partners = lazy(() => import("./pages/Partners.jsx"));
const Support = lazy(() => import("./pages/Support.jsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        index: true,
        element: <Home />,
      },
      {
        index: true,
        element: <Home />,
      },
      // Footer / Identity Routes (Instant)
      { path: "about", element: <About /> },
      { path: "mission", element: <Mission /> },
      { path: "impact", element: <Impact /> },
      { path: "contact", element: <Contact /> },
      { path: "faq", element: <FAQ /> },

      // Navbar / Heavy Routes (Lazy)
      { path: "winners", element: <Winners /> },
      { path: "teamproject", element: <TeamsProject /> },
      { path: "teamproject/:year", element: <YearPage /> },
      { path: "joinus", element: <JoinUsPage /> },
      { path: "blog", element: <Blog /> },
      { path: "learnMore", element: <LearnMore /> },
      { path: "our-story", element: <OurStory /> },
      { path: "partners", element: <Partners /> },
      { path: "support", element: <Support /> },
      { path: "organizerMentor", element: <OrganizerMentor /> },
    ],
  },
]);

export default router;