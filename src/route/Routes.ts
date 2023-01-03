import { Router } from "express"
import { UserRoute } from "./UserRoute"

export class Routes {
    static routes(router: Router): Router {
        UserRoute.route(router)

        return router
    }
}