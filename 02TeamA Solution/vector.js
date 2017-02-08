/****************************************************************************
 * Vector Object
 ***************************************************************************/

var Vector = function(dx, dy) {
  'use strict';
  this.dx = dx;
  this.dy = dy;
};

/***************************************************************************
 * prototype functions
 ***************************************************************************/
Vector.prototype = {

  constructor: Vector,

  addVector: function(vector2) {
    this.dx += vector2.dx;
    this.dy += vector2.dy;
  },

  getDx: function() {
    return this.dx;
  },

  getDy: function() {
    return this.dy;
  },

  addDx: function(v) {
    this.dx += v;
  },

  addDy: function(v) {
    this.dy += v;
  },

  setDx: function(v) {
    this.dx = v;
  },

  setDy: function(v) {
    this.dy = v;
  },

  getAngle: function() {
    return rad2deg(Math.atan2(-this.dy, this.dx));
  },

  getMag: function() {
    return Math.sqrt((this.dx * this.dx) + (this.dy * this.dy));
  },

  setMag: function(mag) {
    var angleRadians = deg2rad(this.getAngle());
    this.dx = -Math.cos(angleRadians) * mag;
    this.dy = -Math.sin(angleRadians) * mag;
  },

  setAngle: function(angle) {
    var angleRadians = deg2rad(angle);
    var speed = this.getMag();
    this.dx = Math.cos(angleRadians) * speed;
    this.dy = -Math.sin(angleRadians) * speed;
  },

  setVelocity: function(angle, mag) {
    var angleRadians = deg2rad(angle);
    this.dx = Math.cos(angleRadians) * mag;
    this.dy = -Math.sin(angleRadians) * mag;
  },

  reverse: function() {
    this.dx = -this.dx;
    this.dy = -this.dy;
  },

  log: function () {
    console.log("Point: (" + this.x + ", " + this.y + ")");
  }
};
