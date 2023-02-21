import mongoose from "mongoose";

const { Schema } = mongoose;
const courseSchema = new Schema(
  {
    name: { type: String, required: true },
    type: { type: String, required: true },
    description: { type: String, required: true },
    tag: { type: String, required: true },
    price: { type: Number, required: true },
    members: { type: Number, required: true },
  },
  { timestamps: true }
);
const Course = mongoose.model("Course", courseSchema);

export default Course;
