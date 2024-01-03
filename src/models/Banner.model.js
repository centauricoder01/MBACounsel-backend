import mongoose, { Schema } from "mongoose";

const BannerSchema = new Schema({
  Img: {
    type: String,
    required: true,
  },
  Text: {
    type: String, 
    required: true,
  },
});

export const Banner = mongoose.model("Banner", BannerSchema);
