class Queue {

  constructor() {
    this.data = []
  }
}

Queue.prototype.add = function(item) {
  this.data.unshift(item);
}

Queue.prototype.remove = function() {
  return this.data.pop();
}

Queue.prototype.first = function() {
  return this.data[0];
}

Queue.prototype.last = function() {
  return this.data[this.data.length - 1];
}

Queue.prototype.size = function() {
  return this.data.length;
}


module.exports = Queue;
