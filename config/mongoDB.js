const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect('mongodb+srv://youssefBenSalem:youssefbselem123@cluster0.aanvsah.mongodb.net/?retryWrites=true&w=majority');
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1); // Exit the process with an error code
  }
};

module.exports = connectDB;
