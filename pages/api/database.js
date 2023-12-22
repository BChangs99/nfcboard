// http://localhost:3000/api/database

import { dbConnect } from '../../src/lib/mongodb';

export default async function handler(req, res) {
  try {
    await dbConnect();
    res.status(200).json({ message: "Connected to MongoDB" });
  } catch (error) {
    res.status(500).json({ message: "Failed to connect to MongoDB", error: error.message });
  }
}
