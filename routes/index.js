import { Router } from "express";
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
router.post("/new", createMessage);

// GET /message/:id — show a single message
router.get("/message/:id", getMessageById);

export default router;
