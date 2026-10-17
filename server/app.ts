import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import contactRouter from "./routes/contactRouter";

const app = express();

const PORT = process.env.PORT || 3109;

app.use(cors()); // allow our react app (the client folder) to call the API from here.
app.use(express.json()); // turn the JSON body of a request into req.body

app.use("/api/contact", contactRouter);

const start = async () => {
  await mongoose.connect(process.env.MONGO_URL as string);

  console.log("Database Connected Successfully");

  app.listen(PORT, () => {
    console.log(`Server is runing on port: ${PORT}`);
  });
};

start();

// johanessoerding_db_user;
// VuVYysqscpskJRfZ;
// mongodb+srv://johanessoerding_db_user:VuVYysqscpskJRfZ@cluster0.b9fdjjm.mongodb.net/?appName=Cluster0
