import { validationResult, matchedData } from "express-validator";
import * as db from "../db/queries.js";

// Get all messages
export const getAllMessages = async (req, res) => {
  const messages = await db.getAllMessages();
  res.render("index", { messages });
};

// Show the form page
export const showForm = (req, res) => {
  res.render("form");
};

// Create a new message
export const createMessage = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).render("form", { errors: errors.array() });
  }

  const { user, text } = matchedData(req);
  await db.insertMessage(user, text);
  res.redirect("/");
};

// Get a single message by ID
export const getMessageById = async (req, res) => {
  const message = await db.getMessageById(req.params.id);
  if (!message) return res.status(404).send("Message not found");
  res.render("message", { message });
};
