import { Router } from "express";

const router = Router();

// In-memory "database"
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

// GET / — show all messages
router.get("/", (req, res) => {
  res.render("index", { messages });
});

export default router;
