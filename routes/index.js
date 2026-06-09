import { Router } from "express";

const router = Router();

// In-memory "database"
const messages = [
  {
    id: 1,
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    id: 2,
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
  messages.push({ id: messages.length + 1, text, user, added: new Date() });
  res.redirect("/");
});

// GET /message/:id — show a single message
router.get("/message/:id", (req, res) => {
  const message = messages.find((m) => m.id === Number(req.params.id));
  if (!message) return res.status(404).send("Message not found");
  res.render("message", { message });
});

export default router;
