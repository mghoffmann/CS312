// This script declares global variables for UV mapping
// Jenga cubes.

// var topUV_left = 0.0;
// var topUV_right= 0.25390625;
// var topUV_top = 0;
// var topUV_bottom = 1.0;

// var bottomUV_left = topUV_right;
// var bottomUV_right = topUV_right * 2.0;
// var bottomUV_top = topUV_top;
// var bottomUV_bottom = 1.0;
//
// var sideRUV_left = bottomUV_right;
// var sideRUV_right = sideRUV_left + 0.1640625;
// var sideRUV_top = bottomUV_top;
// var sideRUV_bottom = 1.0;
//
// var sideLUV_left = sideRUV_right;
// var sideLUV_right = sideRUV_right + 0.1640625;
// var sideLUV_top = sideRUV_top;
// var sideLUV_bottom = 1.0;

// var frontUV_left = sideLUV_right;
// var frontUV_right = 1.0;
// var frontUV_top = 0.333;
// var frontUV_bottom = 0.666;
//
// var backUV_left = frontUV_left;
// var backUV_right = 1.0;
// var backUV_top = frontUV_bottom;
// var backUV_bottom = 1.0;

var topUVSquare = [0.0, 0.25390625, 0.0, 1.0];
var bottomUVSquare = [0.25390625, 0.25390625 * 2.0, 0.0, 1.0];
var rightUVSquare = [0.25390625 * 2.0, 0.25390625 * 2.0 + 0.1640625, 0.0, 1.0];
var leftUVSquare = [0.25390625 * 2.0 + 0.1640625, 0.25390625 * 2.0 + 0.328125, 0.0, 1.0];
var frontUVSquare = [leftUVSquare[1], 1.0, 0.333, 0.666];
var backUVSquare = [leftUVSquare[1], 1.0, 0.666, 1.0];

// These indicate which UV arrays correspond to which side of the Jenga block
var jengaTop = 0;
var jengaBottom = 1;
var jengaRight = 2;
var jengaLeft = 3;
var jengaFront = 4;
var jengaBack = 5;

function getUVtriangles(square) {
  return [
    [
      new THREE.Vector2(square[1], square[3]),
      new THREE.Vector2(square[0], square[3]),
      new THREE.Vector2(square[1], square[2])
    ],
    [
      new THREE.Vector2(square[0], square[3]),
      new THREE.Vector2(square[0], square[2]),
      new THREE.Vector2(square[1], square[2])
    ]
  ];
}

function mapJengaGeometry(geometry) {
  // Clear any existing UV mapping on the geometry
  geometry.faceVertexUvs[0] = [];

  var rightTriangles = getUVtriangles(rightUVSquare);
  geometry.faceVertexUvs[0][0] = rightTriangles[0];
  geometry.faceVertexUvs[0][1] = rightTriangles[1];

  var leftTriangles = getUVtriangles(leftUVSquare);
  geometry.faceVertexUvs[0][2] = leftTriangles[0];
  geometry.faceVertexUvs[0][3] = leftTriangles[1];

  var topTriangles = getUVtriangles(topUVSquare);
  geometry.faceVertexUvs[0][4] = topTriangles[0];
  geometry.faceVertexUvs[0][5] = topTriangles[1];

  // var bottomTriangles = getUVtriangles(bottomUVSquare);
  // geometry.faceVertexUvs[0][2] = topTriangles[0];
  // geometry.faceVertexUvs[0][3] = topTriangles[1];
  //
  // var rightTriangles = getUVtriangles(rightUVSquare);
  // geometry.faceVertexUvs[0][4] = rightTriangles[0];
  // geometry.faceVertexUvs[0][5] = rightTriangles[1];
  //
  //
  // var frontTriangles = getUVtriangles(frontUVSquare);
  // geometry.faceVertexUvs[0][8] = frontTriangles[0];
  // geometry.faceVertexUvs[0][9] = frontTriangles[1];
  //
  // var backTriangles = getUVtriangles(backUVSquare);
  // geometry.faceVertexUvs[0][10] = backTriangles[0];
  // geometry.faceVertexUvs[0][11] = backTriangles[1];
}
