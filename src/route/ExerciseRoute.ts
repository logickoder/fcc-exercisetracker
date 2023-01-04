import { Router } from "express"
import { ExerciseController } from "../controller/ExerciseController"

export class ExerciseRoute {
    static route(router: Router): Router {

        /**
        * @route POST /api/users/:_id/exercises
        * @param { string } example.body._id
        * @produces application/json
        */
        router
            .route("/users/:_id/exercises")
            .post(ExerciseController.createExercise)

        return router
    }
}