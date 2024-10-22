import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import ProjectRoter from "./routes/Project.js";
const app = express();

app.listen(4000, () => {
  console.log("Done Connect To Server..");
});

mongoose
  .connect(
    "mongodb+srv://marwan:3MW9P5ChWi6esAMz@data.st2xw.mongodb.net/projects"
  )
  .then(() => console.log("Done Connect To Database.."))
  .catch((err) => {
    console.log(err.message, "Database Error");
  });

const corsOptions = {
  origin: "http://localhost:3000", // النطاق المسموح به
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  // allowedHeaders: ["Content-Type", "Authorization"],
  // credentials: true, // السماح بإرسال معلومات الاعتماد
};

app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json({ limit: "50mb" }));
app.use(cookieParser());

app.get("/test", (req, res) => {
  return res.status(200).json({ message: "Server is Working Seccussfully." });
});
app.use("/api", ProjectRoter);
