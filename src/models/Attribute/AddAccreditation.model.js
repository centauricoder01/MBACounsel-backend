import mongoose, { Schema } from "mongoose";

const accreditationSchema = new Schema({
  accreditationValue: {
    type: String,
    required: [true, "Accreditation Value is Required"],
  },
});

export const sccreditation = mongoose.model("accreditation", accreditationSchema);
