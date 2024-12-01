const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    min: 3,
  },

  sector: {
    type: String,
    required: true,
    enum: [
      "IT",
      "Finance",
      "Entertainment",
      "Health",
      "Education",
      "Real Estate",
      "Engineering",
      "Others",
    ],
    // type: String,
  },
  jobtype: {
    type: String,
    required: true,
    enum: ["PartTime", "FullTime", "FreeLance"],
    // type: String,
  },

  experiencelvl: {
    type: String,
    required: true,
    enum: ["Interdimate", "Entry Level", "Expert"],
    // type: String,
  },

  skills: {
    type: Array,
    required: true,
  },
  sallary: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  responsibilities: {
    type: Array,
  },

  requirements: {
    type: Array,
  },
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  openDate: {
    type: Date,
    default: Date.now,
  },
  closeDate: {
    type: Date,
    required: false,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  saved: [{ type: mongoose.Types.ObjectId, ref: "User" }],

  applicants: [
    {
      applicant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      proposal: String,
  bid: String,
      status: {
        type: String,
        default: "Pending",
      },
      appliedDate: {
        type: Date,
        default: Date.now,
      },
      proposal: {
        type: String,
        default: "../public/uploads/default.pdf",
      },
      // bid: {
      //   type: String,
      //   default: "",
      // },
    },
  ],

  payment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Payment",
  },
});

module.exports = mongoose.model("Job", jobSchema);
