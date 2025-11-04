import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // Optional: log when connected
    mongoose.connection.on("connected", () => {
      console.log(`MongoDB connected successfully to database : ${mongoose.connection.name}`);
    });

    let mongoURI = process.env.MONGODB_URI;

    if (!mongoURI) {
      throw new Error("MONGODB_URI is not defined in environment variables");
    }

    if (mongoURI.endsWith("/")) {
      mongoURI = mongoURI.slice(0, -1);
    }

    // ✅ Just connect using the URI from .env (already includes /Builder)
    await mongoose.connect(mongoURI);

  } catch (error) {
    console.error("MongoDB Connection Failed:", error.message);
    process.exit(1);
  }
};

export default connectDB;
