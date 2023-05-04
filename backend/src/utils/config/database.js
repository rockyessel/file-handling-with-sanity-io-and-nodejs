const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: '.env' });

const url = `${process.env.MONGODB_URI}`;

const connectDatabase = async () => {
  try {
    await mongoose.connect(url);
    mongoose.set('strictQuery', true);
    console.log(`MONGODB is connected`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { connectDatabase };
