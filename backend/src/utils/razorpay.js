import Razorpay from 'razorpay';
import dotenv from 'dotenv';
dotenv.config();

if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
  console.error('Razorpay Key ID or Key Secret is missing', process.env.RAZORPAY_KEY_ID, process.env.RAZORPAY_KEY_SECRET);
  process.exit(1); // Exit the application
}
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

export default razorpay;
