import mongoose, { Schema } from "mongoose";

const accreditionSchema = new Schema({
  accreditionValue: {
    type: String,
    required: [true, "Accredition Value is Required"],
  },
});

export const accredition = mongoose.model("accredition", accreditionSchema);
