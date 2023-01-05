import { Request, Response } from "express"
import User from "../model/User"
import Exercise, { IExercise } from "../model/Exercise"

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

        duration = Number.parseInt(duration)
        date = (date == '' ? new Date() : new Date(date)).toDateString()

        await Exercise.create({
            username: user?.username,
            duration: duration,
            description: description,
            date: date,
        })

        let exercise: IExercise = {
            username: user?.username,
            description: description,
            duration: duration,
            date: date,
        }

        return res.json({
            _id: user.id,
            ...exercise,
        })
    }
}