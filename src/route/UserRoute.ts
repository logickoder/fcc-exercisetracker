import { Router } from "express"
import { UserController } from "../controller/UserController"

export class UserRoute {
    static route(router: Router): Router {

        /**
        * @route GET /api/users
        * @produces application/json
        * 
        * @route POST /api/users
        * @param { string } example.body.username
        * @produces application/json
        */
        router
            .route("/users")
            .get(UserController.getUsers)
            .post(UserController.createUser)

        return router
    }
}