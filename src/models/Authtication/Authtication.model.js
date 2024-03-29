import mongoose, { Schema } from "mongoose";

const authticationSchema = new Schema({
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
  currentEducation: {
    type: String,
    require: [true, "Education is Required"],
  },
  courseLooking: {
    type: String,
    require: [true, " Course Looking is Required"],
  },
  email: {
    type: String,
    require: [true, "Email is required "],
    unique: true,
  },
  googleLogin: {
    type: Boolean,
    default: false,
  },
  emailverified: {
    type: Boolean,
    default: false,
  },
  password: {
    type: String,
  },
  otp: {
    type: Number,
  },
});

export const authtication = mongoose.model("authtication", authticationSchema);
