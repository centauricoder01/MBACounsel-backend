import mongoose, { Schema } from "mongoose";

const adsBannerSchema = new Schema({
  Text: {
    type: String,
    required: [true, "Text is Required"],
  },
  Subtitle: {
    type: String,
    required: [true, "Text is Required"],
  },
  Desc: {
    type: String,
    required: [true, "Text is Required"],
  },
  Url: {
    type: String,
    required: [true, "Text is Required"],
  },
});

export const adsBanner = mongoose.model("AdsBanner", adsBannerSchema);
