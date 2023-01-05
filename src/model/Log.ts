import { IExercise } from "./Exercise"
import { IUser } from "./User";

interface ILog {
    description: IExercise["description"],
    duration: IExercise["duration"],
    date: string,
}

export default interface Log {
    username: IUser["username"],
    count: number,
    log: ILog[],
}