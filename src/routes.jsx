import { createBrowserRouter } from "react-router-dom";
import { lazy } from 'react';
import RootLayout from "./layout/RootLayout";
import About from "./pages/about.jsx";
import Winners from "./pages/winner.jsx";
import JoinUsPage from "./pages/joinUs.jsx";
import OrganizerMentor from "./pages/organizerMentor.jsx";
import YearPage from "./pages/Yearpage.jsx"
import Blog from "./pages/Blog.jsx"
import LearnMore from "./pages/LearnMore.jsx"
import Contact from "./pages/contact.jsx"

// New pages
import OurStory from "./pages/Ourstory.jsx"
import Mission from "./pages/Mission.jsx"
import Impact from "./pages/Impact.jsx"
import FAQ from "./pages/Faq.jsx"
import Partners from "./pages/Partners.jsx"
import Support from "./pages/Support.jsx"
const Home = lazy(() => import("./pages/Home.jsx"))
const TeamsProject = lazy(() => import('./pages/TeamsProject.jsx'));

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
        path: "about",
        element: <About />,
      },
      {
        path: "our-story",
        element: <OurStory />,
      },
      {
        path: "mission",
        element: <Mission />,
      },
      {
        path: "impact",
        element: <Impact />,
      },
      {
        path: "teamproject",
        element: <TeamsProject />,
      },
      {
        path: "winners",
        element: <Winners />,
      },
      {
        path: "joinus",
        element: <JoinUsPage />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "learnMore",
        element: <LearnMore />,
      },
      {
        path: "faq",
        element: <FAQ />,
      },
      {
        path: "partners",
        element: <Partners />,
      },
      {
        path: "support",
        element: <Support />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "organizerMentor",
        element: <OrganizerMentor />,
      },
      {
        path: "teamproject/:year",
        element: <YearPage />,
      },
    ],
  },
]);

export default router;