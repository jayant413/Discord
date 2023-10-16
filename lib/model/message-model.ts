import mongoose from "mongoose";

export const messageSchema = new mongoose.Schema({
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
  channelId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Channel",
  },

  deleted: { type: Boolean, default: false },

  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const Message =
  mongoose.models.Message || mongoose.model("Message", messageSchema);
