import mongoose, { Schema } from "mongoose";

const eventSchema = new Schema({
  Date: {
    type: String,
    required: [true, "Eventdate is important"],
  },
  Text: {
    type: String,
    required: [true, "Text is Important"],
  },
  Desc: {
    type: String,
    required: [true, "Desc is Important"],
  },
});

export const Event = mongoose.model("Event", eventSchema);
