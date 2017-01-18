// A Point is just a 2-dimensional vector that represents
// spatial values instead of velocity, direction, or difference values.
function Point(x, y) {
    return new Vector(x, y);
}

Point.prototype = {
  constructor : Point,

};
