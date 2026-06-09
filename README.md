# Mini Message Board

A simple message board application built with Express.js and EJS. Users can view messages, add new messages, and click on individual messages to see their full details.

## Features

- **View Messages** - Browse all messages on the main board
- **Create Messages** - Add new messages with your name and text
- **Message Details** - Click on any message to view its full content and timestamp
- **Responsive Design** - Clean, modern UI that works on all screen sizes

## Tech Stack

- **Backend**: Node.js with Express.js
- **Templating**: EJS
- **Styling**: Custom CSS

## Installation

1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd mini-message-board
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

Start the development server:

```bash
npm start
```

The application will be available at `http://localhost:3000`

## Project Structure

```
mini-message-board/
├── app.js              # Main Express application
├── package.json        # Dependencies and scripts
├── public/
│   └── style.css       # Stylesheet
├── routes/
│   └── index.js        # API routes
└── views/
    ├── index.ejs       # Message board home
    ├── form.ejs        # New message form
    └── message.ejs     # Message detail view
```

## Routes

- `GET /` - Display all messages
- `GET /new` - Show form to create new message
- `POST /new` - Handle new message submission
- `GET /message/:id` - Display a specific message

## License

MIT
