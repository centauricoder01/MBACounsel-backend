import mongoose, {Schema} from "mongoose";

const examSchema = new Schema({
  examNameFullForm: {
    type: String,
    required: [true, "Exam name full form is required"],
  },
  examNameShortForm: {
    type: String,
  },
  examLogo: {
    type: String,
    required: [true, "Exam logo is required"],
  },
  examPdf: {
    type: String,
  },
  examWordFile: {
    type: String,
  },
  courses: {
    type: [String],
    required: [true, "Courses are required"],
  },
  examOverview: {
    type: String,
    required: [true, "Exam overview is required"],
  },
  examRegistration: {
    type: String,
    required: [true, "Exam registration details are required"],
  },
  examEligibility: {
    type: String,
    required: [true, "Exam eligibility details are required"],
  },
  examSyllabus: {
    type: String,
    required: [true, "Exam syllabus is required"],
  },
  examPattern: {
    type: String,
    required: [true, "Exam pattern is required"],
  },
});

export const exam = mongoose.model("exam", examSchema);
