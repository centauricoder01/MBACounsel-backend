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
  currentEducation: {
    type: String,
    require: [true, "Education is Required"],
  },
  CourseLooking: {
    type: String,
    require: [true, " Course Looking is Required"],
  },
  email: {
    type: String,
    require: [true, "Email is required "],
    unique: true,
  },
  password: {
    type: String,
    require: [true, "Password is required"],
  },
});

export const authtication = mongoose.model("authtication", authticationSchema);
