import mongoose from "mongoose"
import { IUser } from "./User"

export interface IExercise extends mongoose.Document {
    username: IUser['username'],
    description: string,
    duration: number,
    date: Date,
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
        type: Date,
        required: true,
    }
})

export default mongoose.model<IExercise>("Exercise", ExerciseSchema)