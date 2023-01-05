import { Router } from "express"
import { LogController } from "../controller/LogController"

export class LogRoute {
    static route(router: Router): Router {

        /**
        * @route GET /api/users/:_id/logs
        * @param { string } example.body._id
        * @produces application/json
        */
        router
            .route("/users/:_id/logs")
            .get(LogController.getLogs)

        return router
    }
}