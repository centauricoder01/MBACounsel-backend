import mongoose, { Schema } from "mongoose";

const inquirySchema = new Schema({
  name: {
    type: String,
    require: [true, "Name is required"],
  },
  phoneNo: {
    type: Number,
    unique: true,
    require: [true, "Phone number is Required"],
  },
  location: {
    type: String,
    require: [true, "Location is Required"],
  },
  courseLooking: {
    type: String,
    require: [true, " Course Looking is Required"],
  },
  college: {
    type: String,
    require: [true, "College is Required"],
  },
  email: {
    type: String,
    require: [true, "Email is required "],
    unique: true,
  },
});

export const Inquiry = mongoose.model("Inquiry", inquirySchema);
