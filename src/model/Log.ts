import { IExercise } from "./Exercise"
import { IUser } from "./User";

interface ILog {
    description: IExercise["description"],
    duration: IExercise["duration"],
    date: IExercise["date"],
}

export default interface Log {
    username: IUser["username"],
    count: number,
    log: ILog[],
}