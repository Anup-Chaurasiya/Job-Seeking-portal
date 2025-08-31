import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
import cookieParser from "cookie-parser";
app.use(cookieParser());
import dbConnection from "./database/dbConnection.js";
import jobRouter from "./routes/jobRoutes.js";
import userRouter from "./routes/userRoutes.js";
import applicationRouter from "./routes/applicationRoutes.js";
import cors from "cors";
import cloudinary from "cloudinary";
import { errorMiddleware } from "./middlewares/error.js";
import fileUpload from "express-fileupload";


app.use(
  cors({
   origin: [
      "http://localhost:5173", // local frontend
      "https://job-seeking-portal-anup.vercel.app", // production frontend
    ],
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
  })
);


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
  api_key: process.env.CLOUDINARY_CLIENT_API,
  api_secret: process.env.CLOUDINARY_CLIENT_SECRET,
}); 


app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/job", jobRouter);
app.use("/api/v1/application", applicationRouter);
dbConnection();

app.get("/", (req, res) => {
  res.send("API is running!");
});


app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  console.log(`Server running at port ${process.env.PORT}`);
});
