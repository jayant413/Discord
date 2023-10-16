import mongoose from "mongoose";
import { messageSchema } from "./message-model";

export const ChannelSchema = new mongoose.Schema({
  id: {
    type: String,
    default: () => new mongoose.Types.ObjectId(),
  },
  name: String,
  type: {
    type: String,
    enum: ["TEXT", "AUDIO", "VIDEO"],
    default: "TEXT",
  },

  profileId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Profile",
  },
  serverId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Server",
  },

  messages: [messageSchema],

  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export const Channel =
  mongoose.models.Channel || mongoose.model("Channel", ChannelSchema);
