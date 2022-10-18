import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import connectDB from "./utils/connectDB.js";
import userRoute from "./routes/user.route.js";

dotenv.config();

const app = express();
const port = process.env.PORT;
const uri = process.env.URI;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/api/user", userRoute);

app.listen(port, () => {
  connectDB(uri);
  console.log(`Server is running on http://localhost:${port}`);
});
 