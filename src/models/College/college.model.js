import mongoose, { Schema } from "mongoose";

const collegeSchema = new Schema({
  collegename: {
    type: String,
    required: [true, "name is Required"],
  },
  collegelogo: { 
    type: String,
    required: [true, "logo is Required"],
  },
  collegephoto: {
    type: String,
    required: [true, "photo is Required"],
  },
  collegebroucher: {
    type: String,
    required: [true, "broucher is Required"],
  },
  state:{
    type:String,
    require:[true,"state is Required"]
  } 
});

export const college = mongoose.model("college", collegeSchema);
