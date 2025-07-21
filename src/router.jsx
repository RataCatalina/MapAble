import { createBrowserRouter } from "react-router";

import Layout from "./layouts/Layout";
import Index from "./pages/Index";
import Map from "./pages/Map";
import Statistics from "./pages/Statistics";
import Donate from "./pages/Donate";

export const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path:"/",
                element: <Index />
            },
            {
                path: "/map",
                element: <Map />
            },
            {
                path: "/statistics",
                element: <Statistics />
            },
            {
                path: "/donate",
                element: <Donate />
            }
        ]
    }
])