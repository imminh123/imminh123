// lib/dbConnect.js
import mongoose from 'mongoose';

// const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_URI = process.env.NEXT_PUBLIC_MONGODB_URI || 'mongodb://localhost:27017/portfolio';

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

let cachedClient;
let cachedDb;

export async function connectToDatabase() {
  if (cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const client = await mongoose.connect(MONGODB_URI, {});   

  cachedClient = client;
  cachedDb = client.connection.db;

  return { client, db: cachedDb };
}