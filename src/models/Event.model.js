import mongoose, { Schema } from "mongoose";

const eventSchema = new Schema({
  Data: {
    type: String,
    required: [true, "Eventdata is important"],
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
