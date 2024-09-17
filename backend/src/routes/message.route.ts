import express from "express";

const router = express.Router();

router.get('/coversation', (req, res) => {
    res.send("Conversation");
});

export default router;