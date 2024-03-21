import mongoose, { Schema } from "mongoose";

const articleSchema = new Schema({
  Image: {
    type: String,
    required: [true, "Image is required"],
  },
  Date: {
    type: String,
    required: [true, "Date is required"],
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
  Category: {
    type: String,
    required: [true, "Category is required"],
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
  TrendingArticle: {
    type: Boolean,
    required: [true, "Trending Article Status is Required"],
  },
});

export const article = mongoose.model("article", articleSchema);
