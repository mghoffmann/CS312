// Get the canvas object
var canvas = document.getElementById('canvas');

// Create the CS312 drawing context
var ctx = new cs312Context(canvas);

var canvasWidth = canvas.width;
var canvasHeight = canvas.height;

var gameBoardMin = -canvasWidth / 2;
var gameBoardMax = canvasHeight / 2;

var rotateLeft = 0;
var rotateRight = 0;

var scaleFactor = 1;
var scaleFactorDiff = 0.02

var shearFactor = 0;
var shearFactorDiff = 1

/*****************************************************************************
 * Return points for a square
 ****************************************************************************/
function getPoints() {
  var points = [];
  points.push(new Point(-40, -40));
  points.push(new Point(40, -40));
  points.push(new Point(40, 40));
  points.push(new Point(-40, 40));
  points.push(new Point(-40, -40));

  return points;
}

/*****************************************************************************
 * Move the game to the next frame
 ****************************************************************************/
function loop() {

  // color in the background
  ctx.fillStyle = "#000000";
  ctx.fill(0, 0, canvasWidth, canvasHeight);

  // Sample on how to get points and draw them
  // var points = getPoints();
  // var mat = new Matrix();
  // ctx.drawLines(mat, points);


  // draw the left-top square
  // - display two squares in the same location rotating in
  // - opposite directions with a change in angle of 1 degree

  // TODO - add code here



  // draw the right-top square
  // display a square changing in scale from 0.5 to 2

  // TODO - add code here




  // draw the left-bottom square
  // - implement shear in the X and Y axis
  // - from values -30 to 30 degrees

  // TODO - add code here



  // draw the right-bottom square
  // - implement shear in the X and Y axis
  // - from values -30 to 30 degrees

  // TODO - add code here

}

/*****************************************************************************
 * Main - the game
 ****************************************************************************/
function main() {

  // Move the objects to the center
  ctx.translate(canvasWidth / 2, canvasHeight / 2);

  console.log('canvasWidth = ' + canvasWidth);
  console.log('canvasHeight = ' + canvasHeight);

  console.log('gameBoardMin = ' + gameBoardMin);
  console.log('gameBoardMax = ' + gameBoardMax);

  // 30 times a second
  setInterval(loop, 1000 / 30);
}
