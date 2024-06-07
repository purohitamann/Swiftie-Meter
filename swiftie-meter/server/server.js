import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();
// MERN Stack Application
const app = express();
app.use(cors());
app.use(bodyParser.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@swift-meter.r5zb9gw.mongodb.net/SwiftieMeter?retryWrites=true&w=majority`;
const client = new MongoClient(uri);

app.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
    await client.connect();
    const database = client.db("SwiftieMeter");
    const collection = database.collection("UserAccount");
    const score = 0;
    const user = { email, password, score };
    const result = await collection.insertOne(user);

    res.json({
      message: "User account created successfully",
      insertedId: result.insertedId,
    });
  } catch (error) {
    console.error("Error connecting to MongoDB or inserting user:", error);
    res.status(500).json({ message: "Internal Server Error" });
  } finally {
    await client.close();
  }
});
app.get("/leaderboard", async (req, res) => {
  try {
    console.log("Connecting to MongoDB for User Retrieval...");
    await client.connect();
    const database = client.db("SwiftieMeter");
    const collection = database.collection("UserAccount");
    const users = await collection.find({}).sort({ score: -1 }).toArray();
    console.log(users);
    res.json(users);
  } catch (error) {
    console.error("Error retrieving users:", error);
    res.status(500).json({ message: "Internal Server Error" });
  } finally {
    await client.close();
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
