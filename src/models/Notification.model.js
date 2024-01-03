import mongoose, { Schema } from "mongoose";

const notificationSchema = new Schema({
  Text: {
    type: String,
    required: true,
  },
});

export const Notification = mongoose.model("Notification", notificationSchema);
