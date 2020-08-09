import { Schema, model, Document } from "mongoose";

export interface ChatInterface extends Document {
  room: string;
  messages: any;
}

const ChatSchema = new Schema({
  room: String,
  messages: [],
});

export default model<ChatInterface>("Chat", ChatSchema);
