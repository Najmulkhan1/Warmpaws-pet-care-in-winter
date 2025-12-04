import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import Service from "../pages/Service";
import MyProfile from "../pages/MyProfile";
import Register from "../pages/Register";
import React from "react";
import Login from "../pages/Login";
import ServiceDetails from "../pages/ServiceDetails";
import PrivateRoute from "../provider/PrivateRoute";
import Error from "../pages/Error";
import Loading from "../pages/Loading";
import ForgotPassword from "../pages/ForgotPassword";
import About from "../pages/About";
import Contact from "../pages/Contact";


const router = createBrowserRouter ([
    {
        path: "/",
        Component: RootLayout,
        id: "root",
        loader: () => fetch('/data.json'),
        hydrateFallbackElement: <Loading></Loading>,

        children: [
            {
                index: true,
                Component: Home,     
            },
            {
                path: "/service",
                Component: Service
            },
            {
                path: "/my-profile",
                element: (
                    <PrivateRoute>
                        <MyProfile />
                    </PrivateRoute>
                )
            },
            {
                path: "/register",
                Component: Register
            },
            {
                path: "/login",
                Component: Login
            },
            {
                path: "/forgot-password",
                Component: ForgotPassword
            },
            {
                path: "/about",
                Component: About
            },
            {
                path: "/contact",
                Component: Contact
            }
        ]
    },

    {
        path: "/service-details/:serviceId",
        element: (
                <ServiceDetails />
            
        ),
        loader: () => fetch('/data.json'),
         hydrateFallbackElement: <Loading></Loading>,
    },
    {
        path: "*",
        element: <Error></Error>
    }
])

export default router;