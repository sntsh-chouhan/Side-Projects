import { createRoute } from "@tanstack/react-router"
import { rootRoute } from "./routeTree"
import { checkAuth } from "../utils/helper"
import DashboardPage from "../pages/DashboardPage"

export const dasboardRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/dashboard',
    component: DashboardPage,
    beforeLoad: checkAuth
})