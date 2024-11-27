import { Schema, model } from "mongoose";

const slotSchema = new Schema({
  start_date: { type: Date, required: true },
  end_date: { type: Date, required: true },
  isBooked: { type: Boolean, default: false },
  name: { type: String },
  email: { type: String },
  phone: { type: String },
  courseId: { type: String },
  price: { type: Number },
  paymentId: { type: String },
  inviteUrl: { type: String },
  updatedAt: { type: Date },
  createdAt: { type: Date }, 
},{
  timestamps: true,
});
export default model("Slot", slotSchema);

