const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const jobTypeSchema = new mongoose.Schema(
  {
    jobTypeName: {
      type: String,
      trim: true,
      require: [true, "Job category  is required"],
      maxlength: 70,
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


module.exports = mongoose.model("JobType", jobTypeSchema);