import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();
const db_pass = process.env.db_pass;
const app = express();
console.log(db_pass);
app.use(cors());

app.use(bodyParser.json());

const uri = `mongodb+srv://${process.env.db_user}:${db_pass}@swift-meter.r5zb9gw.mongodb.net/SwiftieMeter/?retryWrites=true&w=majority`;
//@  == %40
const client = new MongoClient(uri);

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  console.log(`In Server\nEmail: ${email}`);
  console.log(`Password: ${password}`);

  // if (!email || !password) {
  //   return res.status(400).json({ message: "Email and password are required" });
  // }

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

app.listen(3000, () =>
  console.log(
    "Server running on port 3000\n Pass:" +
      process.env.db_pass +
      "\n User:" +
      process.env.db_user
  )
);
