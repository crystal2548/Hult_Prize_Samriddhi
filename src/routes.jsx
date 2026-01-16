import {createBrowserRouter} from 'react-router-dom'
import RootLayout from './layout/RootLayout'
import Home from './pages/Home'
// import LoginPage from './pages/Lo'
// import Login from "./pages/Login.jsx"
// import SignUp from "./pages/about.jsx"
import About from "./pages/about.jsx"
import Contact from "./pages/contact.jsx"
import TeamsProject from "./pages/TeamsProject.jsx"
import Winners from "./pages/winner.jsx"
import Sponsers from "./pages/sponsers.jsx"
import YearPage from "./pages/YearPage.jsx"
// import SignupPage from './pages/SignupPage'
// import Complains from './pages/Complains'
// import Profile from './pages/Profile'


const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                path: 'about',
                element: <About />

            },
            {
                path: 'contact',
                element: <Contact />
            },
            {
                path: 'teamproject',
                element: <TeamsProject />
            },
            {
                path: 'teamproject/:year',
                element: <YearPage />

            },
            {
                path: 'winners',
                element: <Winners />
            },
            {
                path: 'sponsers',
                element: <Sponsers />
            },
            {
                
                
                index: true,
                element: <Home />
            }
        ]
    }
])

export default router