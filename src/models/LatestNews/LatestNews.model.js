import mongoose, { Schema } from "mongoose";

const latestNewsSchema = new Schema({
  Image: {
    type: String,
    required: [true, "Image is required"],
  },
  Date: {
    type: String,
    required: [true, "Date is required"],
  },
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  Course: {
    type: String,
    required: [true, "Courses is required"],
  },
  Specilization: {
    type: String,
    required: [true, "Specilization is required"],
  },
  EntranceExam: {
    type: String,
    required: [true, "Entrance Exam is required"],
  },
  slugurl: {
    type: String,
    required: [true, "Slug URL is required"],
  },
  metaTitle: {
    type: String,
    required: [true, "Meta Title is required"],
  },
  metaDescription: {
    type: String,
    required: [true, "Meta Description is required"],
  },
  Description: {
    type: String,
    required: [true, "Description is required"],
  },
});
