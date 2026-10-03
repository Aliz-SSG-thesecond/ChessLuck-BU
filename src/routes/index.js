const express = require('express')
const router = express.Router()
const isAuthenticatedUser = require('../middlewares/authMiddleware.js');
const mongoose = require("mongoose");

router.use('/auth', require('./authRoutes'))
router.use('/game', require('./gameRoutes'))
router.use('/friends', require('./friendsRoutes'))
router.use('/chat', require('./ChatRoutes'))

router.get("/", (req, res) => {
    res.render("home");
});

router.get(['/about', '/community', '/learn'], (req, res) => {
    res.render("soon");
});

//kub probes:

router.get('/health/live', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

router.get('/health/ready', async (req, res) => {
  try {
    await mongoose.connection.db.ping();

    res.status(200).json({
      status: 'ready',
      mongodb: 'ok'
    });
  } catch (err) {
    res.status(503).json({
      status: 'not_ready',
      mongodb: 'unavailable'
    });
  }
});
module.exports = router
