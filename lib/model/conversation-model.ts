import mongoose from "mongoose";
import { directMessageSchema } from "./direct-message-model";

export const ConversationSchema = new mongoose.Schema({
  id: {
    type: String,
    default: () => new mongoose.Types.ObjectId(),
  },

  memberOneId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    unique: true,
    ref: "Member",
  },
  memberTwoId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    unique: true,
    ref: "Member",
  },

  directMessages: [directMessageSchema],
});

export const Conversation =
  mongoose.models.Conversation ||
  mongoose.model("Conversation", ConversationSchema);
