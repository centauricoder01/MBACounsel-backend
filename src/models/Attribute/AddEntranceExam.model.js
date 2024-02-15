import mongoose, { Schema } from "mongoose";

const entranceExamSchema = new Schema({
  entranceExamShortForm: {
    type: String,
    required: [true, "Short Form Value is Required"],
  },
  entranceExamFullForm: {
    type: String,
    required: [true, "Full form Value is Required"],
  },
});

export const entranceExam = mongoose.model("entranceExam", entranceExamSchema);
