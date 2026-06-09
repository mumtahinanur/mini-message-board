import express from "express";
import path from "node:path";
import indexRouter from "./routes/index.js";

const app = express();

const PORT = process.env.PORT || 3000;

// View engine setup
app.set("views", path.join(import.meta.dirname, "views"));
app.set("view engine", "ejs");

// Middleware
app.use(express.static(path.join(import.meta.dirname, "public")));
app.use(express.urlencoded({ extended: true })); // parses form POST data into req.body

// Routes
app.use("/", indexRouter);

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`Server running on port: ${PORT}`)
});
