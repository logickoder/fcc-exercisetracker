import mongoose from "mongoose"

export interface IUser extends mongoose.Document {
    username: string,
}

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    }
})


export default mongoose.model<IUser>("User", UserSchema)