import mongoose from "mongoose"

const SettingsSchema = new mongoose.Schema({
  siteName: {
    type: String,
    required: true,
    default: "Bugema Adventist Primary School",
  },
  tagline: {
    type: String,
    default: "Excellence in Christian Education",
  },
  description: {
    type: String,
    default: "Nurturing young minds with values and knowledge",
  },
  logo: {
    type: String,
    default: null,
  },
  favicon: {
    type: String,
    default: null,
  },
  primaryColor: {
    type: String,
    default: "#3b82f6",
  },
  secondaryColor: {
    type: String,
    default: "#10b981",
  },
  accentColor: {
    type: String,
    default: "#f59e0b",
  },
  darkMode: {
    type: Boolean,
    default: false,
  },
  customCSS: {
    type: String,
    default: "",
  },
  contactInfo: {
    address: {
      type: String,
      default: "Bugema, Wakiso District, Uganda",
    },
    phone: {
      type: String,
      default: "+256 123 456 789",
    },
    email: {
      type: String,
      default: "info@bugemaprimary.ac.ug",
    },
    officeHours: {
      type: String,
      default: "Mon - Fri: 8:00 AM - 5:00 PM",
    },
  },
  socialMedia: {
    facebook: String,
    twitter: String,
    instagram: String,
    youtube: String,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
})

SettingsSchema.pre("save", function (next) {
  this.updatedAt = new Date()
  next()
})

export default mongoose.models.Settings || mongoose.model("Settings", SettingsSchema)
