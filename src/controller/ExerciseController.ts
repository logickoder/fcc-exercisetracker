import { Request, Response } from "express"
import User from "../model/User"
import Exercise from "../model/Exercise"

export class ExerciseController {
    static async createExercise(req: Request, res: Response) {
        let { description, duration, date } = req.body

        if (description == '') {
            return res.status(400).json({ message: 'Description is required' })
        }

        if (duration == '') {
            return res.status(400).json({ message: 'Duration is required' })
        }

        let user = await User.findOne({ _id: req.params._id })

        if (user == null) {
            return res.status(404).json({ message: 'User not found' })
        }

        let exercise = await Exercise.create({
            username: user?.username,
            duration: duration,
            description: description,
            date: (date == '' ? new Date() : new Date(date)).toDateString(),
        })

        res.json(exercise)
    }
}