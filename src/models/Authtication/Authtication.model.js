import mongoose, { Schema } from "mongoose";

const authenticationSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"], // Fixed typo from "require" to "required"
    },
    phoneNo: {
      type: String, // Storing phone number as a string for flexibility
      unique: true,
      required: [true, "Phone number is required"],
    },
    location: {
      type: String,
      required: [true, "Location is required"],
    },
    currentEducation: {
      type: String,
      required: [true, "Current education is required"],
    },
    courseLooking: {
      type: String,
      required: [true, "Course looking for is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        "Please provide a valid email address",
      ],
    },
    googleId: {
      type: String,
      default: null, // Will be set for Google OAuth users
    },
    emailVerified: {
      type: Boolean, // Capitalized for consistency
      default: false,
    },
    password: {
      type: String,
      required: function () {
        return !this.googleId; // Password is required only if googleId is not present
      },
      minlength: [6, "Password must be at least 6 characters long"],
    },
    role: {
      type: String,
      enum: ["user", "admin"], // Role must be either 'user' or 'admin'
      default: "user",
    },
    otp: {
      type: String, // Changed to string to handle potential leading zeros
      minlength: 6, // Assuming OTP is 6 digits long, you can adjust as needed
      maxlength: 6,
    },
    otpExpiry: {
      type: Date, // This will store the expiry timestamp of the OTP
    },
  },
  { timestamps: true } // Adds createdAt and updatedAt fields automatically
);

export const Authentication = mongoose.model(
  "Authentication",
  authenticationSchema
);
