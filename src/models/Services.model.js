import { Schema, model } from "mongoose";

const servicesSchema = new Schema({
  Img: {
    type: String,
    required: [true, "Img is Required"],
  },
  Text: {
    type: String,
    required: [true, "Text is Required"],
  },
});

export const Services = model("Services", servicesSchema);
