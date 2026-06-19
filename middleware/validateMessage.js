import { body } from "express-validator";

export const validateMessage = [
  body("user")
    .trim()
    .notEmpty().withMessage("Name is required.")
    .isLength({ max: 255 }).withMessage("Name must be under 255 characters."),

  body("text")
    .trim()
    .notEmpty().withMessage("Message cannot be empty.")
    .isLength({ max: 255 }).withMessage("Message must be under 255 characters."),
];
