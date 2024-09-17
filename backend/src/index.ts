import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";

dotenv.config();

const app = express();

app.use(express.json()); //for parsing application/json
app.use(cookieParser()); //for parsing cookies

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

app.listen(5000, () => {
    console.log("Server is running on port 5000");
})