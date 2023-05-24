const express = require("express");
const router = express.Router();
const {
  addEvent,
  getEvent,
  latestEvents,
  updateEvent,
  deleteEvent
} = require("../controllers/eventController");

router.get("/events/:id", getEvent);
router.get("/events/", latestEvents);
router.post("/events", addEvent);
router.put("/events/:id", updateEvent);
router.delete("/events/:id", deleteEvent);

module.exports = router;