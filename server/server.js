import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import courseRoutes from "./routes/course.js";
const app = express();
dotenv.config();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});
app.use("/course", courseRoutes);
const port = 8000;
mongoose.connect(
  "mongodb+srv://Ali:Ali@cluster0.x8qec5j.mongodb.net/?retryWrites=true&w=majority",
  (err) => {
    if (!err) {
      app.listen(port, () => {
        console.log(`url: http://localhost:${port}`);
      });
    }
  }
);
