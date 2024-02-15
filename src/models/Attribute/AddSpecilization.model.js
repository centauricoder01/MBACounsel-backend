import mongoose, { Schema } from "mongoose";

const specilizationSchema = new Schema({
  courseValue: {
    type: String,
    required: [true, "Course Value is Required"],
  },
  specilizationValue: {
    type: [String],
    required: [true, "specilization Value is Required"],
  },
});

export const specilization = mongoose.model(
  "specilization",
  specilizationSchema,
);
