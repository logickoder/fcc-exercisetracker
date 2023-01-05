import { Request, Response } from "express"
import User from "../model/User"

export class UserController {
    static async createUser(req: Request, res: Response) {
        const username: string | null = req.body.username

        if (username != null && username.length > 0) {

            let user = await User.findOne({ username: username })
            if (!user) {
                user = await User.create({ username: username })
            }
            res.json({
                _id: user?.id,
                username: user?.username,
            })
        } else {
            res.status(403).json({ message: 'Invalid username' })
        }
    }

    static async getUsers(_req: Request, res: Response) {
        let users = await User.find()
        res.json(users)
    }
}