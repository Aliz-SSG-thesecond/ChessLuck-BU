const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const localStrategy = require("passport-local").Strategy;

const router = require("./src/routes/index.js");
const User = require("./src/models/User");
const DeckModel = require("./src/models/decks");
const deckData = require("./src/data/decks.json");

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

// Middleware
app.use(
  session({
    secret: process.env.SESSION_SECRET || "canbeanything",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(flash());

app.use((req, res, next) => {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.err_msg = req.flash("err_msg");
  res.locals.error = req.flash("error");
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "/src/views/layouts"));
app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(router);


async function start() {
  try {
    await mongoose.connect(process.env.DATABASE_LOCAL);

    console.log("Connected to MongoDB");

    const deckCount = await DeckModel.countDocuments();

    if (deckCount === 0) {
      await DeckModel.insertMany(deckData);
      console.log(`Seeded ${deckData.length} decks`);
    } else {
      console.log(`Database already contains ${deckCount} decks`);
    }

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

  } catch (err) {
    console.error("Startup failed:", err);
    process.exit(1);
  }
}

start();

module.exports = app;