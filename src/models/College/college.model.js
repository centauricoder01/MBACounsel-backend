import mongoose, { Schema } from "mongoose";

const CourseSchema = new mongoose.Schema({
  course: { type: String, required: true },
  specialization: [{ type: String, required: true }],
  fees: { type: Number, required: true },
});

const collegeSchema = new Schema({
  collegeName: {
    type: String,
    required: [true, "name is Required"],
  },
  collegeLogo: {
    type: String,
    required: [true, "logo is Required"],
  },
  collegePhoto: {
    type: String,
    required: [true, "photo is Required"],
  },
  collegeBroucher: {
    type: String,
    required: [true, "broucher is Required"],
  },
  collegeState: {
    type: String,
    require: [true, "state is Required"],
  },
  collegeCity: {
    type: String,
    require: [true, "city is Required"],
  },
  collegeEstYear: {
    type: String,
    require: [true, "Establish year is Required"],
  },
  collegeAccreditation: {
    type: [String],
    require: [true, "Accreditation year is Required"],
  },
  collegeAffiliation: {
    type: String,
    require: [true, "affiliation is Required"],
  },
  collegeEntranceExam: {
    type: [String],
    require: [true, "Entrance Exam is Required"],
  },
  collegeAvgPackage: {
    type: String,
    require: [true, "average package is Required"],
  },
  collegeRating: {
    type: String,
    require: [true, "Rating is Required"],
  },
  collegecoursespecilzationfees: {
    type: [CourseSchema],
    require: [true, "Rating is Required"],
  },
  // courses: {
  //   type: [],
  //   required: [true, "At least one course is required"],
  // },
  collegeOverview: {
    type: String,
    required: [true, "Overview is required"],
  },
  collegePrograms: {
    type: String,
    required: [true, "Programs is required"],
  },
  collegeAdmission: {
    type: String,
    required: [true, "Admission is required"],
  },
  collegePlacement: {
    type: String,
    required: [true, "Overview is required"],
  },
  collegeCampusLife: {
    type: String,
    required: [true, "Campus Life is required"],
  },
  collegeCollegeUrl: {
    type: String,
    required: [true, "College URL is required"],
  },
  collegeTitle: {
    type: String,
    required: [true, "Title is required"],
  },
  collegeKeyDecription: {
    type: String,
    required: [true, "Key Description is required"],
  },
  collegeMetaDescription: {
    type: String,
    required: [true, "Meta Description is required"],
  },
  collegefaqs: {
    type: [],
    required: [true, "FAQs is required"],
  },
  collegeFeatured: {
    type: Boolean,
    required: [true, "Featured is required"],
  },
  collegeRecommended: {
    type: Boolean,
    required: [true, "Recommended is required"],
  },
});

export const college = mongoose.model("college", collegeSchema);
