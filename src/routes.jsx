import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import About from "./pages/about.jsx"
import Contact from "./pages/contact.jsx"
import TeamsProject from "./pages/TeamsProject1.jsx"
import YearPage from "./pages/YearPage.jsx"
import JoinUsPage from "./pages/JoinUs.jsx";
import Winners from "./pages/winner.jsx"
import OrganizerMentor from "./pages/organizerMentor.jsx";


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
                path: "contact",
                element: <Contact />,
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
                path: 'teamproject/:year',
                element: <YearPage />

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
        ],
    },
]);

export default router;
