import mongoose, { Schema } from "mongoose";

const coursesSchema = new Schema({
  courseImage: {
    type: String,
    required: [true, "Course img Value is Required"],
  },
  coursesValue: {
    type: String,
    required: [true, "courses Value is Required"],
  },
});

export const courses = mongoose.model("courses", coursesSchema);
