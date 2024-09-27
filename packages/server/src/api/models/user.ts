import { Schema, Document, model } from 'mongoose';

export interface IUser extends Document {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

const UserSchema: Schema = new Schema({
  firstname: { type: String, required: false },
  lastname: { type: String, required: false },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = model<IUser>('User', UserSchema);

export default User;
