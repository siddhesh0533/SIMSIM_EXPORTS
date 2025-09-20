import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from '../App'
import Home from '../Pages/Home'
import Contact from '../Pages/Contact'
import About from '../Pages/About'

const approuter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            }
        ]
    }
])

export default function Root() {
    return <RouterProvider router={approuter} />
}