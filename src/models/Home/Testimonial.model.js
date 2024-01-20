import mongoose, { Schema } from "mongoose";

const TestimonialSchema = new Schema({
  Img: {
    type: String,
    required: [true, "Img is Required"],
  },
  Name: {
    type: String,
    required: [true, "Name is Required"],
  },
  College: {
    type: String,
    required: [true, "College is Required"],
  },
  Review: {
    type: String,
    required: [true, "Review is Required"],
  },
});

export const Testimonial = mongoose.model("Testimonial", TestimonialSchema);
