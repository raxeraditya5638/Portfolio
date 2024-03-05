import mongoose, { Schema } from "mongoose";
export interface UserDocument extends Document {
  email: string;
  password:string;
  name:string;
  lastname:string;
  // Add other fields as needed
}

const userschema = new Schema(
  {
    name: String,
    lastname: String,
    email: {
      type: String,
      required: true,

    },
    password: String,
  },
  { timestamps: true }
);

export const userModel = mongoose.models.users || mongoose.model<UserDocument>("users", userschema);

