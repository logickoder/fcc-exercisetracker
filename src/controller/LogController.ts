import { Request, Response } from "express"
import User from "../model/User"
import Exercise from "../model/Exercise"
import Log from "../model/Log"

export class LogController {

    static async getLogs(req: Request, res: Response) {
        try {
            let user = await User.findOne({ _id: req.params._id })

            if (user == null) {
                return res.status(404).json({ message: 'User not found' })
            }

            let { from, to, limit } = req.query

            let exercisesQuery = Exercise.find({
                username: user?.username,
                date: {
                    $gte: from != "" && from != undefined ? new Date(`${from}`) : new Date(0),
                    $lt: to != "" && to != undefined ? new Date(`${to}`) : new Date(),
                }
            })

            let exercises = await (limit != "" && limit != undefined ? exercisesQuery : exercisesQuery.limit(Number.parseInt(`${limit}`)))

            let log: Log = {
                username: user?.username,
                count: exercises?.length,
                log: exercises.map(function (exercise) {
                    return {
                        description: exercise.description,
                        duration: exercise.duration,
                        date: exercise.date.toDateString(),
                    }
                }),
            }

            return res.json({
                _id: user?.id,
                ...log,
            })
        } catch (e) {
            return res.status(500).json(e)
        }
    }
}