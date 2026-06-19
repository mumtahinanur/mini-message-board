import { Router } from "express";
import { validateMessage } from "../middleware/validateMessage.js";
import {
  getAllMessages,
  showForm,
  createMessage,
  getMessageById
} from "../controllers/messageController.js";

const router = Router();

// GET / — show all messages
router.get("/", getAllMessages);

// GET /new — show the form
router.get("/new", showForm);

// POST /new — handle form submission
router.post("/new", validateMessage, createMessage);

// GET /message/:id — show a single message
router.get("/message/:id", getMessageById);

export default router;
