import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { app, server } from "./socket/socket.js";
import { fileURLToPath } from 'url';
import path from "path";

dotenv.config();

app.use(express.json()); //for parsing application/json
app.use(cookieParser()); //for parsing cookies

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// Recreate __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
if (process.env.NODE_ENV !== "development") {
    app.use(express.static("frontend/dist"));
    app.get('*', (req, res) => {
        res.sendFile("frontend/dist")
    })
}

console.log(__dirname);
server.listen(5000, () => {
    console.log("Server is running on port 5000");
})
