import mongoose, { Schema } from "mongoose";

const stateSchema = new Schema({
  stateValue: {
    type: String,
    required: [true, "State Value is Required"],
  },
});

export const state = mongoose.model("state", stateSchema);
