import mongoose from "mongoose";

const { Schema } = mongoose;
const studentSchema = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: false },
    googleId: { type: String, required: false },
    image: { type: String },
    id: { type: String },
    age: { type: Number },
    gender: { type: String },
    type: { type: String },
  },
  { timestamps: true }
);
const Student = mongoose.model("Student", studentSchema);

export default Student;
