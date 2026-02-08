import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import About from "./pages/about.jsx";
import TeamsProject from "./pages/TeamsProject.jsx"
import Winners from "./pages/winner.jsx";
import JoinUsPage from "./pages/joinUs.jsx";
import OrganizerMentor from "./pages/organizerMentor.jsx";
// import Sponsers from "./pages/sponsers.jsx"
import YearPage from "./pages/Yearpage.jsx"
import Blog from "./pages/Blog.jsx"
import LearnMore from "./pages/LearnMore.jsx"
import Contact from "./pages/contact.jsx"
// import SignupPage from './pages/SignupPage'
// import Complains from './pages/Complains'
// import Profile from './pages/Profile'


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "about",
        element: <About />,
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
        path: "/",

        index: true,
        element: <Home />,
      },
      {
        path: "organizerMentor",
        element: <OrganizerMentor />,
      },
      {
        path: "teamproject/:year",
        element: <YearPage />,
      },
      {
        path: "learnMore",
        element: <LearnMore />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
