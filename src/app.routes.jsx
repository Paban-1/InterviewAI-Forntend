import { createBrowserRouter } from "react-router"
import { Login, Register } from "./constent"

export const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    }
])