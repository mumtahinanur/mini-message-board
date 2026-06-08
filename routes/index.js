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

// GET /new — show the form
router.get("/new", (req, res) => {
  res.render("form");
});

// POST /new — handle form submission
router.post("/new", (req, res) => {
  const { user, text } = req.body;
  messages.push({text, user, added: new Date() });
  res.redirect("/");
});

export default router;
