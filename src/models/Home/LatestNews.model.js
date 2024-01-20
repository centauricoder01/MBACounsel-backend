import mongoose, { Schema } from "mongoose";

const latestNewsSchema = new Schema({
  Img: {
    type: String,
    required: [true, "Img is Required"],
  },
  Date: {
    type: String,
    required: [true, "Date is Required"],
  },
  Text: {
    type: String,
    required: [true, "Text is Required"],
  },
  ShortDesc: {
    type: String,
    required: [true, "ShortDesc is Required"],
  },
  Desc: {
    type: String,
    required: [true, "ShortDesc is Required"],
  },
});

export const LatestNews = mongoose.model("LatestNews", latestNewsSchema);
