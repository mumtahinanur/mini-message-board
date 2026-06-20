# Mini Message Board

A simple message board application built with Express.js and EJS. Users can view messages, add new messages, and click on individual messages to see their full details.

## Features

- **View Messages** - Browse all messages on the main board
- **Create Messages** - Add new messages with your name and text
- **Message Details** - Click on any message to view its full content and timestamp
- **Input Validation** - Client and server-side validation for name and message text
- **PostgreSQL Database** - Persistent data storage with efficient queries
- **Responsive Design** - Clean, modern UI that works on all screen sizes

## Tech Stack

- **Runtime**: Node.js (v24+)
- **Backend**: Express.js
- **Database**: PostgreSQL
- **Templating**: EJS
- **Validation**: express-validator
- **Styling**: Custom CSS

## Requirements

- Node.js v24.0.0 or higher
- PostgreSQL database

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/mumtahinanur/mini-message-board.git
   cd mini-message-board
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory:
   ```
   DATABASE_URL=postgresql://user:password@localhost:5432/mini_message_board
   PORT=3000
   ```

4. Initialize the database:
   ```bash
   node db/populatedb.js
   ```

## Usage

Start the development server with auto-reload:

```bash
npm run dev
```

Or start the production server:

```bash
npm start
```

The application will be available at `http://localhost:3000`

## Project Structure

```
mini-message-board/
├── app.js                    # Main Express application
├── package.json              # Dependencies and scripts
├── .env                      # Environment variables (create this)
├── controllers/
│   └── messageController.js  # Message business logic
├── db/
│   ├── pool.js               # PostgreSQL connection pool
│   ├── queries.js            # Database queries
│   └── populatedb.js         # Database initialization script
├── middleware/
│   └── validateMessage.js    # Input validation middleware
├── routes/
│   └── index.js              # Application routes
├── public/
│   └── style.css             # Stylesheet
└── views/
    ├── index.ejs             # Message board home
    ├── form.ejs              # New message form
    └── message.ejs           # Message detail view
```

## Routes

- `GET /` - Display all messages
- `GET /new` - Show form to create new message
- `POST /new` - Handle new message submission
- `GET /message/:id` - Display a specific message

## License

ISC
