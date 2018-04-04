const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const groupSchema = new Schema({
  courseName: String,
  capacity: Number,
  students: Array,
  waitingList: Array,
  atCapacity: Boolean
}, {
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  }
});

const Group = mongoose.model('group', groupSchema);

module.exports = Group;
