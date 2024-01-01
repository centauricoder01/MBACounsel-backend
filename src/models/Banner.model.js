import mongoose, { Schema } from "mongoose";

const BannerSchema = new Schema({
  bannerImg: {
    type: String,
    required: true,
  },
  bannerText: {
    type: String,
    required: true,
  },
});

export const Banner = mongoose.model("Banner", BannerSchema);
