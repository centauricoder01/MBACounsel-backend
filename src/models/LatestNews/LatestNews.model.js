import mongoose, { Schema } from "mongoose";

const latestNewsSchema = new Schema({
  Image: {
    type: String,
    required: [true, "Image is required"],
  },
  Date: {
    type: String,
    required: [true, "Date is required"],
  },
  Category: {
    type: String,
    required: [true, "Category is required"],
  },
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  SlugUrl: {
    type: String,
    required: [true, "Slug URL is required"],
  },
  MetaTitle: {
    type: String,
    required: [true, "Meta Title is required"],
  },
  MetaDescription: {
    type: String,
    required: [true, "Meta Description is required"],
  },
  MetaKeywords: {
    type: String,
    required: [true, "Meta Keywords is required"],
  },
  ShortDescription: {
    type: String,
    required: [true, " Short Description is Required"],
  },
  Description: {
    type: String,
    required: [true, "Description is required"],
  },
  TrendingNews: {
    type: Boolean,
    required: [true, "Trending News Status is Required"],
  },
  FeaturedNews: {
    type: Boolean,
    required: [true, "Featured News Status is Required"],
  },
});

export const LatestNews = mongoose.model("latestnews", latestNewsSchema);
