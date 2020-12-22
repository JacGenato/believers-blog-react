const mongoose = require('mongoose');

const SermonSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  content: {
    type: String,
  },
  sermonDate: {
    type: Date,
  },
  datePublished: {
    type: Date,
    default: Date.now,
  },
  videoURL: {
    type: String,
  },
});

module.exports = mongoose.model('sermon', SermonSchema);
