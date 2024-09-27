import mongoose from 'mongoose';

const connectDb = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.MONGO_URI ?? '');
    console.log('MongoDB connected');
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('MongoDB connection error:', error.message);
    } else {
      console.error('Unknown error during MongoDB connection');
    }
    process.exit(1);
  }
};

export default connectDb;
