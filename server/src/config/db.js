import mongoose from "mongoose";

const connectDb = async () => {
  await mongoose.connect(process.env.MONGODB_URI);
};

export default connectDb;