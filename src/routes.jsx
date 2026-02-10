import { createBrowserRouter } from "react-router-dom";
import { lazy } from 'react';
import RootLayout from "./layout/RootLayout";

import Home from "./pages/home.jsx";
const About = lazy(() => import("./pages/about.jsx"));
const Mission = lazy(() => import("./pages/Mission.jsx"));
const Contact = lazy(() => import("./pages/contact.jsx"));
const Impact = lazy(() => import("./pages/Impact.jsx"));
const FAQ = lazy(() => import("./pages/Faq.jsx"));

// --- LAZY IMPORTS (Navbar / Heavy Pages) ---
// These only download when clicked
const Winners = lazy(() => import("./pages/winner.jsx"));
const TeamsProject = lazy(() => import('./pages/TeamsProject.jsx'));
const JoinUsPage = lazy(() => import("./pages/JoinUs.jsx"));
const OrganizerMentor = lazy(() => import("./pages/organizerMentor.jsx"));
const YearPage = lazy(() => import("./pages/Yearpage.jsx"));
const Blog = lazy(() => import("./pages/Blog.jsx"));
const LearnMore = lazy(() => import("./pages/LearnMore.jsx"));
const OurStory = lazy(() => import("./pages/Ourstory.jsx"));
const Partners = lazy(() => import("./pages/Partners.jsx"));

const Developer = lazy(() => import("./pages/Developer.jsx"));

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

      { path: "organizerMentor", element: <OrganizerMentor /> },
      { path: "developer", element: <Developer /> },
    ],
  },
]);

export default router;