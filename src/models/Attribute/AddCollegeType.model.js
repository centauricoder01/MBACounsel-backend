import mongoose, { Schema } from "mongoose";

const collegeTypeSchema = new Schema({
  collegeTypeValue: {
    type: String,
    required: [true, "collegeType Value is Required"],
  },
});

export const collegeType = mongoose.model("collegeType", collegeTypeSchema);
