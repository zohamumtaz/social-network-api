const { Schema, model } = require('mongoose');
const User = require('./User.js');
const moment = require('moment');


const ThoughtSchema = new Schema(
  {
    thoughtName: {
      type: String,
      required: true,
      trim: true
    },
    createdBy: {
      type: String,
      required: true,
      trim: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
    },
   
    userId: {
      type: String,
      required: [true, 'userId is required for this thought creation']
    }
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    // prevents virtuals from creating duplicate of _id as `id`
    id: false
  }
);

// get total count of comments and replies on retrieval
ThoughtSchema.virtual('UserCount').get(function() {
  
  
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;
