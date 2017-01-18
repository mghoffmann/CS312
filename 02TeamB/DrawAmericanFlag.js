// Old Glory Red
var red = "rgb(191, 10, 48)";
// White
var white = "rgb(255, 255, 255)";
// Old Glory Blue
var blue = "rgb(0, 40, 104)";

// Draws a star on the given context, at the given coordinates, with the given
// diameter and optional inner diameter. If the inner diameter is excluded or
// evaluates to false (i.e. zero),
// it's set to one third of the diameter.
function drawStar(ctx, x, y, diameter, innerDiameter) {
  ctx.beginPath();
  var outerRadius = diameter / 2.0;
  if (!innerDiameter) {
    var innerRadius = diameter / 6.0;
  }
  else {
    var innerRadius = innerDiameter / 2.0;
  }
  ctx.fillStyle = white;

  var curRotation = Math.PI / 2.0 * 3.0;
  var rotationStep = Math.PI / 5.0;

  ctx.moveTo(x,y);
  for (var i = 0; i <= 5; i++) {
    var curX = x + Math.cos(curRotation) * outerRadius;
    var curY = y + Math.sin(curRotation) * outerRadius;
    ctx.lineTo(curX, curY);

    curRotation += rotationStep;

    var curX = x + Math.cos(curRotation) * innerRadius;
    var curY = y + Math.sin(curRotation) * innerRadius;
    ctx.lineTo(curX, curY);

    curRotation += rotationStep;
  }

  ctx.closePath();

  ctx.fill();
}

function drawAmericanFlag(ctx, x, y, hoist) {
  // Dimensions were taken from here:
  // http://www.instructables.com/id/How-to-Make-an-American-Flag/step2/Flag-Layout/

  var fly = 1.9 * hoist;
  var stripeHeight = hoist / 13.0;

  ctx.lineWidth = stripeHeight;

  var stripe = 1;
  //for (var sy = y + stripeHeight / 2; sy < hoist; sy += stripeHeight) {
  for (var stripe = 0; stripe < 13; stripe++) {
    if (!(stripe % 2)) {
      ctx.fillStyle = red;
    }
    else {
      ctx.fillStyle = white;
    }
    ctx.fillRect(x, y + stripe * stripeHeight, fly, stripeHeight);
  }

  // Draw the union
  var unionHoist = 0.5385 * hoist;
  var unionFly = 0.76 * hoist;
  ctx.fillStyle = blue;
  ctx.fillRect(x, y, unionFly, unionHoist);

  var starHorizDist = 0.0633 * hoist;
  var starVertDist = 0.0538 * hoist;
  var starDiameter = 0.0616 * hoist;

  for (var row = 1; row <= 9; row++) {
    var starX = 0;
    var starY = starVertDist * row;
    var stars = 0;

    if (row % 2 == 1) {
      starX = starHorizDist;
      stars = 6;
    }
    else {
      starX = starHorizDist * 2.0;
      stars = 5;
    }

    for (var i = 0; i < stars; i++) {
      drawStar(ctx, x + starX, y + starY, starDiameter, 0.0);
      starX += starHorizDist * 2;
    }
  }
}
