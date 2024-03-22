import mongoose, { Schema } from "mongoose";

const authticationSchema = new Schema({
  name: {
    type: String,
    require: [true, "Name is required"],
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
