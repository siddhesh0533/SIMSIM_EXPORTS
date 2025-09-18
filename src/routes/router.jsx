import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from '../App'
import Home from '../Pages/Home'

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
                element: <Home />
            },
            {
                path: '/contact',
                element: <Home />
            }
        ]
    }
])

export default function Root() {
    return <RouterProvider router={approuter} />
}