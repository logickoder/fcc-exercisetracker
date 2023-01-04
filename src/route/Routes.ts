import { Router } from "express"
import { UserRoute } from "./UserRoute"
import { ExerciseRoute } from "./ExerciseRoute"

export class Routes {
    static routes(router: Router): Router {
        UserRoute.route(router)
        ExerciseRoute.route(router)

        return router
    }
}