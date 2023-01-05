import { Router } from "express"
import { UserRoute } from "./UserRoute"
import { ExerciseRoute } from "./ExerciseRoute"
import { LogRoute } from "./LogRoute"

export class Routes {
    static routes(router: Router): Router {
        UserRoute.route(router)
        ExerciseRoute.route(router)
        LogRoute.route(router)

        return router
    }
}