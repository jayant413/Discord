import mongoose from "mongoose";
import { MemberSchema } from "./member-model";
import { ChannelSchema } from "./channel-model";

export const ServerSchema = new mongoose.Schema({
  id: {
    type: String,
    default: () => new mongoose.Types.ObjectId(),
  },
  name: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    text: true,
  },
  inviteCode: {
    type: String,
    unique: true,
  },
  profileId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Profile",
  },
  members: [MemberSchema],
  channels: [ChannelSchema],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export const Server =
  mongoose.models.Server || mongoose.model("Server", ServerSchema);
