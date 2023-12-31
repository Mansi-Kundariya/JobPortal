const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      trim: true,
      require: [true, "First name is required"],
      maxlength: 32,
    },

    lastName: {
      type: String,
      trim: true,
      require: [true, "Last name is required"],
      maxlength: 32,
    },

    email: {
      type: String,
      trim: true,
      require: [true, "Email is required"],
      unique: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please add a valid email",
      ],
    },
    password: {
      type: String,
      trim: true,
      require: [true, "Password is required"],
      minlength: [6, "password must have atleast 6 character"],
    },

    role: {
      type: Number,
      default: 0,
    },
  },
  { Timestamp: true }
);

// Encrypting password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

// Compare password
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Return a JWT token
userSchema.methods.getJwtToken = function () {
  return jwt.sign(
    { id: this.id },
    process.env.JWT_SECRET, /*  JWT_SECRET is a random string   */ 
    {
      expiresIn: 3600, /*  jwttoken and cookie both are expired at same time (1hr)    */
    }
  );
};

module.exports = mongoose.model("User", userSchema);
