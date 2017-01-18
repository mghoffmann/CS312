// Defines a 2-dimensional vector with x and y components.
function Vector(x, y) {

// What's the lifespan of the x and y parameters? Will this function
// work without using this.x and this.y?
  this.x = x;
  this.y = y;
};

// These will be constructed a lot, so these shortcut functions save some time
// and typing.
function vZero() { return new Vector(0,0); }
function vOne() { return new Vector(1,1); }

Vector.prototype = {
  constructor: Vector,
  getX: function() { return this.x; },
  getY: function() { return this.y; },
  // Returns the distance from this spatial Vector to another
  distance: function(other) { return Math.sqrt(Math.pow(other.getX() - this.getX(), 2.0) + Math.pow(other.getY() - this.getY(), 2.0)); },
  // Returns the length, or magnitude, of this Vector.
  length: function(other) { return this.distance(vZero()); },
  // Returns the direction of this vector, as a unit vector with a length of one
  direction: function() {
    var len = this.length();
    return Vector(this.x / len, this.y / len);
  },
  // Returns a Vector equal to this Vector, with its components multiplied by
  // the given value.
  // If the given value is another vector, returns the result of their vector
  // multiplication.
  multiply: function(value) {
    if (!value.x || !value.y)
        return Vector(this.x * value, this.y * value);
    else
        return new Vector(this.x * value.x, this.y * value.y);
  },
  // Returns a Vector equal to this Vector, with its components divided by
  // the given value.
  // If the given value is another vector, returns the result of their vector
  // division.
  divide: function(value) {
    if (!value.x || !value.y)
        return Vector(this.x / value, this.y / value);
    else
        return new Vector(this.x / value.x, this.y / value.y);
  },
  // Returns a Vector equal to this Vector, with its components added to
  // the given value.
  // If the given value is another vector, returns their sum.
  add: function(value) {
    if (!value.x || !value.y)
        return Vector(this.x + value, this.y + value);
    else
        return new Vector(this.x + value.x, this.y + value.y);
  },
  // Returns a Vector equal to this Vector, with the given value subtracted from
  // its components subtracted by the given value.
  // If the given value is another vector, returns their difference.
  subtract : function(value) {
    if (!value.x || !value.y)
        return Vector(this.x - value, this.y - value);
    else
        return new Vector(this.x - value.x, this.y - value.y);
  },

  addX : function(value) { this.x += value; },
  addY : function(value) { this.y += value; },

  setX : function(value) { this.x = value; },
  setY : function(value) { this.y = value; }
};

var test = new Vector(1,1);
console.log(test.distance(new Vector(0,0)));
