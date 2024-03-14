import mongoose, { Schema } from "mongoose";

const NewsCategorySchema = new Schema({
  CategoryValue: {
    type: String,
    required: [true, "new Category is Required"],
  },
});

export const newcategory = mongoose.model("newcategory", NewsCategorySchema);
