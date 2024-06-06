import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

// Middleware to handle CORS issues
app.use(cors());

// Middleware to parse JSON bodies
app.use(bodyParser.json());

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  console.log(`Email: ${email}`);
  console.log(`Password: ${password}`);

  // TODO: Validate email and password
  // TODO: Check email and password against database

  res.json({ message: "Login successful", email: email });
});

app.listen(3000, () => console.log("Server running on port 3000"));
