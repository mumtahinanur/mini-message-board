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

// Get all messages
export const getAllMessages = (req, res) => {
  res.render("index", { messages });
};

// Show the form page
export const showForm = (req, res) => {
  res.render("form");
};

// Create a new message
export const createMessage = (req, res) => {
  const { user, text } = req.body;
  messages.push({ id: messages.length + 1, text, user, added: new Date() });
  res.redirect("/");
};

// Get a single message by ID
export const getMessageById = (req, res) => {
  const message = messages.find((m) => m.id === Number(req.params.id));
  if (!message) return res.status(404).send("Message not found");
  res.render("message", { message });
};
