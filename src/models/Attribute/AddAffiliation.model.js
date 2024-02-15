import mongoose, { Schema } from "mongoose";

const affiliationSchema = new Schema({
  affiliationValue: {
    type: String,
    required: [true, "Affiliation Value is Required"],
  },
});

export const affiliation = mongoose.model("affiliation", affiliationSchema);
