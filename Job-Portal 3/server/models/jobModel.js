const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      require: [true, "Title is required"],
      maxlength: 70,
    },

    description: {
      type: String,
      trim: true,
      require: [true, "Description is required"]
    },

    salary: {
      type: String,
      trim: true,
      require: [true, "Salary is required"],
    },

    location: {
      type: String
    },

    available: {
      type: Boolean,
      default: true,
    },

    // Link job model to job type model
    jobType: {
        type: ObjectId,
        ref: "JobType",
        required: true
      },

    // Link job model to user model
    user: {
        type: ObjectId,
        ref: "User",
        required: true
      }
  },
  { Timestamp: true }
);


module.exports = mongoose.model("Job", jobSchema);