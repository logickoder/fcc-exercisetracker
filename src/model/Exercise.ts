import mongoose from "mongoose"
import { IUser } from "./User"

export interface IExercise {
    username: IUser['username'],
    description: string,
    duration: number,
    date: string,
}

const ExerciseSchema: mongoose.Schema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    duration: {
        type: Number,
        required: true,
    },
    date: {
        type: String,
        required: true,
    }
})

export default mongoose.model<IExercise>("Exercise", ExerciseSchema)