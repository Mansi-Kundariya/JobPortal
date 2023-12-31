const express = require("express");
const { isAuthenticated, isAdmin } = require("../middleware/auth.js");
const { createJob, singleJob, updateJob, showJobs } = require("../controllers/jobsController.js");
const router = express.Router();

// Job routes
router.post("/job/create", isAuthenticated, isAdmin, createJob); /* /api/job/create */
router.get("/job/:id", singleJob); /* /api/job/id */
router.put("/job/update/:job_id", isAuthenticated, isAdmin, updateJob); /* /api/job/update/job_id */
router.get("/jobs/show", showJobs); /* /api/jobs/show */

module.exports = router;