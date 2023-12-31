const express = require("express");
const { createJobType, allJobsType } = require("../controllers/jobTypeController");
const { isAuthenticated } = require("../middleware/auth.js");
const router = express.Router();

// Job type routes
router.post("/type/create", isAuthenticated, createJobType); /* /api/type/create */
router.get("/type/jobs", allJobsType); /* /api/type/jobs */

module.exports = router;