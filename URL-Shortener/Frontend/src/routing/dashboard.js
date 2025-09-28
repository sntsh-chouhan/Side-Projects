import { createRoute } from "@tanstack/react-router"
import { rootRoute } from "./routeTree"
import { checkAuth } from "../utils/helper"

export const dasboardRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/dashboard',
    beforeLoad: checkAuth
})