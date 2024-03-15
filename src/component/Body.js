import React from 'react'
import Login from './Login'
import Header from './Header'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Browser from './Browser'

const Body = () => {

    const approuter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/browser",
            element: <Browser />
        },
        {
            path:"/header",
            element:<Header/>
        }
    ])

    return (
        <div>
            <RouterProvider router={approuter}/>
        </div>
    )
}

export default Body