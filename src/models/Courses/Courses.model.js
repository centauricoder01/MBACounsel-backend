import mongoose, { Schema } from "mongoose";

const faqsSchema = new mongoose.Schema({
  id: { type: Number },
  question: { type: String, required: [true, "Question is required"] },
  answer: { type: String, required: [true, "Answer is required"] },
});

const coursesSchema = new Schema({
  courseTitle: { type: String, required: [true, "Course Title is required"] },
  course: { type: String, required: [true, "Course Name is required"] },
  specialization: {
    type: String,
    required: [true, "Specialization is required"],
  },
  overview: { type: String, required: [true, "Overview is required"] },
  salientFeatures: {
    type: String,
    required: [true, "Salient Features is required"],
  },
  admission: { type: String, required: [true, "Admission is required"] },
  syllabus: { type: String, required: [true, "Syllabus is required"] },
  futureScope: { type: String, required: [true, "Future Scope is required"] },
  faqs: [faqsSchema], // Use an array of objects for FAQs
  slugUrl: { type: String, required: [true, "Slug URL is required"] },
  metaUrl: { type: String, required: [true, "Meta URL is required"] },
  metaDescription: {
    type: String,
    required: [true, "Meta Description is required"],
  },
  metaKeywords: { type: String, required: [true, "Meta Keywords is required"] },
  trendingCourses: {
    type: Boolean,
    required: [true, "Trending status is required"],
  },
});

export const detailedCourses = mongoose.model("detailedcourses", coursesSchema);
