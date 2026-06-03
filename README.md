# ChessLuck

ChessLuck is a multiplayer chess-inspired web app with an experimental twist: players do not always have the same luck. Inspired by a friend’s idea that traditional chess gives both sides equal chance, this project explores a version of chess where each side can have different probabilities, chance, and advantages—more like a real-world fight.

## Overview

- **Frontend**: built using AI-assisted design and implementation.
- **Backend**: implemented manually using Node.js, Express, MongoDB, and authentication.
- **Realtime**: uses WebSockets for live game interaction and chat.
- **Game logic**: powered by `chess.js` and `chessboard.js`.

## Key Features

- User registration, login, and session management
- Web-based chess gameplay with live multiplayer support
- Chatroom and friend management features
- Deck/selection logic for varied gameplay chances
- AI support used in the frontend development process

## Tech Stack

- Node.js
- Express
- MongoDB / Mongoose
- Passport.js (local authentication)
- Socket.IO
- EJS templates
- `chess.js` and `chessboard.js`
- `dotenv`, `bcryptjs`, `jsonwebtoken`

## Repository Structure

- `app.js` / `server.js` - main application and server startup
- `src/` - backend source code
  - `config/` - app configuration
  - `controllers/` - request handlers
  - `middlewares/` - authentication and validation
  - `models/` - Mongoose schemas and game models
  - `routes/` - Express routing
  - `services/` - business logic utilities
  - `utils/` - helper modules
- `public/` - static assets
  - `js/` - frontend scripts including chess UI logic
- `src/views/` - EJS server-rendered pages

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Aliz-SSG-thesecond/ChessLuck-BU.git
   cd Chessluck
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file with your environment settings (MongoDB URI, session secret, email settings, etc.).
4. Start the app in development:
   ```bash
   npm run dev
   ```
5. Or start normally:
   ```bash
   npm start
   ```

## Environment Variables

Create a `.env` file in the project root and add the values your app needs, for example:

```bash
MONGODB_URI=your_mongo_connection_string
SESSION_SECRET=your_session_secret
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password
```

## Contributing

If you want to help improve ChessLuck, feel free to add issues or send a pull request. The project is in early development, so changes to game balance, socket handling, and UI are especially welcome.

## Notes

- The current version is a work in progress.
- Backend and game logic are hand-coded; WebSocket code was initially assisted by AI but will be improved with deeper manual implementation later.
- The idea is intentionally experimental: chess with uneven luck and advantage, rather than the equal-opportunity style of classic chess.

## Future Improvements

- Strengthen WebSocket stability and connection handling
- Add clearer rules for luck/advantage effects
- Improve UI/UX and game feedback
- Implement more robust testing and validation
- Expand matchmaking and friend gameplay support

## Author

Created by **Aliz-SSG-thesecond**.

> ChessLuck is built to experiment with fairness, chance, and game design in a familiar chess format.
