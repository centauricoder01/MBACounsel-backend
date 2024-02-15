import mongoose, { Schema } from "mongoose";

const citySchema = new Schema({
  stateValue: {
    type: String,
    required: [true, "state Value is Required"],
  },
  cityValue: {
    type: [String],
    required: [true, "city Value is Required"],
  },
});

export const city = mongoose.model("city", citySchema);
