import mongoose from "mongoose";
import { ServerSchema } from "./server-model";
import { MemberSchema } from "./member-model";
import { ChannelSchema } from "./channel-model";

export const ProfileSchema = new mongoose.Schema({
  id: {
    type: String,
    default: () => new mongoose.Types.ObjectId(),
  },
  userId: {
    type: String,
    unique: true,
  },
  name: String,
  imageUrl: String,
  email: String,
  servers: [ServerSchema],
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

export const Profile =
  mongoose.models.Profile || mongoose.model("Profile", ProfileSchema);
