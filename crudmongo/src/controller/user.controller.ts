import mongoose  from "mongoose";
import bcrypt from 'bcrypt';
import config from 'config'

export interface UserDocument extends mongoose.Document {
  email:string,
  name: string,
  password: string,
  createdAt: Date,
  updatedAt: Date,
  comparePassword(candidatePassword: string) : Promise<boolean>
}

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true
    },
    name: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
  }
)

const User = mongoose.model<UserDocument>("User", UserSchema)

export default User

