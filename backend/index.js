import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";


import userRoutes from "./routes/users.js";
import videoRoutes from "./routes/videos.js";
import commentRoutes from "./routes/comments.js";
import authRoutes from "./routes/auth.js";

const app = express();
dotenv.config();

const options = {
  useNewUrlParser: true,
  autoIndex: true, //this is the code I added that solved it all
  keepAlive: true,
  connectTimeoutMS: 10000,
  socketTimeoutMS: 45000,
  family: 4, // Use IPv4, skip trying IPv6
  useUnifiedTopology: true
}

const connect = () => {
  mongoose
    .connect(process.env.MONGO_URL, options)
    .then(() => {
        console.log("Connected to mongo");
    })
    .catch((err) => {
      throw(err);
    });
};

//middlewares
app.use(cookieParser()); // habilitamos cookieParser
app.use(express.json());  // para poder enviar/recibir json
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/videos", videoRoutes);
app.use("/api/comments", commentRoutes);

//errors
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong";
  return res.status(status).json({
    success: false,
    status,
    message
  });
})

app.listen(8800, () => {
  connect();
  console.log("Connected to Server");
});
