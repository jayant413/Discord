import mongoose from "mongoose";
import { messageSchema } from "./message-model";
import { directMessageSchema } from "./direct-message-model";

export const MemberSchema = new mongoose.Schema({
  id: {
    type: String,
    default: () => new mongoose.Types.ObjectId(),
  },
  role: {
    type: String,
    enum: ["ADMIN", "MODERATOR", "GUEST"],
    default: "GUEST",
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
  directMessages: [directMessageSchema],

  conversationsInitiated: [{ type: String, ref: "Conversation" }],
  conversationsReceived: [{ type: String, ref: "Conversation" }],

  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const Member =
  mongoose.models.Member || mongoose.model("Member", MemberSchema);
