function calculateRectangleArea (length, width) {
  let solution;
  (length >= 0 && width >= 0) ? (solution = length * width) : (solution = undefined);
  return solution;
}

function calculateTriangleArea (base, height) {
  let solution;
  (base >= 0 && height >= 0) ? (solution = base * height / 2) : (solution = undefined);
  return solution;
}

function calculateCircleArea (radius) {
  let solution;
  (radius >= 0) ? (solution = Math.PI * radius ** 2) : (solution = undefined);
  return solution;
}

console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined