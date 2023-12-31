const express = require("express");
const { signup, signin, logout, userProfile } = require("../controllers/authController");
const { isAuthenticated } = require("../middleware/auth.js");
const router = express.Router();

//auth routes
router.post("/signup", signup); /* /api/signup */
router.post("/signin", signin); /* /api/signin */
router.get("/logout", logout); /* /api/logout */
router.get("/me", isAuthenticated, userProfile); /* /api/me */

module.exports = router;
