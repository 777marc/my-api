'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var NoteSchema = new Schema({
  body: {
    type: String,
    required: 'must not be empty'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  parent_id: {
    type: String
  }
});

module.exports = mongoose.model('Notes', NoteSchema);