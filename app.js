import express from "express";
import path from "node:path";
import indexRouter from "./routes/index.js";

const app = express();

const PORT = process.env.PORT || 3000;

// Routes
app.use("/", indexRouter);

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`Server running on port: ${PORT}`)
});
