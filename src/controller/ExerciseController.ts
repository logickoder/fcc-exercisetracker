import { Request, Response } from "express"
import User from "../model/User"
import Exercise, { IExercise } from "../model/Exercise"

export class ExerciseController {
    static async createExercise(req: Request, res: Response) {

        let description: string = req.body.description
        if (description == '') {
            return res.status(400).json({ message: 'Description is required' })
        }


        let duration: string = req.body.duration
        if (duration == '') {
            return res.status(400).json({ message: 'Duration is required' })
        }

        let user = await User.findOne({ _id: req.params._id })

        if (user == null) {
            return res.status(404).json({ message: 'User not found' })
        }

        let date: Date = (typeof req.body.date !== "string" || req.body.date == '' ? new Date() : new Date(req.body.date))

        await Exercise.create({
            username: user?.username,
            duration: Number.parseInt(duration),
            description: description,
            date: date,
        })

        let exercise = {
            username: user?.username,
            description: description,
            duration: Number.parseInt(duration),
            date: date.toDateString(),
        }

        return res.json({
            _id: user.id,
            ...exercise,
        })
    }
}