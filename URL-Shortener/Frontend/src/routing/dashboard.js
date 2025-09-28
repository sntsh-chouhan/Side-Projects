import { createRoute } from "@tanstack/react-router"
import { rootRoute } from "./routeTree"

export const dasboardRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/dashboard'
})