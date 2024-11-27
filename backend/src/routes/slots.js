import express from "express";
const router = express.Router();
import crypto from 'crypto';
import Slot from "../models/slot.js";
import Razorpay from "../utils/razorpay.js";
import createGoogleMeet from "../utils/googleMeet.js";
import dotenv from 'dotenv';
dotenv.config();
import { createOrder, verifyCapture ,createSlot } from "../validators/joi.validator.js";

router.post("/slots/order", createOrder, async (req, res) => {
  try {
    const order = await Razorpay.orders.create({
      amount: req.validatedBody.amount * 100,
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    });
    return res.status(200).json({
      order_id: order.id,
      currency: order.currency,
      amount: order.amount,
    });
  } catch (err) {
    console.error("Error during payment:", err);
    return res.status(500).json({
      status: "failed",
      code: 500,
      error: err.message,
    });
  }
});

router.post("/slots/verify-capture", verifyCapture, async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
      req.validatedBody;
    const sign = `${razorpay_order_id}|${razorpay_payment_id}`;
    const expectedSign = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(sign)
      .digest("hex");
    const verified = razorpay_signature === expectedSign;

    if (verified) {
      const payment = await Razorpay.payments.fetch(razorpay_payment_id);
      if (payment.status === "captured") {
        return res.status(200).json({ message: "Payment captured" });
      } else {
        res.status(400).json({ message: "Payment not captured" });
      }
    } else {
      res.status(400).json({ message: "Invalid signature sent" });
    }
  } catch (error) {
    console.error("Error in payment verification", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.post("/slots/book",createSlot, async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      courseId,
      price,
      paymentId,
      platform,
      dateTime,
      start_date,
      end_date,
    } = req.validatedBody;
    // let inviteUrl;
    // if (platform === "google") {
    //   inviteUrl = await createGoogleMeet(name, email, dateTime);
    // }
    const newSlot = new Slot({
      name,
      email,
      phone,
      courseId,
      price,
      paymentId,
      platform,
      dateTime,
      start_date,
      end_date,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  
    // Save the new slot to the database
    await newSlot.save();

    return res.status(200).json({ message: "Slot booked successfully", data: newSlot });
  } catch (err) {
    console.error("Error during slot booking:", err);
    res.status(500).json({ error: err.message });
  }
});

router.get("/slots/:id", async (req, res) => {
  try {
    const slot = await Slot.findById(req.params.id);
    if (!slot) return res.status(404).json({ message: "Slot not found" });
    res.status(200).json(slot);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/slots", async (req, res) => {
  try {
    const slots = await Slot.find();
    res.status(200).json(slots);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.put("/slots/:id", async (req, res) => {
  try {
    const slot = await Slot.findByIdAndUpdate({
      _id: req.params.id,
    }, req.body, { new: true });
    if (!slot) return res.status(404).json({ message: "Slot not found" });
    res.status(200).json(slot);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
