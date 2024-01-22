import mongoose, { Schema } from "mongoose";

const CourseSchema = new mongoose.Schema({
  course: { type: String, required: true },
  specialization: { type: String, required: true },
  fees: { type: Number, required: true },
});

const collegeSchema = new Schema({
  collegename: {
    type: String,
    required: [true, "name is Required"],
  },
  collegelogo: {
    type: String,
    required: [true, "logo is Required"],
  },
  collegephoto: {
    type: String,
    required: [true, "photo is Required"],
  },
  collegebroucher: {
    type: String,
    required: [true, "broucher is Required"],
  },
  collegestate: {
    type: String,
    require: [true, "state is Required"],
  },
  collegecity: {
    type: String,
    require: [true, "city is Required"],
  },
  establishyear: {
    type: String,
    require: [true, "Establish year is Required"],
  },
  accreditation: {
    type: [String],
    require: [true, "Accreditation year is Required"],
  },
  affiliation: {
    type: String,
    require: [true, "affiliation is Required"],
  },
  collegeentranceexam: {
    type: [String],
    require: [true, "Entrance Exam is Required"],
  },
  collegeavgpackage: {
    type: [String],
    require: [true, "average package is Required"],
  },
  collegerating: {
    type: [String],
    require: [true, "Rating is Required"],
  },
  courses: {
    type: [CourseSchema],
    required: [true, "At least one course is required"],
  },
  overview: {
    type: String,
    required: [true, "Overview is required"],
  },
});

export const college = mongoose.model("college", collegeSchema);
