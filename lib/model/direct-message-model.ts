import mongoose from "mongoose";

export const directMessageSchema = new mongoose.Schema({
  id: {
    type: String,
    default: () => new mongoose.Types.ObjectId(),
  },
  content: {
    type: String,
    text: true,
  },
  fileUrl: {
    type: String,
    text: true,
    required: false,
  },

  memberId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Member",
  },
  conversationId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Conversation",
  },

  deleted: { type: Boolean, default: false },

  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const DirectMessage =
  mongoose.models.DirectMessage ||
  mongoose.model("DirectMessage", directMessageSchema);
